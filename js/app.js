/* ============ エネ管ドリル — アプリ本体 ============ */
(function () {
  'use strict';

  /* ---------------- 定数 ---------------- */

  var CATEGORIES = [
    { id: 'transformer', subject: 3, name: '変圧器' },
    { id: 'induction',   subject: 3, name: '誘導電動機' },
    { id: 'power',       subject: 3, name: '力率改善・工場配電' },
    { id: 'powerelec',   subject: 3, name: 'パワーエレクトロニクス' },
    { id: 'motordrive',  subject: 4, name: '電動力応用（必須）' },
    { id: 'lighting',    subject: 4, name: '照明' },
    { id: 'aircon',      subject: 4, name: '空気調和' }
  ];

  /* 30日計画（ユーザーの学習方針に対応） */
  var PLAN = [
    { from: 1,  to: 3,  text: '課目Ⅲ「変圧器」を分野別ドリルで連続演習。同じ型を続けて解いて解法を体に入れる', link: '#drill', btn: 'ドリルへ' },
    { from: 4,  to: 6,  text: '課目Ⅲ「誘導電動機」。すべり・二次入力の比率・比例推移を重点的に', link: '#drill', btn: 'ドリルへ' },
    { from: 7,  to: 9,  text: '課目Ⅲ「力率改善・工場配電」。コンデンサ容量と損失低減の計算を反復', link: '#drill', btn: 'ドリルへ' },
    { from: 10, to: 10, text: '課目Ⅲ「パワエレ」＋ここまでの弱点を復習。※進捗判断ポイント', link: '#review', btn: '復習へ' },
    { from: 11, to: 14, text: '課目Ⅳ「電動力応用（必須）」。ポンプ・送風機の動力計算と回転数比例則', link: '#drill', btn: 'ドリルへ' },
    { from: 15, to: 17, text: '課目Ⅳ「照明」。光束法とその変形を公式カード＋演習で固める', link: '#drill', btn: 'ドリルへ' },
    { from: 18, to: 20, text: '課目Ⅳ「空気調和」。COP計算と熱量の単位換算を反復', link: '#drill', btn: 'ドリルへ' },
    { from: 21, to: 27, text: '模試モードで時間を計って通し演習（課目Ⅲ・Ⅳを交互に）。単位換算ミスはミスノートへ', link: '#exam', btn: '模試へ' },
    { from: 28, to: 30, text: '間違えた問題だけ再演習。新しい問題には手を出さない', link: '#review', btn: '復習へ' }
  ];

  var NOTE_TAGS = ['単位換算', '公式ど忘れ', '計算ミス', '読み違い', 'その他'];
  var CHOICE_KEYS = ['ア', 'イ', 'ウ', 'エ', 'オ'];
  var DAY_MS = 24 * 60 * 60 * 1000;

  /* ---------------- 状態 ---------------- */

  var S = null;          // 進行中のセッション（drill / review / exam）
  var timerId = null;    // 模試タイマー
  var view = document.getElementById('view');
  var headerTitle = document.getElementById('headerTitle');
  var headerBack = document.getElementById('headerBack');

  /* ---------------- ヘルパー ---------------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function catById(id) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
    return null;
  }
  function questionsOf(catId) {
    return (window.QUESTIONS || []).filter(function (q) { return q.category === catId; });
  }
  function questionById(id) {
    var qs = window.QUESTIONS || [];
    for (var i = 0; i < qs.length; i++) if (qs[i].id === id) return qs[i];
    return null;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function parseDate(str) {
    var p = String(str).split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]); // ローカル0時
  }
  function todayMidnight() {
    var n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }
  function daysUntilExam() {
    var s = Store.settings();
    return Math.round((parseDate(s.examDate) - todayMidnight()) / DAY_MS);
  }
  function planDay() {
    var s = Store.settings();
    return Math.floor((todayMidnight() - parseDate(s.startDate)) / DAY_MS) + 1;
  }
  function stripTags(html) {
    return String(html).replace(/<[^>]*>/g, '');
  }
  function pct(n) { return Math.round(n * 100); }
  function stopTimer() {
    if (timerId !== null) { clearInterval(timerId); timerId = null; }
  }
  function setHeader(title, backTarget) {
    headerTitle.textContent = title;
    if (backTarget) {
      headerBack.classList.remove('hidden');
      headerBack.onclick = function () { location.hash = backTarget; };
    } else {
      headerBack.classList.add('hidden');
      headerBack.onclick = null;
    }
  }
  function rateClass(rate) {
    return rate >= 0.6 ? '' : (rate >= 0.45 ? 'mid' : 'low');
  }

  /* 分野別の集計: {attempted(問数), total, answers, correct} */
  function categoryStats(catId) {
    var st = Store.stats();
    var qs = questionsOf(catId);
    var out = { attempted: 0, total: qs.length, answers: 0, correct: 0 };
    qs.forEach(function (q) {
      var r = st[q.id];
      if (r && r.a > 0) {
        out.attempted += 1;
        out.answers += r.a;
        out.correct += r.c;
      }
    });
    return out;
  }
  function subjectRate(subject) {
    var answers = 0, correct = 0;
    CATEGORIES.forEach(function (c) {
      if (c.subject !== subject) return;
      var s = categoryStats(c.id);
      answers += s.answers; correct += s.correct;
    });
    return answers === 0 ? null : correct / answers;
  }

  /* ---------------- ルーティング ---------------- */

  var routes = {
    home: renderHome,
    drill: function (args) {
      if (args && args[0]) renderDrillList(args[0]);
      else renderDrillMenu();
    },
    exam: renderExamMenu,
    review: renderReviewMenu,
    cards: renderCards,
    notes: renderNotes,
    settings: renderSettings,
    quiz: renderQuiz
  };

  function route() {
    stopTimer();
    var hash = (location.hash || '#home').slice(1);
    var name = hash.split('/')[0] || 'home';
    if (!routes[name]) name = 'home';
    if (name !== 'quiz') S = null; // セッション画面以外に移動したら破棄
    document.querySelectorAll('#tabbar a').forEach(function (a) {
      var tab = a.getAttribute('data-tab');
      var active = (tab === name) || (name === 'quiz' && S && tab === S.kind) ||
                   (name === 'quiz' && S && S.kind === 'drill' && tab === 'drill');
      a.classList.toggle('active', !!active);
    });
    routes[name](hash.split('/').slice(1));
    view.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  /* ---------------- ホーム ---------------- */

  function renderHome() {
    setHeader('エネ管ドリル', null);
    var days = daysUntilExam();
    var day = planDay();
    var settings = Store.settings();

    var countdownHtml;
    if (days > 0) {
      countdownHtml = '<div class="days">あと' + days + '日</div><div class="label">試験日 ' + esc(settings.examDate) + '</div>';
    } else if (days === 0) {
      countdownHtml = '<div class="days">試験当日</div><div class="label">落ち着いて。単位換算を最後に見直す</div>';
    } else {
      countdownHtml = '<div class="days">おつかれさま</div><div class="label">試験日を過ぎています（設定から変更できます）</div>';
    }

    var task = null;
    for (var i = 0; i < PLAN.length; i++) {
      if (day >= PLAN[i].from && day <= PLAN[i].to) { task = PLAN[i]; break; }
    }
    var taskHtml = '';
    if (day >= 1 && task) {
      taskHtml =
        '<div class="panel today-task">' +
        '<span class="day-chip">Day ' + day + ' / 30</span>' +
        '<div>' + esc(task.text) + '</div>' +
        '<a class="btn secondary" style="margin-top:10px" href="' + task.link + '">' + esc(task.btn) + '</a>';
      if (day >= 10) {
        var r3 = subjectRate(3);
        if (r3 !== null && r3 < 0.5) {
          taskHtml += '<div class="checkpoint">⚠️ 課目Ⅲの正答率が' + pct(r3) + '%です。計画の判断ポイント：5割未満なら配分の見直し（片方への全振り）も検討を。</div>';
        }
      }
      taskHtml += '</div>';
    } else if (day < 1) {
      taskHtml = '<div class="panel today-task"><span class="day-chip">準備期間</span><div>学習開始日（' + esc(settings.startDate) + '）前です。設定から開始日を変更できます。</div></div>';
    }

    var reviewCount = Store.reviewIds().length;

    var statsHtml = '';
    [3, 4].forEach(function (sub) {
      statsHtml += '<div class="section-title">課目' + (sub === 3 ? 'Ⅲ 電気設備及び機器' : 'Ⅳ 電力応用') + '</div><div class="panel">';
      CATEGORIES.forEach(function (c) {
        if (c.subject !== sub) return;
        var s = categoryStats(c.id);
        var rate = s.answers === 0 ? null : s.correct / s.answers;
        var rateText = rate === null ? '未着手' : pct(rate) + '%';
        var w = rate === null ? 0 : pct(rate);
        statsHtml +=
          '<div class="statrow">' +
          '<div class="statrow-head"><span>' + esc(c.name) + ' <span class="muted small">' + s.attempted + '/' + s.total + '問</span></span>' +
          '<span class="rate">' + rateText + '</span></div>' +
          '<div class="bar-wrap"><div class="bar"><div class="fill ' + (rate === null ? '' : rateClass(rate)) + '" style="width:' + w + '%"></div></div>' +
          '<div class="passline"></div></div>' +
          '</div>';
      });
      var sr = subjectRate(sub);
      statsHtml += '<div class="muted small" style="margin-top:6px">課目全体の正答率: ' + (sr === null ? '—' : pct(sr) + '%（合格ライン60%）') + '</div>';
      statsHtml += '</div>';
    });

    var examHistory = Store.examResults().slice(0, 3);
    var histHtml = '';
    if (examHistory.length) {
      histHtml = '<div class="section-title">最近の模試</div><div class="panel">';
      examHistory.forEach(function (r) {
        var rate = r.total ? r.correct / r.total : 0;
        histHtml += '<div class="statrow-head" style="display:flex;justify-content:space-between;font-size:13.5px;padding:4px 0">' +
          '<span>' + esc(r.date.slice(0, 10)) + ' 課目' + (r.subject === 3 ? 'Ⅲ' : 'Ⅳ') + '</span>' +
          '<span class="rate" style="color:var(--' + (rate >= 0.6 ? 'ok' : 'ng') + ')">' + r.correct + '/' + r.total + '（' + pct(rate) + '%）</span></div>';
      });
      histHtml += '</div>';
    }

    view.innerHTML =
      '<div class="panel countdown">' + countdownHtml + '</div>' +
      taskHtml +
      (reviewCount ? '<a class="btn" href="#review">復習リスト（' + reviewCount + '問）を解く</a>' : '') +
      statsHtml +
      histHtml +
      '<div class="section-title">その他</div>' +
      '<a class="menu-item" href="#notes"><span class="mi-main"><span class="mi-title">📓 ミスノート</span><span class="mi-sub">単位換算ミスなどの記録（' + Store.notes().length + '件）</span></span><span class="mi-arrow">›</span></a>' +
      '<a class="menu-item" href="#settings"><span class="mi-main"><span class="mi-title">⚙️ 設定</span><span class="mi-sub">試験日・バックアップなど</span></span><span class="mi-arrow">›</span></a>';
  }

  /* ---------------- ドリル ---------------- */

  function renderDrillMenu() {
    setHeader('分野別ドリル', null);
    var settings = Store.settings();
    var html = '<div class="panel"><div class="muted">分野を選んで連続演習。1問ごとに採点と解説が出ます。</div>' +
      '<div class="toggle-row" style="margin-top:10px">' +
      '<button type="button" class="tagchip' + (settings.drillOrder === 'seq' ? ' on' : '') + '" data-order="seq">順番に出題</button>' +
      '<button type="button" class="tagchip' + (settings.drillOrder === 'random' ? ' on' : '') + '" data-order="random">ランダム出題</button>' +
      '</div></div>';

    [3, 4].forEach(function (sub) {
      html += '<div class="section-title">課目' + (sub === 3 ? 'Ⅲ 電気設備及び機器' : 'Ⅳ 電力応用') + '</div>';
      CATEGORIES.forEach(function (c) {
        if (c.subject !== sub) return;
        var s = categoryStats(c.id);
        var rate = s.answers === 0 ? '' : '・正答率' + pct(s.correct / s.answers) + '%';
        html += '<button class="menu-item" type="button" data-cat="' + c.id + '">' +
          '<span class="mi-main"><span class="mi-title">' + esc(c.name) + '</span>' +
          '<span class="mi-sub">' + s.total + '問' + (s.attempted ? '（' + s.attempted + '問演習済み' + rate + '）' : '') + '</span></span>' +
          '<span class="mi-arrow">›</span></button>';
      });
    });
    view.innerHTML = html;

    view.querySelectorAll('[data-order]').forEach(function (b) {
      b.addEventListener('click', function () {
        var s = Store.settings();
        s.drillOrder = b.getAttribute('data-order');
        Store.saveSettings(s);
        renderDrillMenu();
      });
    });
    view.querySelectorAll('[data-cat]').forEach(function (b) {
      b.addEventListener('click', function () {
        location.hash = '#drill/' + b.getAttribute('data-cat');
      });
    });
  }

  /* 問題の状態: 'new'=未挑戦, 'ok'=クリア済み（直近正解で復習対象外）, 'ng'=要復習・不正解 */
  function questionState(qid) {
    var r = Store.stats()[qid];
    if (!r || r.a === 0) return 'new';
    return (r.streak > 0 && !r.rev) ? 'ok' : 'ng';
  }

  /* 分野内の問題一覧（任意の問題から開始／未習・間違いのみ） */
  function renderDrillList(catId) {
    var cat = catById(catId);
    var qs = questionsOf(catId);
    if (!cat || !qs.length) { location.hash = '#drill'; return; }
    setHeader(cat.name, '#drill');
    var st = Store.stats();
    var pending = 0, listHtml = '';
    qs.forEach(function (q, i) {
      var state = questionState(q.id);
      if (state !== 'ok') pending += 1;
      var mark = state === 'new' ? '<span class="q-st new">未</span>' :
                 state === 'ok' ? '<span class="q-st ok">○</span>' : '<span class="q-st ng">×</span>';
      listHtml +=
        '<button class="qrow" type="button" data-from="' + q.id + '">' +
        mark +
        '<span class="q-no">' + (i + 1) + '</span>' +
        '<span class="q-stem">' + esc(stripTags(q.stem)).slice(0, 26) + '…</span>' +
        '</button>';
    });

    view.innerHTML =
      '<div class="panel">' +
      '<button class="btn" id="dlPending" type="button"' + (pending ? '' : ' disabled') + '>未習・間違いのみ解く（' + pending + '問）</button>' +
      '<div class="btn-row" style="margin-top:10px">' +
      '<button class="btn secondary" id="dlAll" type="button">最初から順番に</button>' +
      '<button class="btn secondary" id="dlRandom" type="button">ランダム</button>' +
      '</div></div>' +
      '<div class="section-title">問題一覧（タップするとそこから順番に出題）</div>' +
      '<div class="panel" style="padding:6px 8px">' + listHtml + '</div>';

    document.getElementById('dlPending').addEventListener('click', function () {
      startDrill(catId, { pendingOnly: true });
    });
    document.getElementById('dlAll').addEventListener('click', function () {
      startDrill(catId, { order: 'seq' });
    });
    document.getElementById('dlRandom').addEventListener('click', function () {
      startDrill(catId, { order: 'random' });
    });
    view.querySelectorAll('.qrow').forEach(function (b) {
      b.addEventListener('click', function () {
        startDrill(catId, { fromId: b.getAttribute('data-from') });
      });
    });
  }

  /* opts: { order:'seq'|'random', fromId: 開始問題id, pendingOnly: 未習・間違いのみ } */
  function startDrill(catId, opts) {
    opts = opts || {};
    var qs = questionsOf(catId);
    if (!qs.length) return;
    var order = opts.order || Store.settings().drillOrder;
    var ids = qs.map(function (q) { return q.id; });
    if (opts.pendingOnly) {
      ids = ids.filter(function (id) { return questionState(id) !== 'ok'; });
      if (!ids.length) return;
    }
    if (opts.fromId) {
      var from = ids.indexOf(opts.fromId);
      if (from > 0) ids = ids.slice(from).concat(ids.slice(0, from)); // 選んだ問題から末尾まで→先頭に戻る
    } else if (order === 'random') {
      ids = shuffle(ids);
    }
    S = { kind: 'drill', title: catById(catId).name, back: '#drill/' + catId, ids: ids, idx: 0, correct: 0, answered: false };
    if (location.hash === '#quiz') route(); // 「もう一度」など既に#quizにいる場合はhashchangeが発火しない
    else location.hash = '#quiz';
  }

  /* ---------------- 復習 ---------------- */

  function renderReviewMenu() {
    setHeader('復習モード', null);
    var ids = Store.reviewIds().filter(function (id) { return questionById(id); });
    if (!ids.length) {
      view.innerHTML = '<div class="empty"><span class="big-emoji">🎉</span>復習リストは空です。<br>間違えた問題は自動でここに入ります。<br>連続2回正解すると卒業します。</div>';
      return;
    }
    var byCat = {};
    ids.forEach(function (id) {
      var q = questionById(id);
      byCat[q.category] = (byCat[q.category] || 0) + 1;
    });
    var listHtml = '';
    CATEGORIES.forEach(function (c) {
      if (byCat[c.id]) listHtml += '<div class="statrow-head" style="display:flex;justify-content:space-between;font-size:14px;padding:3px 0"><span>' + esc(c.name) + '</span><span>' + byCat[c.id] + '問</span></div>';
    });
    view.innerHTML =
      '<div class="panel"><div class="muted">間違えた問題だけを再演習します。連続2回正解でリストから卒業。</div></div>' +
      '<div class="panel"><h2>復習待ち ' + ids.length + '問</h2>' + listHtml + '</div>' +
      '<button class="btn" id="startReview" type="button">復習をはじめる</button>';
    document.getElementById('startReview').addEventListener('click', function () {
      S = { kind: 'review', title: '復習モード', back: '#review', ids: shuffle(ids), idx: 0, correct: 0, answered: false };
      location.hash = '#quiz';
    });
  }

  /* ---------------- 模試 ---------------- */

  function renderExamMenu() {
    setHeader('模試モード', null);
    var settings = Store.settings();
    var html =
      '<div class="panel"><div class="muted">課目からランダムに' + settings.examCount + '問を出題し、' + settings.examMinutes +
      '分の制限時間で通し演習します（採点は最後にまとめて）。出題数・時間は設定で変更できます。</div></div>' +
      '<button class="btn" type="button" data-sub="3">課目Ⅲ 模試をはじめる</button>' +
      '<button class="btn" type="button" data-sub="4" style="margin-top:10px">課目Ⅳ 模試をはじめる</button>';

    var history = Store.examResults();
    if (history.length) {
      html += '<div class="section-title">模試の履歴</div><div class="panel result-list">';
      history.slice(0, 10).forEach(function (r) {
        var rate = r.total ? r.correct / r.total : 0;
        var min = Math.floor(r.seconds / 60), sec = r.seconds % 60;
        html += '<div class="r-item"><span class="r-mark ' + (rate >= 0.6 ? 'ok' : 'ng') + '">' + (rate >= 0.6 ? '合' : '否') + '</span>' +
          '<span style="flex:1">' + esc(r.date.slice(0, 10)) + ' 課目' + (r.subject === 3 ? 'Ⅲ' : 'Ⅳ') + '</span>' +
          '<span>' + r.correct + '/' + r.total + '（' + pct(rate) + '%）・' + min + '分' + (sec ? sec + '秒' : '') + '</span></div>';
      });
      html += '</div>';
    }
    view.innerHTML = html;

    view.querySelectorAll('[data-sub]').forEach(function (b) {
      b.addEventListener('click', function () {
        startExam(+b.getAttribute('data-sub'));
      });
    });
  }

  function startExam(subject) {
    var settings = Store.settings();
    var pool = (window.QUESTIONS || []).filter(function (q) { return q.subject === subject; });
    if (!pool.length) return;
    var ids = shuffle(pool.map(function (q) { return q.id; })).slice(0, settings.examCount);
    S = {
      kind: 'exam', subject: subject,
      title: '課目' + (subject === 3 ? 'Ⅲ' : 'Ⅳ') + ' 模試',
      back: '#exam',
      ids: ids, idx: 0,
      answers: {},                       // {qid: choiceIndex}
      startedAt: Date.now(),
      deadline: Date.now() + settings.examMinutes * 60 * 1000,
      phase: 'run'
    };
    location.hash = '#quiz';
  }

  /* ---------------- クイズ描画（共通入口） ---------------- */

  function renderQuiz() {
    if (!S) { location.hash = '#home'; return; }
    if (S.kind === 'exam') {
      if (S.phase === 'result') renderExamResult();
      else renderExamQuestion();
    } else {
      if (S.idx >= S.ids.length) renderDrillSummary();
      else renderDrillQuestion();
    }
  }

  /* ---- ドリル / 復習（即時採点） ---- */

  function renderDrillQuestion() {
    var q = questionById(S.ids[S.idx]);
    if (!q) { S.idx += 1; renderQuiz(); return; }
    setHeader(S.title, S.back);
    var choicesHtml = q.choices.map(function (c, i) {
      return '<button class="choice" type="button" data-i="' + i + '"><span class="ch-key">' + CHOICE_KEYS[i] + '</span><span>' + c + '</span></button>';
    }).join('');
    var reviewBadge = '';
    if (S.kind === 'review') {
      var st = Store.stats()[q.id];
      var need = st ? Math.max(0, 2 - st.streak) : 2;
      reviewBadge = '<span>あと連続' + need + '回正解で卒業</span>';
    }
    view.innerHTML =
      '<div class="quiz-top"><span>' + esc(catById(q.category).name) + '</span>' + reviewBadge +
      '<span>' + (S.idx + 1) + ' / ' + S.ids.length + '</span></div>' +
      '<div class="stem">' + q.stem + '</div>' +
      '<div class="choices" id="choices">' + choicesHtml + '</div>' +
      '<div id="feedback"></div>';

    view.querySelectorAll('.choice').forEach(function (b) {
      b.addEventListener('click', function () { answerDrill(q, +b.getAttribute('data-i')); });
    });
  }

  function answerDrill(q, picked) {
    if (S.answered) return;
    S.answered = true;
    var ok = picked === q.answer;
    if (ok) S.correct += 1;
    Store.recordAnswer(q.id, ok);

    view.querySelectorAll('.choice').forEach(function (b, i) {
      b.disabled = true;
      if (i === q.answer) b.classList.add('correct');
      else if (i === picked) b.classList.add('wrong');
    });

    var fb = document.getElementById('feedback');
    fb.innerHTML =
      '<div class="verdict ' + (ok ? 'ok' : 'ng') + '">' + (ok ? '○ 正解！' : '× 不正解… 正解は（' + CHOICE_KEYS[q.answer] + '）') + '</div>' +
      '<div class="explain"><h3>解説</h3>' + q.explanation + '</div>' +
      noteQuickHtml() +
      '<button class="btn" id="nextBtn" type="button">' + (S.idx + 1 >= S.ids.length ? '結果を見る' : '次の問題へ') + '</button>';

    bindNoteQuick(q);
    document.getElementById('nextBtn').addEventListener('click', function () {
      S.idx += 1;
      S.answered = false;
      renderQuiz();
      window.scrollTo(0, 0);
    });
    document.getElementById('nextBtn').scrollIntoView({ block: 'nearest' });
  }

  function renderDrillSummary() {
    setHeader(S.title, S.back);
    var total = S.ids.length;
    var rate = total ? S.correct / total : 0;
    var isReview = S.kind === 'review';
    view.innerHTML =
      '<div class="panel result-score">' +
      '<div class="muted">' + esc(S.title) + '</div>' +
      '<div class="big ' + (rate >= 0.6 ? 'ok' : 'ng') + '">' + S.correct + ' / ' + total + '</div>' +
      '<div class="muted">正答率 ' + pct(rate) + '%（合格ライン60%）</div>' +
      '</div>' +
      (isReview
        ? '<a class="btn" href="#review">復習リストに戻る</a>'
        : '<button class="btn" id="againBtn" type="button">もう一度この分野を解く</button><a class="btn secondary" href="#drill">分野一覧へ</a>');
    var again = document.getElementById('againBtn');
    if (again) again.addEventListener('click', function () {
      var first = questionById(S.ids[0]);
      startDrill(first.category);
    });
  }

  /* ---- 模試（まとめて採点） ---- */

  function renderExamQuestion() {
    var q = questionById(S.ids[S.idx]);
    setHeader(S.title, S.back);
    var picked = S.answers[q.id];
    var choicesHtml = q.choices.map(function (c, i) {
      return '<button class="choice' + (picked === i ? ' sel' : '') + '" type="button" data-i="' + i + '"><span class="ch-key">' + CHOICE_KEYS[i] + '</span><span>' + c + '</span></button>';
    }).join('');
    var answeredCount = Object.keys(S.answers).length;
    view.innerHTML =
      '<div class="quiz-top"><span>' + esc(catById(q.category).name) + '</span>' +
      '<span class="timer" id="timer">--:--</span>' +
      '<span>' + (S.idx + 1) + ' / ' + S.ids.length + '</span></div>' +
      '<div class="stem">' + q.stem + '</div>' +
      '<div class="choices">' + choicesHtml + '</div>' +
      '<div class="btn-row" style="margin-top:14px">' +
      '<button class="btn ghost" id="prevQ" type="button"' + (S.idx === 0 ? ' disabled' : '') + '>← 前へ</button>' +
      '<button class="btn ghost" id="nextQ" type="button"' + (S.idx + 1 >= S.ids.length ? ' disabled' : '') + '>次へ →</button>' +
      '</div>' +
      '<button class="btn' + (answeredCount === S.ids.length ? '' : ' secondary') + '" id="gradeBtn" type="button" style="margin-top:10px">採点する（' + answeredCount + '/' + S.ids.length + '問解答済み）</button>';

    view.querySelectorAll('.choice').forEach(function (b) {
      b.addEventListener('click', function () {
        S.answers[q.id] = +b.getAttribute('data-i');
        if (S.idx + 1 < S.ids.length) { S.idx += 1; renderExamQuestion(); window.scrollTo(0, 0); }
        else renderExamQuestion();
      });
    });
    document.getElementById('prevQ').addEventListener('click', function () { S.idx -= 1; renderExamQuestion(); window.scrollTo(0, 0); });
    document.getElementById('nextQ').addEventListener('click', function () { S.idx += 1; renderExamQuestion(); window.scrollTo(0, 0); });
    document.getElementById('gradeBtn').addEventListener('click', function () {
      var left = S.ids.length - Object.keys(S.answers).length;
      if (left > 0 && !confirm('未解答が' + left + '問あります。採点しますか？')) return;
      gradeExam();
    });
    startExamTimer();
  }

  function startExamTimer() {
    stopTimer();
    function tick() {
      var el = document.getElementById('timer');
      if (!el || !S || S.kind !== 'exam' || S.phase !== 'run') { stopTimer(); return; }
      var left = Math.max(0, Math.round((S.deadline - Date.now()) / 1000));
      var m = Math.floor(left / 60), sec = left % 60;
      el.textContent = (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
      el.classList.toggle('urgent', left <= 180);
      if (left <= 0) { stopTimer(); alert('時間切れです。採点します。'); gradeExam(); }
    }
    tick();
    timerId = setInterval(tick, 1000);
  }

  function gradeExam() {
    stopTimer();
    var correct = 0;
    S.ids.forEach(function (id) {
      var q = questionById(id);
      var ok = S.answers[id] === q.answer;
      if (ok) correct += 1;
      Store.recordAnswer(id, ok);
    });
    S.result = { correct: correct, seconds: Math.min(Math.round((Date.now() - S.startedAt) / 1000), Store.settings().examMinutes * 60) };
    Store.addExamResult({ subject: S.subject, total: S.ids.length, correct: correct, seconds: S.result.seconds });
    S.phase = 'result';
    renderExamResult();
    window.scrollTo(0, 0);
  }

  function renderExamResult() {
    setHeader('模試結果', '#exam');
    var total = S.ids.length;
    var rate = total ? S.result.correct / total : 0;
    var min = Math.floor(S.result.seconds / 60), sec = S.result.seconds % 60;
    var listHtml = '';
    S.ids.forEach(function (id, i) {
      var q = questionById(id);
      var picked = S.answers[id];
      var ok = picked === q.answer;
      listHtml +=
        '<details class="r-item" style="display:block">' +
        '<summary style="display:flex;gap:10px;align-items:center;cursor:pointer;list-style:none">' +
        '<span class="r-mark ' + (ok ? 'ok' : 'ng') + '">' + (ok ? '○' : '×') + '</span>' +
        '<span style="flex:1">問' + (i + 1) + '　' + esc(stripTags(q.stem)).slice(0, 34) + '…</span></summary>' +
        '<div style="padding:8px 0 4px 26px">' +
        '<div class="small">あなたの解答: ' + (picked === undefined ? '未解答' : '（' + CHOICE_KEYS[picked] + '）' + q.choices[picked]) +
        '　／　正解: （' + CHOICE_KEYS[q.answer] + '）' + q.choices[q.answer] + '</div>' +
        '<div class="explain" style="margin-top:8px"><h3>解説</h3>' + q.explanation + '</div></div>' +
        '</details>';
    });
    view.innerHTML =
      '<div class="panel result-score">' +
      '<div class="muted">' + esc(S.title) + '</div>' +
      '<div class="big ' + (rate >= 0.6 ? 'ok' : 'ng') + '">' + pct(rate) + '%</div>' +
      '<div class="muted">' + S.result.correct + '/' + total + '問正解・所要 ' + min + '分' + (sec ? sec + '秒' : '') + '・' + (rate >= 0.6 ? '合格ライン突破！' : '合格ラインまであと' + (Math.ceil(total * 0.6) - S.result.correct) + '問') + '</div>' +
      '</div>' +
      '<div class="muted small" style="margin:0 2px 8px">間違えた問題は復習リストに追加されました。タップで解説を確認できます。</div>' +
      '<div class="panel result-list">' + listHtml + '</div>' +
      '<a class="btn" href="#review">復習モードへ</a>' +
      '<a class="btn secondary" href="#exam">模試メニューに戻る</a>';
  }

  /* ---------------- ミスノート ---------------- */

  function noteQuickHtml() {
    return '<div class="note-quick"><div class="nq-title">ミスの記録（あとで見返す用・任意）</div>' +
      '<div class="tagchips">' + NOTE_TAGS.map(function (t) {
        return '<button type="button" class="tagchip" data-tag="' + t + '">' + t + '</button>';
      }).join('') + '</div>' +
      '<input type="text" id="noteText" placeholder="メモ（例: kW→kJ/sの換算を忘れた）">' +
      '<button class="btn secondary save-note" id="saveNote" type="button">ノートに保存</button>' +
      '<div id="noteSaved"></div></div>';
  }

  function bindNoteQuick(q) {
    var tags = [];
    view.querySelectorAll('.note-quick .tagchip').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = b.getAttribute('data-tag');
        var i = tags.indexOf(t);
        if (i >= 0) { tags.splice(i, 1); b.classList.remove('on'); }
        else { tags.push(t); b.classList.add('on'); }
      });
    });
    document.getElementById('saveNote').addEventListener('click', function () {
      var text = document.getElementById('noteText').value.trim();
      if (!tags.length && !text) return;
      Store.addNote({ qid: q.id, category: q.category, tags: tags.slice(), text: text });
      document.getElementById('noteSaved').innerHTML = '<div class="note-saved">✓ 保存しました</div>';
    });
  }

  function renderNotes() {
    setHeader('ミスノート', '#home');
    var notes = Store.notes();
    var listHtml = '';
    if (!notes.length) {
      listHtml = '<div class="empty"><span class="big-emoji">📓</span>まだ記録がありません。<br>問題を解いた直後にタグとメモで記録できます。</div>';
    } else {
      notes.forEach(function (n) {
        var cat = n.category ? catById(n.category) : null;
        listHtml +=
          '<div class="note-item">' +
          '<div class="n-head"><span>' + esc(n.date.slice(0, 10)) + (cat ? '・' + esc(cat.name) : '') + '</span>' +
          '<button class="n-del" type="button" data-id="' + n.id + '">削除</button></div>' +
          (n.text ? '<div>' + esc(n.text) + '</div>' : '') +
          (n.tags && n.tags.length ? '<div class="n-tags">' + n.tags.map(function (t) { return '<span class="n-tag">' + esc(t) + '</span>'; }).join('') + '</div>' : '') +
          '</div>';
      });
    }
    view.innerHTML =
      '<div class="note-quick" style="background:var(--card)"><div class="nq-title">新しく記録する</div>' +
      '<div class="tagchips">' + NOTE_TAGS.map(function (t) {
        return '<button type="button" class="tagchip" data-tag="' + t + '">' + t + '</button>';
      }).join('') + '</div>' +
      '<input type="text" id="noteText" placeholder="メモ（例: 換算 1kWh = 3600kJ）">' +
      '<button class="btn secondary save-note" id="saveNote" type="button">ノートに保存</button>' +
      '<div id="noteSaved"></div></div>' +
      '<div class="section-title">記録一覧（' + notes.length + '件）</div>' + listHtml;

    var tags = [];
    view.querySelectorAll('.tagchip').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = b.getAttribute('data-tag');
        var i = tags.indexOf(t);
        if (i >= 0) { tags.splice(i, 1); b.classList.remove('on'); }
        else { tags.push(t); b.classList.add('on'); }
      });
    });
    document.getElementById('saveNote').addEventListener('click', function () {
      var text = document.getElementById('noteText').value.trim();
      if (!tags.length && !text) return;
      Store.addNote({ tags: tags.slice(), text: text });
      renderNotes();
    });
    view.querySelectorAll('.n-del').forEach(function (b) {
      b.addEventListener('click', function () {
        Store.deleteNote(b.getAttribute('data-id'));
        renderNotes();
      });
    });
  }

  /* ---------------- 公式カード ---------------- */

  var cardState = { filter: 'all', order: [], idx: 0, flipped: false };

  function renderCards() {
    setHeader('公式カード', null);
    var cards = window.CARDS || [];
    var filtered = cardState.filter === 'all' ? cards : cards.filter(function (c) { return c.category === cardState.filter; });

    // フィルタ変更・初期化時に順序を作り直す
    if (!cardState.order.length || cardState.order.length !== filtered.length) {
      cardState.order = filtered.map(function (_, i) { return i; });
      cardState.idx = 0;
      cardState.flipped = false;
    }

    var cats = {};
    cards.forEach(function (c) { cats[c.category] = true; });
    var options = '<option value="all">すべての分野（' + cards.length + '枚）</option>';
    CATEGORIES.forEach(function (c) {
      if (cats[c.id]) {
        var n = cards.filter(function (x) { return x.category === c.id; }).length;
        options += '<option value="' + c.id + '"' + (cardState.filter === c.id ? ' selected' : '') + '>' + esc(c.name) + '（' + n + '枚）</option>';
      }
    });

    var cardHtml;
    if (!filtered.length) {
      cardHtml = '<div class="empty">カードがありません</div>';
    } else {
      var card = filtered[cardState.order[cardState.idx]];
      var catName = catById(card.category) ? catById(card.category).name : '';
      if (!cardState.flipped) {
        cardHtml = '<div class="flashcard" id="fc"><div class="fc-cat">' + esc(catName) + '　' + (cardState.idx + 1) + '/' + filtered.length + '</div>' +
          '<div class="fc-front">' + card.front + '</div>' +
          '<div class="fc-hint">タップで公式を表示</div></div>';
      } else {
        cardHtml = '<div class="flashcard" id="fc"><div class="fc-cat">' + esc(catName) + '　' + (cardState.idx + 1) + '/' + filtered.length + '</div>' +
          '<div class="fc-formula">' + card.formula + '</div>' +
          '<div class="fc-body">' + card.body + '</div>' +
          (card.note ? '<div class="fc-note">⚠ ' + card.note + '</div>' : '') +
          '</div>';
      }
    }

    view.innerHTML =
      '<div class="cardfilter"><select id="catFilter">' + options + '</select></div>' +
      cardHtml +
      '<div class="btn-row">' +
      '<button class="btn ghost" id="fcPrev" type="button">← 前</button>' +
      '<button class="btn ghost" id="fcShuffle" type="button">シャッフル</button>' +
      '<button class="btn ghost" id="fcNext" type="button">次 →</button>' +
      '</div>';

    document.getElementById('catFilter').addEventListener('change', function (e) {
      cardState.filter = e.target.value;
      cardState.order = [];
      renderCards();
    });
    var fc = document.getElementById('fc');
    if (fc) fc.addEventListener('click', function () {
      cardState.flipped = !cardState.flipped;
      renderCards();
    });
    document.getElementById('fcPrev').addEventListener('click', function () {
      cardState.idx = (cardState.idx - 1 + filtered.length) % filtered.length;
      cardState.flipped = false;
      renderCards();
    });
    document.getElementById('fcNext').addEventListener('click', function () {
      cardState.idx = (cardState.idx + 1) % filtered.length;
      cardState.flipped = false;
      renderCards();
    });
    document.getElementById('fcShuffle').addEventListener('click', function () {
      cardState.order = shuffle(cardState.order);
      cardState.idx = 0;
      cardState.flipped = false;
      renderCards();
    });
  }

  /* ---------------- 設定 ---------------- */

  function renderSettings() {
    setHeader('設定', '#home');
    var s = Store.settings();
    var total = (window.QUESTIONS || []).length;
    view.innerHTML =
      '<div class="panel">' +
      '<div class="setting-row"><label>試験日</label><input type="date" id="setExam" value="' + esc(s.examDate) + '"></div>' +
      '<div class="setting-row"><label>学習開始日（30日計画のDay 1）</label><input type="date" id="setStart" value="' + esc(s.startDate) + '"></div>' +
      '<div class="setting-row"><label>模試の出題数</label><input type="number" id="setCount" min="5" max="40" value="' + s.examCount + '"></div>' +
      '<div class="setting-row"><label>模試の制限時間（分）</label><input type="number" id="setMinutes" min="5" max="120" value="' + s.examMinutes + '"></div>' +
      '<button class="btn" id="saveSettings" type="button">設定を保存</button>' +
      '<div id="settingsSaved"></div>' +
      '</div>' +

      '<div class="section-title">バックアップ</div>' +
      '<div class="panel">' +
      '<div class="setting-row"><label>エクスポート（コピーして控えておく）</label>' +
      '<textarea class="io" id="exportArea" readonly></textarea>' +
      '<button class="btn secondary" id="doExport" type="button" style="margin-top:8px">学習データを書き出す</button></div>' +
      '<div class="setting-row"><label>インポート（貼り付けて復元）</label>' +
      '<textarea class="io" id="importArea" placeholder="エクスポートしたJSONを貼り付け"></textarea>' +
      '<button class="btn secondary" id="doImport" type="button" style="margin-top:8px">読み込む</button></div>' +
      '</div>' +

      '<div class="section-title">データ</div>' +
      '<div class="panel">' +
      '<div class="muted small">収録問題数: ' + total + '問 ／ 公式カード: ' + (window.CARDS || []).length + '枚<br>' +
      'このアプリの成績・ノートはこの端末のブラウザ内にのみ保存されます。</div>' +
      '<button class="btn danger" id="doReset" type="button" style="margin-top:10px">学習データをすべてリセット</button>' +
      '</div>';

    document.getElementById('saveSettings').addEventListener('click', function () {
      var ns = Store.settings();
      ns.examDate = document.getElementById('setExam').value || ns.examDate;
      ns.startDate = document.getElementById('setStart').value || ns.startDate;
      ns.examCount = Math.max(5, Math.min(40, +document.getElementById('setCount').value || 15));
      ns.examMinutes = Math.max(5, Math.min(120, +document.getElementById('setMinutes').value || 30));
      Store.saveSettings(ns);
      document.getElementById('settingsSaved').innerHTML = '<div class="note-saved">✓ 保存しました</div>';
    });
    document.getElementById('doExport').addEventListener('click', function () {
      var area = document.getElementById('exportArea');
      area.value = Store.exportJSON();
      area.select();
      try { document.execCommand('copy'); } catch (e) { /* 手動コピーで可 */ }
    });
    document.getElementById('doImport').addEventListener('click', function () {
      var text = document.getElementById('importArea').value.trim();
      if (!text) return;
      try {
        Store.importJSON(text);
        alert('読み込みました');
        location.hash = '#home';
      } catch (e) {
        alert('読み込めませんでした。エクスポートしたJSONをそのまま貼り付けてください。');
      }
    });
    document.getElementById('doReset').addEventListener('click', function () {
      if (!confirm('成績・復習リスト・ミスノート・設定をすべて削除します。よろしいですか？')) return;
      Store.resetAll();
      alert('リセットしました');
      location.hash = '#home';
    });
  }

  /* ---------------- 起動 ---------------- */

  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* オフライン化は必須ではない */ });
    });
  }
})();
