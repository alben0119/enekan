/* 課目Ⅲ 誘導電動機 — オリジナル問題（過去問形式の穴埋め・択一） */
(function () {
  var Q = [
    {
      id: 'in-01', subject: 3, category: 'induction', difficulty: 1,
      stem: '周波数50Hz、4極の三相誘導電動機の同期速度は<u>（A）</u>min<sup>−1</sup>である。',
      choices: ['750', '1,000', '1,200', '1,500', '1,800'],
      answer: 3,
      explanation: '<div class="formula">N<sub>s</sub> = 120 f / p = 120 × 50 / 4</div>= <b>1,500 min<sup>−1</sup></b>。<br>pは極数（極対数ではない）。60Hzなら1,800min<sup>−1</sup>。'
    },
    {
      id: 'in-02', subject: 3, category: 'induction', difficulty: 1,
      stem: '同期速度1,500min<sup>−1</sup>の誘導電動機が1,440min<sup>−1</sup>で回転しているとき、すべりは<u>（A）</u>%である。',
      choices: ['1', '2', '3', '4', '5'],
      answer: 3,
      explanation: '<div class="formula">s = (N<sub>s</sub> − N) / N<sub>s</sub> = (1500 − 1440) / 1500 = 0.04</div>→ <b>4%</b>。分母は回転速度Nではなく同期速度N<sub>s</sub>。'
    },
    {
      id: 'in-03', subject: 3, category: 'induction', difficulty: 2,
      stem: '周波数60Hz、6極の三相誘導電動機がすべり3%で運転しているときの回転速度は<u>（A）</u>min<sup>−1</sup>である。',
      choices: ['1,164', '1,176', '1,188', '1,194', '1,200'],
      answer: 0,
      explanation: 'N<sub>s</sub> = 120 × 60 / 6 = 1,200min<sup>−1</sup><div class="formula">N = N<sub>s</sub>(1 − s) = 1200 × 0.97 = <b>1,164 min<sup>−1</sup></b></div>'
    },
    {
      id: 'in-04', subject: 3, category: 'induction', difficulty: 2,
      stem: '三相誘導電動機の二次入力が50kW、すべりが4%のとき、二次銅損は<u>（A）</u>kWである。',
      choices: ['1.0', '2.0', '2.4', '4.0', '4.8'],
      answer: 1,
      explanation: '誘導電動機の基本比率<div class="formula">二次入力 : 二次銅損 : 機械出力 = 1 : s : (1−s)</div>二次銅損 = s × P<sub>2</sub> = 0.04 × 50 = <b>2.0 kW</b>。機械出力は48kW。この1:s:(1−s)は最頻出。'
    },
    {
      id: 'in-05', subject: 3, category: 'induction', difficulty: 3,
      stem: '三相誘導電動機の機械出力が37kW、すべりが5%のとき、二次入力はおよそ<u>（A）</u>kWである（機械損は無視する）。',
      choices: ['35.2', '37.0', '38.9', '40.7', '43.1'],
      answer: 2,
      explanation: '機械出力 P = (1−s) P<sub>2</sub> なので<div class="formula">P<sub>2</sub> = P / (1−s) = 37 / 0.95 ≒ <b>38.9 kW</b></div>「37 × 1.05 = 38.85」と掛け算にしても近い値になるが、考え方が誤り（この問題では偶然近いだけで、sが大きいとズレる）。二次銅損は 38.9 − 37 ≒ 1.9kW。'
    },
    {
      id: 'in-06', subject: 3, category: 'induction', difficulty: 2,
      stem: '出力22kWの誘導電動機が1,450min<sup>−1</sup>で運転しているとき、トルクはおよそ<u>（A）</u>N·mである。',
      choices: ['130', '135', '140', '145', '152'],
      answer: 3,
      explanation: '<div class="formula">T = P / ω = P / (2πN/60)</div>ω = 2π × 1450 / 60 ≒ 151.8 rad/s<br>T = 22,000 / 151.8 ≒ <b>145 N·m</b><br>覚えやすい形：T = 9550 × P[kW] / N[min<sup>−1</sup>] = 9550 × 22 / 1450 ≒ 145 N·m。同期速度1,500で計算すると140になるので注意。'
    },
    {
      id: 'in-07', subject: 3, category: 'induction', difficulty: 3,
      stem: 'ある三相誘導電動機の軸出力は10kWで、そのときの損失は固定子銅損0.5kW、鉄損0.3kW、二次銅損0.4kW、機械損0.2kWであった。この電動機の効率はおよそ<u>（A）</u>%である。',
      choices: ['85.1', '86.4', '87.7', '89.2', '90.9'],
      answer: 2,
      explanation: '入力 = 出力 + 全損失 = 10 + (0.5 + 0.3 + 0.4 + 0.2) = 11.4kW<div class="formula">η = 10 / 11.4 ≒ 0.877 → <b>約87.7%</b></div>損失の足し忘れに注意（4種類すべて足す）。'
    },
    {
      id: 'in-08', subject: 3, category: 'induction', difficulty: 2,
      stem: '巻線形誘導電動機で二次回路の抵抗を2倍にすると、トルク特性曲線は比例推移する。このとき変化しないものは<u>（A）</u>である。',
      choices: ['始動トルク', '最大トルク', '同一トルクを発生するすべり', '定格負荷時の回転速度', '二次銅損'],
      answer: 1,
      explanation: '比例推移：二次抵抗をk倍にすると、同一トルクを与えるすべりもk倍になる（r<sub>2</sub>/s = 一定）。トルク曲線は横（すべり軸）方向に移動するだけなので、<b>最大トルクの大きさは変わらない</b>（最大トルクを生じるすべりは変わる）。'
    },
    {
      id: 'in-09', subject: 3, category: 'induction', difficulty: 2,
      stem: 'すべり5%で運転中の巻線形誘導電動機の二次回路抵抗を3倍にした。トルクが同一なら、すべりは<u>（A）</u>になる。',
      choices: ['1.7%', '5%', '10%', '15%', '45%'],
      answer: 3,
      explanation: '比例推移の関係<div class="formula">r<sub>2</sub> / s = r<sub>2</sub>&prime; / s&prime;　→　s&prime; = s × (r<sub>2</sub>&prime;/r<sub>2</sub>)</div>s&prime; = 5% × 3 = <b>15%</b>。回転速度は下がる（速度制御に使えるが二次銅損が増えて非効率）。'
    },
    {
      id: 'in-10', subject: 3, category: 'induction', difficulty: 2,
      stem: '巻線形誘導電動機の二次抵抗始動の特長は、<u>（A）</u>ことである。',
      choices: [
        '始動電流・始動トルクとも大きくできる',
        '電源設備が不要になる',
        '始動電流を抑えつつ始動トルクを大きくできる',
        'すべりを負にして始動できる',
        '二次銅損が全く発生しない'
      ],
      answer: 2,
      explanation: '始動時（s=1）に外部抵抗を挿入すると、比例推移により最大トルク点をs=1側へ移せるため、<b>始動電流を抑えながら大きな始動トルク</b>が得られる。加速に伴い抵抗を順次短絡していく。クレーンなど重始動用途に適する。'
    },
    {
      id: 'in-11', subject: 3, category: 'induction', difficulty: 1,
      stem: 'かご形誘導電動機のY–Δ始動では、全電圧始動に比べて始動電流と始動トルクはいずれも<u>（A）</u>になる。',
      choices: ['1/√3', '1/2', '1/3', '1/6', '1/9'],
      answer: 2,
      explanation: '始動時はY接続で各相巻線に加わる電圧が1/√3になる。<div class="formula">トルク ∝ 電圧²　→　(1/√3)² = <b>1/3</b></div>線電流も1/3。トルクも1/3に落ちるので、軽負荷始動にしか使えない点がポイント。'
    },
    {
      id: 'in-12', subject: 3, category: 'induction', difficulty: 2,
      stem: '全電圧始動時の始動電流が定格電流の6倍である電動機をY–Δ始動すると、始動電流は定格電流のおよそ<u>（A）</u>倍になる。',
      choices: ['1.5', '2', '3', '4', '6'],
      answer: 1,
      explanation: 'Y–Δ始動で始動電流は1/3になる。<div class="formula">6 × 1/3 = <b>2倍</b></div>'
    },
    {
      id: 'in-13', subject: 3, category: 'induction', difficulty: 2,
      stem: 'インバータによる誘導電動機の可変速運転では、一般に一次電圧V<sub>1</sub>と周波数fの比（V/f）をほぼ一定に保つ。これは<u>（A）</u>ためである。',
      choices: [
        'トルクを周波数に比例させる',
        '鉄心の磁束をほぼ一定に保つ',
        'すべりをゼロにする',
        '始動電流を大きくする',
        '力率を常に1に保つ'
      ],
      answer: 1,
      explanation: 'E ≒ 4.44 f N Φ より Φ ∝ V/f。V/f一定なら<b>磁束一定</b>となり、周波数を下げても磁気飽和せず、定トルク特性が得られる。低速域では巻線抵抗の電圧降下分を補うトルクブーストを行う。'
    },
    {
      id: 'in-14', subject: 3, category: 'induction', difficulty: 2,
      stem: 'ファンを駆動する誘導電動機をインバータで回転速度50%に下げた場合、理論上、軸動力はおよそ<u>（A）</u>%になる。',
      choices: ['12.5', '25', '50', '75', '87.5'],
      answer: 0,
      explanation: 'ファン・ポンプ（2乗低減トルク負荷）では<div class="formula">風量 ∝ N、圧力 ∝ N²、軸動力 ∝ N³</div>0.5³ = 0.125 → <b>12.5%</b>。回転数制御が大きな省エネになる理由。ダンパ・弁による絞り制御ではこの効果は得られない。'
    },
    {
      id: 'in-15', subject: 3, category: 'induction', difficulty: 1,
      stem: '50Hzで運転中の4極誘導電動機を極数変換により8極にすると、同期速度は<u>（A）</u>min<sup>−1</sup>になる。',
      choices: ['250', '375', '500', '600', '750'],
      answer: 4,
      explanation: '<div class="formula">N<sub>s</sub> = 120 × 50 / 8 = <b>750 min<sup>−1</sup></b></div>極数を2倍にすると同期速度は半分。段階的な速度制御法の一つ。'
    },
    {
      id: 'in-16', subject: 3, category: 'induction', difficulty: 2,
      stem: '電源周波数50Hz、すべり4%で運転中の誘導電動機の二次（回転子）回路に流れる電流の周波数は<u>（A）</u>Hzである。',
      choices: ['0.5', '1', '1.5', '2', '4'],
      answer: 3,
      explanation: '<div class="formula">f<sub>2</sub> = s × f<sub>1</sub> = 0.04 × 50 = <b>2 Hz</b></div>回転子から見た回転磁界の相対速度がsN<sub>s</sub>であることによる。始動時（s=1）は電源周波数と同じ50Hz。'
    },
    {
      id: 'in-17', subject: 3, category: 'induction', difficulty: 3,
      stem: '同期速度1,500min<sup>−1</sup>の三相誘導電動機の二次入力が30kWのとき、発生トルクはおよそ<u>（A）</u>N·mである。',
      choices: ['175', '183', '191', '199', '210'],
      answer: 2,
      explanation: 'トルクは二次入力（同期ワット）を同期角速度で割って求まる。<div class="formula">T = P<sub>2</sub> / ω<sub>s</sub>　　ω<sub>s</sub> = 2π × 1500/60 ≒ 157.1 rad/s</div>T = 30,000 / 157.1 ≒ <b>191 N·m</b><br>回転速度ではなく同期速度で割るのがポイント（すべりによらず成立）。'
    },
    {
      id: 'in-18', subject: 3, category: 'induction', difficulty: 2,
      stem: '誘導電動機の励磁電流（無負荷電流）が変圧器に比べて大きいのは、磁気回路に<u>（A）</u>があるためである。',
      choices: ['漏れ磁束', '空隙（エアギャップ）', '渦電流', 'すべり', '高調波磁束'],
      answer: 1,
      explanation: '固定子と回転子の間には<b>空隙</b>が必要で、磁気抵抗が大きくなるため、同容量の変圧器より大きな励磁電流（定格の25〜50%程度）を要する。このため誘導電動機の力率は変圧器より悪く、軽負荷時ほど力率が低下する。'
    },
    {
      id: 'in-19', subject: 3, category: 'induction', difficulty: 1,
      stem: 'すべり6%で運転中の誘導電動機の二次効率（機械出力／二次入力）は<u>（A）</u>%である。',
      choices: ['88', '90', '92', '94', '97'],
      answer: 3,
      explanation: '<div class="formula">η<sub>2</sub> = (1 − s) = 1 − 0.06 = 0.94</div>→ <b>94%</b>。すべりが大きいほど二次銅損が増えて効率が落ちる。高効率運転にはすべりの小さい領域で使うことが基本。'
    },
    {
      id: 'in-20', subject: 3, category: 'induction', difficulty: 1,
      stem: '次の始動法のうち、巻線形誘導電動機でのみ用いられるものは<u>（A）</u>である。',
      choices: ['Y–Δ始動', 'リアクトル始動', '始動補償器（コンドルファ）始動', '二次抵抗始動', 'インバータによるソフトスタート'],
      answer: 3,
      explanation: '<b>二次抵抗始動</b>はスリップリングを通じて外部抵抗を二次回路に挿入するため、巻線形でしか使えない。かご形は回転子回路に外部から手を入れられないので、電源側（一次側）で電圧・周波数を操作する始動法を用いる。'
    },
    {
      id: 'in-21', subject: 3, category: 'induction', difficulty: 1,
      stem: '三相誘導電動機の回転方向を逆にするには、<u>（A）</u>すればよい。',
      choices: ['電源電圧を下げる', '3本の電源線のうち2本を入れ替える', '3本すべてを入れ替える', '周波数を上げる', '中性線を接地する'],
      answer: 1,
      explanation: '<b>任意の2線を入れ替える</b>と相回転が逆になり、回転磁界が逆転する。3本すべて入れ替えても相回転は変わらない。'
    },
    {
      id: 'in-22', subject: 3, category: 'induction', difficulty: 3,
      stem: '定格出力15kW、効率88%、力率0.85の三相誘導電動機を線間電圧400Vで運転するとき、線電流はおよそ<u>（A）</u>Aである。',
      choices: ['21.7', '25.5', '29.0', '34.1', '44.3'],
      answer: 2,
      explanation: '入力（有効電力）P<sub>in</sub> = 15,000 / 0.88 ≒ 17,045W<div class="formula">I = P<sub>in</sub> / (√3 V cosθ) = 17,045 / (√3 × 400 × 0.85)</div>√3 × 400 × 0.85 ≒ 588.9<br>I ≒ <b>29.0 A</b>。出力を効率で割って入力に直すのを忘れると25.5Aになる。',
      tags: ['単位換算注意']
    },
    {
      id: 'in-23', subject: 3, category: 'induction', difficulty: 1,
      stem: 'トップランナー制度の対象となっている高効率三相誘導電動機（IE3相当）は、主に<u>（A）</u>ことで効率を高めている。',
      choices: ['すべりを大きくする', '銅損・鉄損を低減する', '始動電流を大きくする', '冷却ファンを大型化する', '極数を増やす'],
      answer: 1,
      explanation: '導体断面積の拡大や巻線の工夫による<b>銅損低減</b>、高級電磁鋼板・鉄心設計による<b>鉄損低減</b>が中心。高効率機はすべりがやや小さくなる（回転速度が上がる）ため、ファン・ポンプでは軸動力が増える場合がある点も出題される。'
    },
    {
      id: 'in-24', subject: 3, category: 'induction', difficulty: 2,
      stem: '次の速度制御法のうち、かご形誘導電動機に適用できないものは<u>（A）</u>である。',
      choices: ['極数変換', '一次周波数制御（インバータ）', '二次抵抗制御', '一次電圧制御', 'V/f一定制御'],
      answer: 2,
      explanation: '<b>二次抵抗制御</b>は二次回路に外部抵抗を接続する必要があるため巻線形専用。かご形の主流はインバータによる一次周波数制御で、省エネ効果も大きい。'
    },
    {
      id: 'in-25', subject: 3, category: 'induction', difficulty: 3,
      stem: '軸出力45kW、機械損1kW、すべり2%で運転中の三相誘導電動機の二次銅損はおよそ<u>（A）</u>kWである。',
      choices: ['0.90', '0.92', '0.94', '0.98', '1.02'],
      answer: 2,
      explanation: '機械出力（電磁的出力）= 軸出力 + 機械損 = 45 + 1 = 46kW<div class="formula">P<sub>2</sub> = 46 / (1−0.02) ≒ 46.94kW<br>二次銅損 = s P<sub>2</sub> = 0.02 × 46.94 ≒ <b>0.94 kW</b></div>軸出力のまま 45 × 0.02 / 0.98 = 0.92 や 45 × 0.02 = 0.90 とすると誤り（機械損を戻してから計算）。'
    }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
