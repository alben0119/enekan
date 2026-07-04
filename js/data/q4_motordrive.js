/* 課目Ⅳ 電動力応用（必須問題） — オリジナル問題（過去問形式の穴埋め・択一） */
(function () {
  var Q = [
    {
      id: 'md-01', subject: 4, category: 'motordrive', difficulty: 2,
      stem: '流量0.1m³/s、全揚程20mの水をくみ上げるポンプの所要動力はおよそ<u>（A）</u>kWである。ポンプ効率は0.7とする。',
      choices: ['14.0', '19.6', '24.5', '28.0', '39.2'],
      answer: 3,
      explanation: '<div class="formula">P = 9.8 Q H / η　（Q[m³/s]、H[m]）</div>P = 9.8 × 0.1 × 20 / 0.7 = 19.6 / 0.7 = <b>28.0 kW</b><br>9.8はρg（水1m³=1000kg × 9.8m/s² ÷1000でkW化）。効率で「割る」のを忘れると19.6kW。'
    },
    {
      id: 'md-02', subject: 4, category: 'motordrive', difficulty: 3,
      stem: '流量3m³/min、全揚程30mのポンプを電動機で駆動する。ポンプ効率0.75、電動機効率0.9のとき、電動機入力はおよそ<u>（A）</u>kWである。',
      choices: ['14.7', '16.3', '19.6', '21.8', '26.9'],
      answer: 3,
      explanation: 'まず流量を秒に換算：Q = 3/60 = 0.05m³/s<div class="formula">P = 9.8 × 0.05 × 30 / (0.75 × 0.9) = 14.7 / 0.675</div>≒ <b>21.8 kW</b><br>「m³/min のまま計算」「効率を1つしか掛けない」が定番ミス。',
      tags: ['単位換算注意']
    },
    {
      id: 'md-03', subject: 4, category: 'motordrive', difficulty: 3,
      stem: '風量500m³/min、風圧（全圧）1.2kPaの送風機の所要動力はおよそ<u>（A）</u>kWである。送風機効率は0.6とする。',
      choices: ['8.3', '10.0', '12.5', '16.7', '20.8'],
      answer: 3,
      explanation: 'Q = 500/60 ≒ 8.33m³/s、p = 1,200Pa<div class="formula">P = Q p / η = 8.33 × 1,200 / 0.6 = 16,700W</div>≒ <b>16.7 kW</b><br>「Q[m³/s] × p[Pa] = W」の単位関係を確認。分単位のまま計算すると1,000kWになる（桁で気付けるように）。',
      tags: ['単位換算注意']
    },
    {
      id: 'md-04', subject: 4, category: 'motordrive', difficulty: 1,
      stem: 'ポンプ・送風機の相似則（比例則）では、回転速度をN倍にすると、圧力（揚程）はNの<u>（A）</u>に比例して変化する。',
      choices: ['1乗', '2乗', '3乗', '4乗', '変わらない'],
      answer: 1,
      explanation: '<div class="formula">流量 ∝ N　　圧力（揚程）∝ N²　　軸動力 ∝ N³</div>「1・2・3」とセットで暗記する。回転数制御の省エネ計算はすべてこの3点から導かれる。'
    },
    {
      id: 'md-05', subject: 4, category: 'motordrive', difficulty: 2,
      stem: '送風機の風量をインバータによる回転数制御で80%に減らすと、理論上、軸動力は元のおよそ<u>（A）</u>%になる。',
      choices: ['41', '51', '64', '80', '90'],
      answer: 1,
      explanation: '風量∝Nなので回転数も80%。<div class="formula">軸動力 ∝ N³ = 0.8³ = 0.512</div>→ <b>約51%</b>。2割の風量減で動力はほぼ半分になる。これが回転数制御の省エネ効果の根拠。'
    },
    {
      id: 'md-06', subject: 4, category: 'motordrive', difficulty: 1,
      stem: '送風機の風量調整方法のうち、部分負荷での省エネルギー効果が最も大きいのは<u>（A）</u>である。',
      choices: ['吐出ダンパによる絞り', '吸込ベーン制御', 'バイパス制御', '回転数制御（インバータ）', '出口弁の二段絞り'],
      answer: 3,
      explanation: '<b>回転数制御</b>は動力∝N³の関係でそのまま動力が減る。ダンパ・弁による絞りは損失を増やして流量を減らす方法なので動力はあまり減らない。バイパスは流した分が丸ごと無駄になる。省エネ効果の順は概ね「回転数制御＞吸込ベーン＞吐出ダンパ＞バイパス」。'
    },
    {
      id: 'md-07', subject: 4, category: 'motordrive', difficulty: 2,
      stem: '質量1,000kgの荷を0.5m/sの速度で巻き上げる巻上機の電動機所要出力はおよそ<u>（A）</u>kWである。機械効率は0.8とする。',
      choices: ['4.9', '6.1', '7.7', '9.8', '12.3'],
      answer: 1,
      explanation: '<div class="formula">P = 9.8 m v / η　（m[t]ならkW、m[kg]ならW）</div>P = 9.8 × 1,000 × 0.5 / 0.8 = 4,900 / 0.8 = 6,125W ≒ <b>6.1 kW</b><br>重力による仕事率 mgv を効率で割るだけ。',
      tags: ['単位換算注意']
    },
    {
      id: 'md-08', subject: 4, category: 'motordrive', difficulty: 3,
      stem: '積載質量1,000kgのエレベータに500kg分の釣合おもり効果があるとき、上昇速度1.5m/sでの電動機所要出力はおよそ<u>（A）</u>kWである。機械効率は0.85とする。',
      choices: ['4.3', '7.4', '8.6', '14.7', '17.3'],
      answer: 2,
      explanation: '釣合おもりで相殺される分を引いた<b>実質質量500kg</b>で計算する。<div class="formula">P = 9.8 × 500 × 1.5 / 0.85 = 7,350 / 0.85</div>≒ 8,650W → <b>約8.6 kW</b><br>おもりを無視すると17.3kW。エレベータはおもりのおかげで電動機を小さくできる。'
    },
    {
      id: 'md-09', subject: 4, category: 'motordrive', difficulty: 3,
      stem: 'はずみ車効果GD²＝100kg·m²のはずみ車が1,200min<sup>−1</sup>で回転しているとき、蓄えられている運動エネルギーはおよそ<u>（A）</u>kJである。',
      choices: ['99', '148', '197', '395', '790'],
      answer: 2,
      explanation: '慣性モーメント J = GD²/4 = 25kg·m²<br>角速度 ω = 2π × 1200/60 ≒ 125.7rad/s<div class="formula">E = (1/2) J ω² = 0.5 × 25 × 125.7²</div>≒ 197,000J = <b>約197 kJ</b><br>GD²をそのままJとして使うと4倍の790kJになる。J＝GD²/4を忘れない。'
    },
    {
      id: 'md-10', subject: 4, category: 'motordrive', difficulty: 1,
      stem: 'はずみ車効果GD²の大きい電動機駆動系では、<u>（A）</u>という特徴がある。',
      choices: ['始動時間が短くなる', '負荷急変時の速度変動が小さくなる', '始動電流が小さくなる', '定常運転時の効率が上がる', '騒音が減る'],
      answer: 1,
      explanation: '慣性が大きいと<b>速度変動が緩和</b>される（プレスなど衝撃負荷にはフライホイールを付ける）。一方、始動・加速には大きなエネルギーと時間が必要になり、始動頻度の高い用途では不利。'
    },
    {
      id: 'md-11', subject: 4, category: 'motordrive', difficulty: 2,
      stem: '慣性モーメント2kg·m²の回転体を、一定の加速トルク20N·mで停止状態から1,500min<sup>−1</sup>まで加速するのに要する時間はおよそ<u>（A）</u>秒である。',
      choices: ['3.9', '7.9', '11.8', '15.7', '31.4'],
      answer: 3,
      explanation: 'ω = 2π × 1500/60 ≒ 157.1rad/s<div class="formula">t = J ω / T = 2 × 157.1 / 20</div>≒ <b>15.7 秒</b><br>「トルク＝J×角加速度」の運動方程式から。GD²で与えられたらJ=GD²/4に直してから使う。'
    },
    {
      id: 'md-12', subject: 4, category: 'motordrive', difficulty: 2,
      stem: '負荷が周期的に変動する用途で電動機の容量を選定するときは、熱的な等価性から<u>（A）</u>を基準にする。',
      choices: ['始動トルクのみ', '最大トルク', '平均トルク', '最小トルク', '2乗平均平方根（RMS）トルク'],
      answer: 4,
      explanation: '損失（銅損）は電流≒トルクの2乗に比例するため、温度上昇は<b>2乗平均平方根（実効値）トルク</b>で決まる。単純平均では過小評価になる。最大トルクに対しては短時間過負荷耐量で別途チェックする。'
    },
    {
      id: 'md-13', subject: 4, category: 'motordrive', difficulty: 2,
      stem: 'ポンプの流量を回転数制御で70%に減らすと、理論上、軸動力は元のおよそ<u>（A）</u>%になる。',
      choices: ['24', '34', '49', '70', '84'],
      answer: 1,
      explanation: '<div class="formula">0.7³ = 0.343 → <b>約34%</b></div>3乗則。ただし実揚程（押上げ高さ）が支配的な系では理論値ほどは減らない点も問われる。'
    },
    {
      id: 'md-14', subject: 4, category: 'motordrive', difficulty: 1,
      stem: 'ファン・ポンプ類の負荷トルク特性は、回転速度に対して<u>（A）</u>である。',
      choices: ['定トルク特性', '定出力特性', '2乗低減トルク特性', '速度に反比例する特性', '速度によらず零'],
      answer: 2,
      explanation: 'ファン・ポンプは<b>トルク∝N²（2乗低減トルク）</b>。コンベヤ・巻上機は定トルク、巻取機（一定張力×一定線速）は定出力。負荷特性と速度制御方式の組合せは頻出。'
    },
    {
      id: 'md-15', subject: 4, category: 'motordrive', difficulty: 2,
      stem: 'コンベヤのような定トルク負荷をインバータで速度50%に下げたとき、理論上、所要動力は元のおよそ<u>（A）</u>%になる。',
      choices: ['12.5', '25', '50', '75', '100'],
      answer: 2,
      explanation: '<div class="formula">P = T ω　（T一定）→　P ∝ N</div>→ <b>50%</b>。3乗則が使えるのはファン・ポンプ（2乗低減トルク負荷）だけ。負荷特性を確認してから省エネ効果を見積もること。'
    },
    {
      id: 'md-16', subject: 4, category: 'motordrive', difficulty: 1,
      stem: 'クレーンの巻下げ時やエレベータの下降時などに、電動機を発電機として動作させ、発生電力を電源系統へ戻す制動方式を<u>（A）</u>という。',
      choices: ['機械制動', '発電制動', '逆相制動', '回生制動', '渦電流制動'],
      answer: 3,
      explanation: '<b>回生制動</b>は位置・運動エネルギーを電力として回収する最も省エネな制動。発電制動は抵抗器で熱として消費する（回収しない）。インバータ駆動ではコンバータを工夫（PWMコンバータ等）して回生を可能にする。'
    },
    {
      id: 'md-17', subject: 4, category: 'motordrive', difficulty: 3,
      stem: '100m³の水を40m上の水槽へくみ上げるのに必要な電力量はおよそ<u>（A）</u>kWhである。ポンプ・電動機の総合効率は0.65とする。',
      choices: ['8.7', '10.9', '14.2', '16.8', '21.8'],
      answer: 3,
      explanation: '位置エネルギー = mgh = (100×1,000)kg × 9.8 × 40m = 39.2×10⁶J = 39.2MJ<br>効率で割る：39.2 / 0.65 ≒ 60.3MJ<div class="formula">60.3MJ ÷ 3.6MJ/kWh ≒ <b>16.8 kWh</b></div>1kWh = 3,600kJ = 3.6MJ の換算が急所。',
      tags: ['単位換算注意']
    },
    {
      id: 'md-18', subject: 4, category: 'motordrive', difficulty: 2,
      stem: 'ポンプの吐出弁を絞って流量を減らす方法で軸動力があまり減らないのは、<u>（A）</u>からである。',
      choices: [
        'ポンプの回転数が上昇する',
        '管路抵抗が増えて運転点が高揚程側に移る',
        '電動機の力率が改善する',
        '流体の密度が変わる',
        'キャビテーションが必ず発生する'
      ],
      answer: 1,
      explanation: '弁絞りは管路抵抗曲線を立てて流量を減らす方法。流量は減るが<b>揚程が上がる</b>ため、軸動力（∝QH）はわずかしか減らない。回転数制御ならポンプ性能曲線そのものが下がるので3乗則で動力が減る。'
    },
    {
      id: 'md-19', subject: 4, category: 'motordrive', difficulty: 2,
      stem: '出力11kWの電動機が1,450min<sup>−1</sup>で運転しているときの軸トルクはおよそ<u>（A）</u>N·mである。',
      choices: ['72', '76', '80', '85', '95'],
      answer: 0,
      explanation: '<div class="formula">T = 9550 × P[kW] / N[min<sup>−1</sup>] = 9550 × 11 / 1450</div>≒ <b>72 N·m</b><br>9550 = 60×1000/(2π)。P=Tωの実用形として覚えると速い。'
    },
    {
      id: 'md-20', subject: 4, category: 'motordrive', difficulty: 3,
      stem: '電動機の慣性モーメント0.5kg·m²、負荷の慣性モーメント1.5kg·m²（電動機軸換算）の系を、一定の加速トルク25N·mで0から1,500min<sup>−1</sup>まで加速する時間はおよそ<u>（A）</u>秒である。',
      choices: ['3.1', '6.3', '9.4', '12.6', '15.7'],
      answer: 3,
      explanation: '慣性は電動機分と負荷分を<b>合算</b>する：J = 0.5 + 1.5 = 2kg·m²<div class="formula">t = J ω / T = 2 × 157.1 / 25 ≒ <b>12.6 秒</b></div>負荷側慣性は軸換算（速度比の2乗）してから加える点にも注意。'
    },
    {
      id: 'md-21', subject: 4, category: 'motordrive', difficulty: 2,
      stem: 'ベルトコンベヤの有効張力（駆動に必要な力）が2,000N、ベルト速度が1.5m/sのとき、駆動電動機の所要出力はおよそ<u>（A）</u>kWである。機械効率は0.8とする。',
      choices: ['2.4', '3.0', '3.75', '4.5', '6.0'],
      answer: 2,
      explanation: '<div class="formula">P = F v / η = 2,000 × 1.5 / 0.8 = 3,750W</div>= <b>3.75 kW</b>。直線運動の動力は「力×速度」。効率で割るのを忘れると3.0kW。'
    },
    {
      id: 'md-22', subject: 4, category: 'motordrive', difficulty: 2,
      stem: 'ポンプの回転速度を80%に下げると、締切揚程（揚程）は元のおよそ<u>（A）</u>%になる。',
      choices: ['51', '64', '80', '89', '100'],
      answer: 1,
      explanation: '<div class="formula">揚程 ∝ N² = 0.8² = 0.64</div>→ <b>64%</b>。実揚程（実際の押上げ高さ）より揚程が下がると送水できなくなるため、回転数を下げられる範囲には限界がある。'
    },
    {
      id: 'md-23', subject: 4, category: 'motordrive', difficulty: 1,
      stem: 'ポンプの全揚程とは、<u>（A）</u>である。',
      choices: ['実揚程に配管などの損失水頭を加えたもの', '吸込側と吐出側の高低差のみ', '配管の全長', 'ポンプの設置高さ', '吐出圧力の最大値'],
      answer: 0,
      explanation: '<b>全揚程 = 実揚程 + 損失水頭（管路摩擦など）</b>（＋速度水頭）。所要動力の計算 P=9.8QH/η に使うHは全揚程。配管の抵抗を減らす（口径拡大・曲がり削減）ことも搬送動力の省エネになる。'
    },
    {
      id: 'md-24', subject: 4, category: 'motordrive', difficulty: 3,
      stem: '慣性モーメント10kg·m²のはずみ車の回転速度が1,500min<sup>−1</sup>から1,200min<sup>−1</sup>に低下したとき、放出された運動エネルギーはおよそ<u>（A）</u>kJである。',
      choices: ['22.2', '33.3', '44.4', '55.5', '88.8'],
      answer: 2,
      explanation: 'ω₁ = 157.1rad/s、ω₂ = 125.7rad/s<div class="formula">ΔE = (1/2) J (ω₁² − ω₂²) = 5 × (24,674 − 15,791)</div>≒ 44,400J = <b>約44.4 kJ</b><br>速度の「差の2乗」ではなく「2乗の差」で計算する。',
      tags: ['計算ミス注意']
    },
    {
      id: 'md-25', subject: 4, category: 'motordrive', difficulty: 3,
      stem: '軸動力30kWの送風機をインバータ化し、風量を85%に落として年間2,000時間運転する。理論上の年間削減電力量はおよそ<u>（A）</u>kWhである。',
      choices: ['11,600', '17,400', '23,200', '30,600', '51,900'],
      answer: 2,
      explanation: '回転数制御後の動力 = 30 × 0.85³ = 30 × 0.614 ≒ 18.4kW<br>削減電力 = 30 − 18.4 = 11.6kW<div class="formula">年間削減量 = 11.6kW × 2,000h ≒ <b>23,200 kWh</b></div>「削減後の使用量」ではなく「削減量」を問われている点に注意。'
    }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
