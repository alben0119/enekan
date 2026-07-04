/* 課目Ⅳ 空気調和 — オリジナル問題（過去問形式の穴埋め・択一） */
(function () {
  var Q = [
    {
      id: 'ac-01', subject: 4, category: 'aircon', difficulty: 1,
      stem: '冷凍能力（冷房能力）10kW、圧縮機入力2.5kWの冷凍機の成績係数（COP）は<u>（A）</u>である。',
      choices: ['0.25', '2.5', '3.0', '4.0', '5.0'],
      answer: 3,
      explanation: '<div class="formula">COP = 冷凍能力 / 入力 = 10 / 2.5 = <b>4.0</b></div>「得られた熱÷投入した仕事」。分子と分母を逆にしない。COPが大きいほど省エネ。'
    },
    {
      id: 'ac-02', subject: 4, category: 'aircon', difficulty: 2,
      stem: 'あるヒートポンプの冷房COPが3.0のとき、同じ運転状態での暖房COPは理論上<u>（A）</u>となる。',
      choices: ['2.0', '3.0', '4.0', '6.0', '9.0'],
      answer: 2,
      explanation: '暖房時は「冷やして汲み上げた熱＋圧縮機の仕事」を放熱に使えるので<div class="formula">COP<sub>暖</sub> = COP<sub>冷</sub> + 1 = 3.0 + 1 = <b>4.0</b></div>凝縮器放熱量 = 冷凍能力 + 入力、の関係と同じこと。'
    },
    {
      id: 'ac-03', subject: 4, category: 'aircon', difficulty: 2,
      stem: '蒸発温度0℃、凝縮温度40℃で動作する逆カルノーサイクル冷凍機の成績係数（COP）はおよそ<u>（A）</u>である。',
      choices: ['4.5', '5.5', '6.8', '7.8', '9.1'],
      answer: 2,
      explanation: '絶対温度に直す：T₂ = 273K、T₁ = 313K<div class="formula">COP = T₂ / (T₁ − T₂) = 273 / 40 ≒ <b>6.8</b></div>℃のまま計算しない（0/40=0になってしまう）。7.8は暖房COP（T₁/(T₁−T₂)）。',
      tags: ['単位換算注意']
    },
    {
      id: 'ac-04', subject: 4, category: 'aircon', difficulty: 2,
      stem: '蒸発温度0℃、凝縮温度40℃で動作する理想ヒートポンプ（逆カルノーサイクル）の暖房COPはおよそ<u>（A）</u>である。',
      choices: ['6.4', '6.8', '7.3', '7.8', '8.8'],
      answer: 3,
      explanation: '<div class="formula">COP<sub>暖</sub> = T₁ / (T₁ − T₂) = 313 / 40 ≒ <b>7.8</b></div>冷房COP（273/40≒6.8）＋1になっていることも確認できる。温度差（T₁−T₂）が小さいほどCOPが上がる — 省エネの基本原理。'
    },
    {
      id: 'ac-05', subject: 4, category: 'aircon', difficulty: 2,
      stem: '冷媒の冷凍効果（蒸発器出入口の比エンタルピー差)が150kJ/kg、冷媒循環量が0.1kg/sの冷凍機の冷凍能力は<u>（A）</u>kWである。',
      choices: ['10', '15', '20', '25', '150'],
      answer: 1,
      explanation: '<div class="formula">Q = 冷凍効果 × 冷媒循環量 = 150kJ/kg × 0.1kg/s = <b>15 kW</b></div>kJ/s = kW。p-h線図（モリエル線図）上では蒸発器の水平距離×流量が冷凍能力。'
    },
    {
      id: 'ac-06', subject: 4, category: 'aircon', difficulty: 2,
      stem: '冷凍能力15kW、COP3.0の冷凍機の凝縮器から放出される熱量は<u>（A）</u>kWである。',
      choices: ['10', '15', '18', '20', '45'],
      answer: 3,
      explanation: '圧縮機入力 = 15 / 3.0 = 5kW<div class="formula">凝縮器放熱量 = 冷凍能力 + 入力 = 15 + 5 = <b>20 kW</b></div>エネルギー保存則。冷却塔の容量計算などに使う関係。'
    },
    {
      id: 'ac-07', subject: 4, category: 'aircon', difficulty: 2,
      stem: '質量流量1.2kg/sの空気を10K加熱するのに必要な熱量（顕熱）はおよそ<u>（A）</u>kWである。空気の定圧比熱は1.006kJ/(kg·K)とする。',
      choices: ['1.2', '6.0', '10.1', '12.1', '24.1'],
      answer: 3,
      explanation: '<div class="formula">Q = c<sub>p</sub> G Δt = 1.006 × 1.2 × 10</div>≒ <b>12.1 kW</b><br>顕熱は「比熱×流量×温度差」。単位が全てSI（kJ/(kg·K)、kg/s、K）ならそのままkWになる。'
    },
    {
      id: 'ac-08', subject: 4, category: 'aircon', difficulty: 2,
      stem: '空気に水蒸気を2g/s加湿するときに必要な熱量（潜熱）はおよそ<u>（A）</u>kWである。水の蒸発潜熱は2,500kJ/kgとする。',
      choices: ['2.5', '5.0', '7.5', '10.0', '12.5'],
      answer: 1,
      explanation: '<div class="formula">Q = r × L = 2,500kJ/kg × 0.002kg/s = <b>5.0 kW</b></div>g/s → kg/s の換算に注意。温度を変えるのが顕熱、水分（状態）を変えるのが潜熱。',
      tags: ['単位換算注意']
    },
    {
      id: 'ac-09', subject: 4, category: 'aircon', difficulty: 3,
      stem: '外気導入量2,000m³/hの空調システムで、外気と室内の温度差が8Kのとき、外気負荷（顕熱分）はおよそ<u>（A）</u>kWである。空気の密度1.2kg/m³、定圧比熱1.0kJ/(kg·K)とする。',
      choices: ['2.7', '4.4', '5.3', '6.7', '19.2'],
      answer: 2,
      explanation: '質量流量 G = 2,000 × 1.2 = 2,400kg/h = 2,400/3,600 ≒ 0.667kg/s<div class="formula">Q = 1.0 × 0.667 × 8 ≒ <b>5.3 kW</b></div>時間単位（h→s）の換算が急所。19.2は「kJ/hのまま」の値（19,200kJ/h ÷ 3,600 = 5.3kW）。',
      tags: ['単位換算注意']
    },
    {
      id: 'ac-10', subject: 4, category: 'aircon', difficulty: 2,
      stem: '熱通過率1.5W/(m²·K)、面積100m²の壁体の内外温度差が15Kのとき、貫流熱量は<u>（A）</u>kWである。',
      choices: ['1.5', '2.25', '3.0', '15', '22.5'],
      answer: 1,
      explanation: '<div class="formula">Q = U A Δt = 1.5 × 100 × 15 = 2,250W = <b>2.25 kW</b></div>断熱強化（U値低減）や窓の複層化は、この貫流熱負荷を減らす省エネ策。WとkWの換算に注意。'
    },
    {
      id: 'ac-11', subject: 4, category: 'aircon', difficulty: 2,
      stem: '35℃の外気30%と26℃の還気（室内空気）70%を混合したときの混合空気温度はおよそ<u>（A）</u>℃である。',
      choices: ['28.0', '28.7', '29.3', '30.5', '31.7'],
      answer: 1,
      explanation: '質量比による加重平均<div class="formula">t = 0.3 × 35 + 0.7 × 26 = 10.5 + 18.2 = <b>28.7℃</b></div>湿り空気線図上では2点を結ぶ直線を流量の逆比で内分した点になる（エンタルピー・絶対湿度も同様）。'
    },
    {
      id: 'ac-12', subject: 4, category: 'aircon', difficulty: 1,
      stem: '湿り空気を絶対湿度一定のまま冷却していくと、相対湿度は<u>（A）</u>。',
      choices: ['低下し続ける', '変化しない', '一度下がってから上がる', '上昇し、露点温度で100%（結露開始）となる', '露点温度で0%になる'],
      answer: 3,
      explanation: '温度が下がると飽和水蒸気量が減るため<b>相対湿度は上昇</b>し、露点温度で飽和（100%）に達して結露が始まる。冷却コイルによる除湿はこの原理（露点以下まで冷やして水分を落とす）。'
    },
    {
      id: 'ac-13', subject: 4, category: 'aircon', difficulty: 3,
      stem: '風量5,000m³/h（空気密度1.2kg/m³）の空気を、比エンタルピー58kJ/kgから40kJ/kgまで冷却減湿する冷却コイルの必要能力はおよそ<u>（A）</u>kWである。',
      choices: ['25', '30', '36', '43', '108'],
      answer: 1,
      explanation: 'G = 5,000 × 1.2 = 6,000kg/h ≒ 1.67kg/s<div class="formula">Q = G Δh = 1.67 × (58 − 40) = <b>約30 kW</b></div>温度と湿度の両方が変わる過程は、顕熱・潜熱を含む<b>エンタルピー差</b>で計算するのが定石。',
      tags: ['単位換算注意']
    },
    {
      id: 'ac-14', subject: 4, category: 'aircon', difficulty: 2,
      stem: '冷凍機のCOPを向上させる運転条件として正しいものは<u>（A）</u>である。',
      choices: [
        '凝縮温度を高く、蒸発温度を低くする',
        '凝縮温度を低く、蒸発温度を高くする',
        '凝縮温度・蒸発温度とも高くする',
        '凝縮温度・蒸発温度とも低くする',
        '温度条件はCOPに影響しない'
      ],
      answer: 1,
      explanation: '逆カルノーCOP = T₂/(T₁−T₂)より、<b>温度差を縮める</b>とCOPが上がる。実務では「冷却水温度を下げる（冷却塔の性能改善）」「冷水出口温度を上げる」「熱交換器を清掃して伝熱を良くする」などが該当。'
    },
    {
      id: 'ac-15', subject: 4, category: 'aircon', difficulty: 2,
      stem: 'インバータターボ冷凍機などの高効率熱源機の特長として、<u>（A）</u>ことが挙げられる。',
      choices: [
        '定格運転時のみ効率が高い',
        '冷却水温度が高いほどCOPが上がる',
        '部分負荷・低冷却水温度時に高いCOPが得られる',
        '負荷率にかかわらずCOPが一定である',
        '起動時間が長い'
      ],
      answer: 2,
      explanation: '空調負荷は年間の大半が部分負荷。インバータ機は回転数を落として<b>部分負荷で定格以上のCOP</b>を発揮し、冬期・中間期の低い冷却水温度も活かせる。年間性能はIPLV（期間成績係数）で評価する。'
    },
    {
      id: 'ac-16', subject: 4, category: 'aircon', difficulty: 1,
      stem: '全熱交換器は、排気と導入外気との間で<u>（A）</u>を交換して外気負荷を軽減する装置である。',
      choices: ['顕熱と潜熱の両方', '顕熱のみ', '潜熱のみ', 'CO₂', '水分のみ'],
      answer: 0,
      explanation: '<b>温度（顕熱）と湿度（潜熱）の両方</b>を回転式・静止式の素子で交換する。換気による外気負荷の50〜70%程度を回収でき、換気量の多い建物ほど効果が大きい。'
    },
    {
      id: 'ac-17', subject: 4, category: 'aircon', difficulty: 2,
      stem: '外気負荷が10kWの空調システムに温度交換効率（全熱交換効率）60%の全熱交換器を設けると、処理すべき外気負荷はおよそ<u>（A）</u>kWになる。',
      choices: ['2', '4', '6', '8', '10'],
      answer: 1,
      explanation: '回収熱量 = 10 × 0.6 = 6kW<div class="formula">残りの外気負荷 = 10 − 6 = <b>4 kW</b></div>「回収量（6kW）」と「残る負荷（4kW）」の取り違えに注意。'
    },
    {
      id: 'ac-18', subject: 4, category: 'aircon', difficulty: 1,
      stem: '氷蓄熱式空調システムの主な導入目的は<u>（A）</u>である。',
      choices: [
        '冷凍機のCOPを昼間に高める',
        '冷媒の充填量を減らす',
        '除湿能力を高める',
        '夜間電力で蓄熱し昼間のピーク電力を削減する',
        '外気導入量を減らす'
      ],
      answer: 3,
      explanation: '夜間に製氷して蓄熱し、昼間の冷房ピーク時に放冷することで<b>ピークシフト（デマンド抑制）</b>と料金の安い夜間電力の活用を図る。熱源機容量も小さくできる。夜間の低外気温で凝縮温度が下がる利点もあるが、製氷時は蒸発温度が低くCOP自体は下がる。'
    },
    {
      id: 'ac-19', subject: 4, category: 'aircon', difficulty: 2,
      stem: '平均冷房負荷50kWの建物を、COP4.0の熱源機で年間1,200時間冷房するときの年間消費電力量は<u>（A）</u>kWhである。',
      choices: ['12,000', '15,000', '18,000', '24,000', '60,000'],
      answer: 1,
      explanation: '入力電力 = 50 / 4.0 = 12.5kW<div class="formula">12.5kW × 1,200h = <b>15,000 kWh</b></div>60,000kWhは「COPで割り忘れ」た値。COP改善（4.0→5.0なら12,000kWh）の効果計算もこの形。'
    },
    {
      id: 'ac-20', subject: 4, category: 'aircon', difficulty: 2,
      stem: 'VAV（変風量）方式は、<u>（A）</u>ことで搬送動力を削減する空調方式である。',
      choices: [
        '送風温度を一定に保つ',
        '外気導入を止める',
        '室の熱負荷に応じて送風量を変化させる',
        'ダクトを太くする',
        '送風機を常に定格で運転する'
      ],
      answer: 2,
      explanation: '負荷が小さいときに<b>風量を絞る</b>方式。送風機をインバータ制御すれば動力∝N³により大きな省エネとなる。水側で同じ考え方をするのがVWV（変流量）方式。CAV（定風量）との対比で問われる。'
    }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
