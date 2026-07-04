/* 課目Ⅳ 照明 — オリジナル問題（過去問形式の穴埋め・択一） */
(function () {
  var Q = [
    {
      id: 'lt-01', subject: 4, category: 'lighting', difficulty: 2,
      stem: '床面積200m²の事務室を平均照度750lxにしたい。1灯当たりの光束5,000lm、照明率0.6、保守率0.7のとき、必要な灯数は<u>（A）</u>灯である。',
      choices: ['66', '71', '72', '80', '84'],
      answer: 2,
      explanation: '光束法<div class="formula">N = E A / (F U M) = 750 × 200 / (5,000 × 0.6 × 0.7)</div>= 150,000 / 2,100 ≒ 71.4<br>灯数は<b>切り上げて72灯</b>（71灯では照度不足）。「71」を選ばないこと。光束法はこの形と変形（E・Fを求める）が最頻出。'
    },
    {
      id: 'lt-02', subject: 4, category: 'lighting', difficulty: 2,
      stem: '床面積300m²の部屋に、1灯6,000lmの照明器具を40灯設置した。照明率0.65、保守率0.75のとき、作業面の平均照度はおよそ<u>（A）</u>lxである。',
      choices: ['293', '340', '360', '390', '430'],
      answer: 3,
      explanation: '<div class="formula">E = F N U M / A = 6,000 × 40 × 0.65 × 0.75 / 300</div>= 117,000 / 300 = <b>390 lx</b><br>光束法を照度について解いた形。UとMの掛け忘れに注意。'
    },
    {
      id: 'lt-03', subject: 4, category: 'lighting', difficulty: 1,
      stem: '光束法における保守率Mとは、<u>（A）</u>を見込んだ係数である。',
      choices: [
        '部屋の在室率',
        'ランプの光束減退や器具・室内面の汚れによる照度低下',
        '昼光の入射',
        '照明器具の消費電力の増加',
        '停電の頻度'
      ],
      answer: 1,
      explanation: '<b>時間経過による照度低下</b>（ランプ光束の減退、器具・室内面の汚れ）をあらかじめ見込む係数で、1未満。初期照度 × M ＝ 保守末期の照度。定期的な清掃・ランプ交換で保守率を高く取れれば、設備を小さくでき省エネになる。'
    },
    {
      id: 'lt-04', subject: 4, category: 'lighting', difficulty: 2,
      stem: '光束法における照明率Uは、光源から出た全光束のうち作業面に到達する割合であり、器具の配光、室内面の反射率と<u>（A）</u>によって決まる。',
      choices: ['電源電圧', 'ランプの色温度', '点灯時間', '室指数（部屋の形状）', '作業の種類'],
      answer: 3,
      explanation: '照明率は「器具の配光・効率」「天井・壁・床の反射率」「<b>室指数</b>」で決まり、メーカーの照明率表から読み取る。部屋が広く天井が低い（室指数大）ほど、また反射率が高いほど照明率は大きい。'
    },
    {
      id: 'lt-05', subject: 4, category: 'lighting', difficulty: 2,
      stem: '間口12m、奥行10m、作業面から光源までの高さ2.5mの部屋の室指数はおよそ<u>（A）</u>である。',
      choices: ['1.1', '1.4', '1.8', '2.2', '2.7'],
      answer: 3,
      explanation: '<div class="formula">室指数 K = X Y / { H (X + Y) }</div>= 12 × 10 / {2.5 × (12 + 10)} = 120 / 55 ≒ <b>2.2</b><br>Hは天井高ではなく「作業面から光源までの高さ」を使う点に注意。'
    },
    {
      id: 'lt-06', subject: 4, category: 'lighting', difficulty: 1,
      stem: '光度800cdの点光源の直下2mにおける法線照度は<u>（A）</u>lxである。',
      choices: ['100', '200', '400', '800', '1,600'],
      answer: 1,
      explanation: '距離の逆2乗則<div class="formula">E = I / r² = 800 / 2² = <b>200 lx</b></div>距離が2倍になると照度は1/4。rで割る（400lx）のは誤り。'
    },
    {
      id: 'lt-07', subject: 4, category: 'lighting', difficulty: 2,
      stem: '光度1,000cdの点光源から2m離れた面に、光が入射角θ（cosθ＝0.8）で当たっている。この面の照度は<u>（A）</u>lxである。',
      choices: ['160', '200', '250', '320', '400'],
      answer: 1,
      explanation: '入射角余弦の法則<div class="formula">E = I cosθ / r² = 1,000 × 0.8 / 4 = <b>200 lx</b></div>斜めに当たる光はcosθ分だけ薄まる。逆2乗則とセットで使う。'
    },
    {
      id: 'lt-08', subject: 4, category: 'lighting', difficulty: 3,
      stem: '光度2,500cd（この方向の値）の点光源が床面から高さ3mにある。光源直下から水平に4m離れた床面上の点の水平面照度はおよそ<u>（A）</u>lxである。',
      choices: ['36', '48', '60', '100', '167'],
      answer: 2,
      explanation: '光源から点までの距離 r = √(3² + 4²) = 5m、cosθ = 3/5 = 0.6<div class="formula">E<sub>h</sub> = I cosθ / r² = 2,500 × 0.6 / 25 = <b>60 lx</b></div>3:4:5の直角三角形がよく使われる。rに水平距離4mやh=3mを使うと誤り。',
      tags: ['計算ミス注意']
    },
    {
      id: 'lt-09', subject: 4, category: 'lighting', difficulty: 1,
      stem: '全光束10,000lm、消費電力80WのLED照明器具の固有エネルギー消費効率は<u>（A）</u>lm/Wである。',
      choices: ['100', '125', '140', '160', '200'],
      answer: 1,
      explanation: '<div class="formula">効率 = 光束 / 消費電力 = 10,000 / 80 = <b>125 lm/W</b></div>lm/Wは照明の省エネ指標。LEDは白熱電球（約15lm/W）、蛍光灯（約60〜100lm/W）を大きく上回る。'
    },
    {
      id: 'lt-10', subject: 4, category: 'lighting', difficulty: 2,
      stem: '消費電力45W（安定器込み）の蛍光灯器具100台を20WのLED器具に更新した。年間点灯時間3,000時間のとき、年間の削減電力量は<u>（A）</u>kWhである。',
      choices: ['2,500', '4,500', '6,000', '7,500', '13,500'],
      answer: 3,
      explanation: '1台当たり削減電力 = 45 − 20 = 25W<div class="formula">25W × 100台 × 3,000h = 7,500,000Wh = <b>7,500 kWh</b></div>WからkWhへの換算（÷1,000）を忘れないこと。',
      tags: ['単位換算注意']
    },
    {
      id: 'lt-11', subject: 4, category: 'lighting', difficulty: 2,
      stem: '全方向に一様な光度100cdをもつ点光源の全光束はおよそ<u>（A）</u>lmである。',
      choices: ['314', '628', '1,257', '1,571', '2,513'],
      answer: 2,
      explanation: '全立体角は4πステラジアン。<div class="formula">F = 4π I = 4π × 100 ≒ <b>1,257 lm</b></div>光度[cd] = 光束[lm]/立体角[sr] の関係から。'
    },
    {
      id: 'lt-12', subject: 4, category: 'lighting', difficulty: 1,
      stem: '輝度の単位は<u>（A）</u>である。',
      choices: ['lx', 'lm', 'cd', 'cd/m²', 'lm/W'],
      answer: 3,
      explanation: '輝度は「見る方向への光度を見かけの面積で割ったもの」で<b>cd/m²</b>。まぶしさ（グレア）に関係する量。光束lm・光度cd・照度lx（=lm/m²）・輝度cd/m²の単位セットは確実に。'
    },
    {
      id: 'lt-13', subject: 4, category: 'lighting', difficulty: 1,
      stem: '照度の単位lxは、<u>（A）</u>に等しい。',
      choices: ['W/m²', 'lm', 'cd', 'cd/m²', 'lm/m²'],
      answer: 4,
      explanation: '照度は単位面積当たりに入射する光束なので<div class="formula">1 lx = 1 <b>lm/m²</b></div>「面に届く光の密度」が照度、「光源のまぶしさ」が輝度、と区別する。'
    },
    {
      id: 'lt-14', subject: 4, category: 'lighting', difficulty: 2,
      stem: 'タスク・アンビエント照明とは、<u>（A）</u>照明方式であり、照明電力の削減に有効である。',
      choices: [
        '天井全体を一様に高照度にする',
        '昼光だけで作業する',
        '全般（周囲）照度を抑え、作業部分のみ局部照明で必要照度を確保する',
        '人がいなくても常時点灯する',
        '色温度を時間帯で変える'
      ],
      answer: 2,
      explanation: '<b>作業面はタスク（局部）照明、室内全体は低めのアンビエント（全般）照明</b>とする方式。部屋全体を作業照度にするより消費電力を大きく削減できる。JIS照度基準では事務所の作業面750lx等が目安。'
    },
    {
      id: 'lt-15', subject: 4, category: 'lighting', difficulty: 1,
      stem: '光源の色温度（単位K）が高くなるほど、光色は<u>（A）</u>。',
      choices: ['赤みを帯びる', '青白くなる', '緑がかる', '暗くなる', '演色性が必ず良くなる'],
      answer: 1,
      explanation: '色温度が低い（2,700K程度）＝電球色の赤み、高い（5,000〜6,500K）＝昼光色の<b>青白い光</b>。明るさや演色性とは別の概念であることに注意。'
    },
    {
      id: 'lt-16', subject: 4, category: 'lighting', difficulty: 1,
      stem: '平均演色評価数Raは、<u>（A）</u>を表す指標である。',
      choices: [
        '基準光源で見たときと色の見え方がどれだけ近いか',
        '光源の明るさ',
        '光源の寿命',
        '光の指向性',
        'ちらつきの少なさ'
      ],
      answer: 0,
      explanation: 'Raは<b>色の再現性（演色性）</b>の指標で最大100。Ra100に近いほど基準光（自然光など）で見た色に近い。効率(lm/W)と演色性はトレードオフになりやすい。'
    },
    {
      id: 'lt-17', subject: 4, category: 'lighting', difficulty: 3,
      stem: '床面積800m²の体育館を平均照度500lxにするために必要な灯数は<u>（A）</u>灯である。1灯の光束20,000lm、照明率0.5、保守率0.8とする。',
      choices: ['50', '63', '70', '80', '100'],
      answer: 0,
      explanation: '必要総光束 = E A / (U M) = 500 × 800 / (0.5 × 0.8) = 400,000 / 0.4 = 1,000,000lm<div class="formula">N = 1,000,000 / 20,000 = <b>50 灯</b></div>UとMは「割る」側。掛けてしまうと8万lm→4灯のような桁違いになる。'
    },
    {
      id: 'lt-18', subject: 4, category: 'lighting', difficulty: 1,
      stem: '窓際の照明を昼光の明るさに応じて自動調光する省エネ手法では、<u>（A）</u>を用いる。',
      choices: ['人感センサ', 'タイマー', 'CO₂センサ', '照度センサ', '電力量計'],
      answer: 3,
      explanation: '<b>照度センサ</b>で昼光による照度を検出し、不足分だけ人工照明で補うように調光する（昼光利用制御）。在室検知には人感センサ、と使い分けを問われる。'
    },
    {
      id: 'lt-19', subject: 4, category: 'lighting', difficulty: 2,
      stem: '初期照度補正制御とは、<u>（A）</u>ことで照明電力を削減する制御である。',
      choices: [
        '朝の点灯時刻を遅らせる',
        '昼休みに一斉消灯する',
        '古いランプほど明るく点灯する',
        '人のいないエリアを消灯する',
        'ランプが新しく明るすぎる期間に調光で照度を抑える'
      ],
      answer: 4,
      explanation: '照明設備は保守率を見込んで設計するため、<b>新品時は必要照度より明るすぎる</b>。その余剰分を調光で抑えて一定照度に保つのが初期照度補正で、平均10〜15%程度の省エネになる。'
    },
    {
      id: 'lt-20', subject: 4, category: 'lighting', difficulty: 2,
      stem: '設計時の初期平均照度が600lxの照明設備の保守率が0.7のとき、保守末期（ランプ交換・清掃直前）の平均照度はおよそ<u>（A）</u>lxと見込まれる。',
      choices: ['420', '450', '480', '520', '570'],
      answer: 0,
      explanation: '<div class="formula">末期照度 = 初期照度 × M = 600 × 0.7 = <b>420 lx</b></div>設計照度は保守末期でも基準を満たすよう決める。逆算（設計照度＝必要照度÷M）の形でも出題される。'
    }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
