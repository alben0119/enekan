/* 課目Ⅲ パワーエレクトロニクス基礎 — オリジナル問題（頻出パターンのみ） */
(function () {
  var Q = [
    {
      id: 'pe-01', subject: 3, category: 'powerelec', difficulty: 2,
      stem: '実効値100Vの正弦波交流を単相全波整流（ダイオードブリッジ、抵抗負荷）したときの出力電圧の平均値はおよそ<u>（A）</u>Vである。',
      choices: ['45', '64', '90', '100', '127'],
      answer: 2,
      explanation: '<div class="formula">V<sub>d</sub> = 2√2 V / π ≒ 0.90 V = 0.90 × 100</div>= <b>90 V</b>。<br>半波整流なら半分の0.45V（45V）。「0.9倍」は覚えてしまうのが早い。'
    },
    {
      id: 'pe-02', subject: 3, category: 'powerelec', difficulty: 2,
      stem: '線間電圧200Vの三相交流を三相全波整流（6パルス、ダイオード）したときの出力電圧の平均値はおよそ<u>（A）</u>Vである。',
      choices: ['90', '135', '234', '270', '311'],
      answer: 3,
      explanation: '<div class="formula">V<sub>d</sub> = (3√2/π) V<sub>線間</sub> ≒ 1.35 × 200</div>= <b>270 V</b>。三相全波は脈動が小さく大容量整流の標準。係数1.35（単相全波0.9との対比）を覚える。'
    },
    {
      id: 'pe-03', subject: 3, category: 'powerelec', difficulty: 2,
      stem: 'サイリスタによる単相全波整流回路（誘導性負荷・電流連続）で、電源電圧の実効値が200V、制御遅れ角α＝60°のとき、出力電圧の平均値はおよそ<u>（A）</u>Vである。',
      choices: ['45', '64', '90', '127', '180'],
      answer: 2,
      explanation: '<div class="formula">V<sub>d</sub> = 0.9 V cosα = 0.9 × 200 × cos60°</div>= 0.9 × 200 × 0.5 = <b>90 V</b>。制御角を大きくするほど平均電圧が下がる（位相制御）。α＝90°で0V。'
    },
    {
      id: 'pe-04', subject: 3, category: 'powerelec', difficulty: 1,
      stem: '入力電圧200Vの降圧チョッパを通流率（デューティ比）0.6で動作させたときの出力電圧の平均値は<u>（A）</u>Vである。',
      choices: ['100', '120', '140', '160', '333'],
      answer: 1,
      explanation: '<div class="formula">V<sub>o</sub> = D × V<sub>in</sub> = 0.6 × 200 = <b>120 V</b></div>降圧チョッパは「掛ける」、昇圧チョッパは「1−Dで割る」。333Vは昇圧の式を使った誤り。'
    },
    {
      id: 'pe-05', subject: 3, category: 'powerelec', difficulty: 2,
      stem: '入力電圧200Vの昇圧チョッパを通流率0.5で動作させたときの出力電圧の平均値は<u>（A）</u>Vである。',
      choices: ['100', '200', '300', '400', '500'],
      answer: 3,
      explanation: '<div class="formula">V<sub>o</sub> = V<sub>in</sub> / (1 − D) = 200 / (1 − 0.5)</div>= <b>400 V</b>。Dを大きくするほど昇圧比が大きくなる。'
    },
    {
      id: 'pe-06', subject: 3, category: 'powerelec', difficulty: 2,
      stem: 'PWM（パルス幅変調）インバータは、<u>（A）</u>ことによって出力交流の電圧と周波数を制御する方式である。',
      choices: [
        '直流電圧そのものを可変にする',
        '出力にサイリスタを直列接続する',
        '搬送波との比較でスイッチングのパルス幅を変化させる',
        '変圧器のタップを切り換える',
        '負荷抵抗を調整する'
      ],
      answer: 2,
      explanation: '三角波（キャリア）と信号波の比較で<b>パルス幅を変化</b>させ、平均として正弦波状の電圧を作る。直流電圧一定のまま電圧・周波数の両方を制御でき、低次高調波が少ないのが特長。V/f制御インバータの標準方式。'
    },
    {
      id: 'pe-07', subject: 3, category: 'powerelec', difficulty: 2,
      stem: '三相全波整流回路（6パルス変換器）が電源系統に流出させる特性高調波は6n±1次であり、最も低い次数は<u>（A）</u>次である。',
      choices: ['3', '5', '7', '11', '13'],
      answer: 1,
      explanation: 'n=1のとき 6±1 = <b>5次</b>と7次。以降11・13次…と続く。第5高調波が最も大きく、進相コンデンサの直列リアクトル（6%）はこれへの対策。12パルス化やPWM化で高調波は低減できる。'
    },
    {
      id: 'pe-08', subject: 3, category: 'powerelec', difficulty: 1,
      stem: '現在の汎用インバータの主回路スイッチング素子として最も広く用いられている、ゲート電圧で駆動できる自己消弧形デバイスは<u>（A）</u>である。',
      choices: ['整流ダイオード', 'サイリスタ（SCR）', 'トライアック', 'IGBT', 'バリスタ'],
      answer: 3,
      explanation: '<b>IGBT</b>はMOSFETの電圧駆動性とバイポーラトランジスタの低オン電圧を併せもつ自己消弧形素子。サイリスタは一度点弧すると自分では消弧できない（他励式）。近年はSiCデバイスによる低損失化も進む。'
    },
    {
      id: 'pe-09', subject: 3, category: 'powerelec', difficulty: 2,
      stem: '電圧形インバータでは、各スイッチング素子に逆並列にダイオード（還流ダイオード）を接続する。これは<u>（A）</u>ためである。',
      choices: [
        '出力電圧を2倍にする',
        '誘導性負荷の電流の通り道を確保する',
        '素子の温度上昇を検出する',
        '直流電源を短絡から保護する',
        '高調波を増やして波形を整える'
      ],
      answer: 1,
      explanation: '誘導性負荷では電流を急に遮断できない。素子がオフした瞬間に<b>負荷電流を電源側へ還流させる経路</b>を還流（フリーホイール）ダイオードが担い、素子を過電圧から守る。回生時のエネルギーの戻り道でもある。'
    },
    {
      id: 'pe-10', subject: 3, category: 'powerelec', difficulty: 2,
      stem: 'あるインバータ装置の出力電力が90kW、装置内部の損失が3kWのとき、この装置の効率はおよそ<u>（A）</u>%である。',
      choices: ['93.5', '95.0', '96.8', '97.8', '99.0'],
      answer: 2,
      explanation: '入力 = 出力 + 損失 = 93kW<div class="formula">η = 90 / 93 ≒ 0.968 → <b>約96.8%</b></div>効率の分母は「出力＋損失」（＝入力）。出力で割らないこと。'
    }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
