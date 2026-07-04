/* ============ エネ管ドリル — localStorage ラッパー ============ */
(function () {
  'use strict';

  var PREFIX = 'enekan.';

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
      /* 容量超過などは黙って無視（学習は続行できる） */
    }
  }

  var DEFAULT_SETTINGS = {
    examDate: '2026-08-02',
    startDate: '2026-07-04',
    drillOrder: 'seq',   // 'seq' | 'random'
    examCount: 15,       // 模試の出題数
    examMinutes: 30      // 模試の制限時間（分）
  };

  var Store = {
    /* ---- 設定 ---- */
    settings: function () {
      var s = load('settings', {});
      var out = {};
      for (var k in DEFAULT_SETTINGS) {
        out[k] = (s && s[k] !== undefined) ? s[k] : DEFAULT_SETTINGS[k];
      }
      return out;
    },
    saveSettings: function (s) { save('settings', s); },

    /* ---- 問題ごとの成績 ----
       stats = { [qid]: { a:出題数, c:正解数, streak:連続正解, rev:要復習 } } */
    stats: function () { return load('stats', {}); },
    saveStats: function (st) { save('stats', st); },

    recordAnswer: function (qid, ok) {
      var st = Store.stats();
      var r = st[qid] || { a: 0, c: 0, streak: 0, rev: false };
      r.a += 1;
      if (ok) {
        r.c += 1;
        r.streak += 1;
        if (r.rev && r.streak >= 2) r.rev = false; // 連続2回正解で復習リスト卒業
      } else {
        r.streak = 0;
        r.rev = true;
      }
      st[qid] = r;
      Store.saveStats(st);
      return r;
    },

    reviewIds: function () {
      var st = Store.stats();
      var ids = [];
      for (var id in st) { if (st[id].rev) ids.push(id); }
      return ids;
    },

    /* ---- ミスノート ----
       notes = [{ id, date(ISO), qid, tags:[], text }] */
    notes: function () { return load('notes', []); },
    addNote: function (note) {
      var notes = Store.notes();
      note.id = 'n' + Date.now() + Math.floor(Math.random() * 1000);
      note.date = new Date().toISOString();
      notes.unshift(note);
      save('notes', notes);
      return note;
    },
    deleteNote: function (id) {
      var notes = Store.notes().filter(function (n) { return n.id !== id; });
      save('notes', notes);
    },

    /* ---- 模試履歴 ----
       examResults = [{ date, subject, total, correct, seconds }] */
    examResults: function () { return load('examResults', []); },
    addExamResult: function (r) {
      var list = Store.examResults();
      r.date = new Date().toISOString();
      list.unshift(r);
      save('examResults', list.slice(0, 50));
    },

    /* ---- バックアップ ---- */
    exportJSON: function () {
      return JSON.stringify({
        v: 1,
        settings: load('settings', {}),
        stats: load('stats', {}),
        notes: load('notes', []),
        examResults: load('examResults', [])
      });
    },
    importJSON: function (text) {
      var data = JSON.parse(text); // 失敗時は例外を呼び出し側で処理
      if (!data || data.v !== 1) throw new Error('形式が違います');
      save('settings', data.settings || {});
      save('stats', data.stats || {});
      save('notes', data.notes || []);
      save('examResults', data.examResults || []);
    },
    resetAll: function () {
      ['settings', 'stats', 'notes', 'examResults'].forEach(function (k) {
        localStorage.removeItem(PREFIX + k);
      });
    }
  };

  window.Store = Store;
})();
