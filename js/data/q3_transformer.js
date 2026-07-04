/* 課目Ⅲ 変圧器 — オリジナル問題（過去問形式の穴埋め・択一） */
(function () {
  var Q = [
    {
      id: 'tr-01', subject: 3, category: 'transformer', difficulty: 1,
      stem: '一次定格電圧6,600V、二次定格電圧210Vの単相変圧器がある。この変圧器の巻数比はおよそ<u>（A）</u>である。',
      choices: ['15.7', '22.2', '31.4', '44.4', '62.9'],
      answer: 2,
      explanation: '<div class="formula">巻数比 a = V<sub>1</sub> / V<sub>2</sub></div>a = 6600 / 210 ≒ <b>31.4</b>。<br>変圧器の電圧比は巻数比に等しく、電流比はその逆数（I<sub>1</sub>/I<sub>2</sub> = 1/a）になる。'
    },
    {
      id: 'tr-02', subject: 3, category: 'transformer', difficulty: 1,
      stem: '定格容量50kV·A、二次定格電圧200Vの単相変圧器の二次定格電流は<u>（A）</u>Aである。',
      choices: ['25', '50', '125', '200', '250'],
      answer: 4,
      explanation: '単相なので<div class="formula">I<sub>2</sub> = S / V<sub>2</sub> = 50,000 / 200 = <b>250 A</b></div>容量の単位はkV·A（皮相電力）。W（有効電力）と混同しないこと。'
    },
    {
      id: 'tr-03', subject: 3, category: 'transformer', difficulty: 2,
      stem: '定格容量300kV·A、定格一次電圧6.6kVの三相変圧器の定格一次電流はおよそ<u>（A）</u>Aである。',
      choices: ['15.1', '26.2', '45.5', '78.7', '136'],
      answer: 1,
      explanation: '三相では<div class="formula">I = S / (√3 × V) = 300,000 / (√3 × 6,600)</div>√3 × 6,600 ≒ 11,430 なので I ≒ <b>26.2 A</b>。<br>√3を忘れると45.5Aになる（頻出ミス）。'
    },
    {
      id: 'tr-04', subject: 3, category: 'transformer', difficulty: 2,
      stem: '百分率抵抗降下p＝1.2%、百分率リアクタンス降下q＝2.5%の変圧器に、力率0.8（遅れ）の定格負荷をかけたときの電圧変動率εはおよそ<u>（A）</u>%である。',
      choices: ['2.5', '2.9', '3.4', '4.0', '4.8'],
      answer: 0,
      explanation: '<div class="formula">ε = p cosθ + q sinθ</div>cosθ = 0.8 のとき sinθ = 0.6。<br>ε = 1.2 × 0.8 + 2.5 × 0.6 = 0.96 + 1.50 = <b>2.46 ≒ 2.5%</b><br>pにcosθ、qにsinθを掛ける。逆に掛けると2.7%になるので注意。'
    },
    {
      id: 'tr-05', subject: 3, category: 'transformer', difficulty: 1,
      stem: '変圧器の効率が最大となるのは、負荷損（銅損）と<u>（A）</u>が等しくなる負荷のときである。',
      choices: ['機械損', '誘電損', '漂遊負荷損', '無負荷損（鉄損）', '励磁突入時の損失'],
      answer: 3,
      explanation: '変圧器の損失は、負荷に無関係な<b>無負荷損（鉄損）</b>と、負荷電流の2乗に比例する<b>負荷損（銅損）</b>に大別される。<div class="formula">最大効率の条件： 鉄損 P<sub>i</sub> = 銅損 α²P<sub>c</sub></div>（αは負荷率、P<sub>c</sub>は全負荷銅損）'
    },
    {
      id: 'tr-06', subject: 3, category: 'transformer', difficulty: 2,
      stem: '鉄損1.0kW、全負荷銅損2.5kWの変圧器が最大効率となる負荷率はおよそ<u>（A）</u>%である。',
      choices: ['40', '50', '63', '71', '80'],
      answer: 2,
      explanation: '最大効率条件 P<sub>i</sub> = α²P<sub>c</sub> より<div class="formula">α = √(P<sub>i</sub> / P<sub>c</sub>) = √(1.0 / 2.5) = √0.4 ≒ 0.632</div>よって約<b>63%</b>。比0.4のまま「40%」としないこと（√を忘れない）。'
    },
    {
      id: 'tr-07', subject: 3, category: 'transformer', difficulty: 2,
      stem: '定格容量100kV·Aの単相変圧器がある。鉄損0.8kW、全負荷銅損1.7kWのとき、力率1.0の全負荷における効率はおよそ<u>（A）</u>%である。',
      choices: ['94.8', '95.6', '96.6', '97.0', '97.6'],
      answer: 4,
      explanation: '出力 = 100 × 1.0 = 100kW。<div class="formula">η = 出力 / (出力 + 鉄損 + 銅損)<br>= 100 / (100 + 0.8 + 1.7) = 100 / 102.5</div>≒ 0.9756 → <b>約97.6%</b>'
    },
    {
      id: 'tr-08', subject: 3, category: 'transformer', difficulty: 3,
      stem: '定格容量500kV·A、鉄損2.4kW、全負荷銅損6.0kWの変圧器を負荷率60%、力率0.8で運転するときの効率はおよそ<u>（A）</u>%である。',
      choices: ['95.2', '96.4', '97.3', '98.1', '99.0'],
      answer: 3,
      explanation: '出力 = 500 × 0.6 × 0.8 = 240kW<br>銅損は負荷率の2乗に比例：6.0 × 0.6² = 6.0 × 0.36 = 2.16kW<br>鉄損は負荷率によらず2.4kW<div class="formula">η = 240 / (240 + 2.4 + 2.16) = 240 / 244.56 ≒ 0.981</div>→ <b>約98.1%</b>。銅損に負荷率の2乗を掛け忘れないこと。'
    },
    {
      id: 'tr-09', subject: 3, category: 'transformer', difficulty: 2,
      stem: '百分率インピーダンス5%の変圧器の二次側で三相短絡が生じた。定格電流が200Aのとき、短絡電流はおよそ<u>（A）</u>Aである（電源インピーダンスは無視する）。',
      choices: ['1,000', '2,500', '3,200', '4,000', '8,000'],
      answer: 3,
      explanation: '<div class="formula">I<sub>s</sub> = I<sub>n</sub> × 100 / %Z = 200 × 100 / 5</div>= <b>4,000 A</b>（定格電流の20倍）。<br>%Zが小さいほど短絡電流は大きくなる。'
    },
    {
      id: 'tr-10', subject: 3, category: 'transformer', difficulty: 3,
      stem: '定格容量500kV·A（%Z＝4%）の変圧器Aと、300kV·A（%Z＝3%）の変圧器Bを並行運転し、600kV·Aの負荷に供給する。変圧器Aの分担負荷はおよそ<u>（A）</u>kV·Aである（%Zは各自己容量基準、抵抗分とリアクタンス分の比は等しいとする）。',
      choices: ['267', '300', '333', '375', '400'],
      answer: 2,
      explanation: '並行運転の負荷分担は「定格容量 ÷ %Z」に比例する。<div class="formula">A：500/4 = 125　　B：300/3 = 100</div>分担比は 125:100 = 5:4 なので<div class="formula">S<sub>A</sub> = 600 × 5/9 ≒ <b>333 kV·A</b></div>容量比（5:3）で分ける375kV·Aは誤り。%Zが小さい変圧器ほど多く分担する。'
    },
    {
      id: 'tr-11', subject: 3, category: 'transformer', difficulty: 2,
      stem: '定格容量100kV·Aの単相変圧器2台をV結線して三相負荷に供給するとき、供給できる三相容量はおよそ<u>（A）</u>kV·Aである。',
      choices: ['100', '115', '141', '173', '200'],
      answer: 3,
      explanation: '<div class="formula">V結線の出力 = √3 × (1台の定格容量) = √3 × 100</div>≒ <b>173 kV·A</b>。<br>2台分の合計200kV·Aは出せない（利用率 √3/2 ≒ 86.6%）。'
    },
    {
      id: 'tr-12', subject: 3, category: 'transformer', difficulty: 1,
      stem: 'V結線における変圧器の利用率はおよそ<u>（A）</u>%である。',
      choices: ['57.7', '66.7', '75.0', '86.6', '91.7'],
      answer: 3,
      explanation: '<div class="formula">利用率 = √3 S / 2S = √3 / 2 ≒ 0.866</div>→ <b>86.6%</b>。<br>Δ結線から1台外してV結線にすると、出力は元の 1/√3 ≒ 57.7% になる（利用率と混同しない）。'
    },
    {
      id: 'tr-13', subject: 3, category: 'transformer', difficulty: 3,
      stem: 'ある変圧器の鉄損は0.35kWである。1日のうち、出力40kW（このときの銅損0.8kW）で10時間運転し、残りは無負荷で加圧されていた。この変圧器の全日効率はおよそ<u>（A）</u>%である。',
      choices: ['93.8', '95.0', '96.1', '97.2', '98.3'],
      answer: 2,
      explanation: '1日の出力電力量 = 40 × 10 = 400kWh<br>鉄損は加圧中つねに発生：0.35 × <b>24h</b> = 8.4kWh<br>銅損は負荷時のみ：0.8 × 10 = 8.0kWh<div class="formula">η<sub>d</sub> = 400 / (400 + 8.4 + 8.0) = 400 / 416.4 ≒ 0.961</div>→ <b>約96.1%</b>。鉄損を10時間分（3.5kWh）で計算すると97.2%となり誤り。',
      tags: ['単位換算注意']
    },
    {
      id: 'tr-14', subject: 3, category: 'transformer', difficulty: 1,
      stem: '変圧器鉄心の渦電流損を低減するためには、<u>（A）</u>ことが有効である。',
      choices: ['鉄心の断面積を大きくする', '薄いけい素鋼板を積層して用いる', '巻数を増やす', '導電率の高い鉄心材料を用いる', '磁束密度を高くする'],
      answer: 1,
      explanation: '渦電流損は鋼板厚さの2乗に比例する（P<sub>e</sub> ∝ (t·f·B<sub>m</sub>)²）。そのため<b>薄い電磁鋼板（けい素鋼板）を絶縁して積層</b>する。けい素を含有させ抵抗率を上げるのも渦電流対策。ヒステリシス損は方向性けい素鋼板やアモルファス材の採用で低減する。'
    },
    {
      id: 'tr-15', subject: 3, category: 'transformer', difficulty: 2,
      stem: '変圧器の一次電圧が定格より10%上昇すると（周波数一定）、磁束密度もほぼ10%上昇する。鉄損がほぼ磁束密度の2乗に比例するとすれば、鉄損はおよそ<u>（A）</u>する。',
      choices: ['ほとんど変化しない', '10%増加', '21%増加', '33%増加', '44%増加'],
      answer: 2,
      explanation: 'E = 4.44 f N Φ<sub>m</sub> より、周波数一定なら Φ<sub>m</sub>（＝磁束密度）は電圧に比例。<div class="formula">1.1² = 1.21</div>→ 鉄損は<b>約21%増加</b>。電圧を上げて使うと無負荷損が大きく増えるため、省エネ上は適正電圧管理が重要。'
    },
    {
      id: 'tr-16', subject: 3, category: 'transformer', difficulty: 1,
      stem: '全負荷銅損2.0kWの変圧器を負荷率80%で運転するときの銅損は<u>（A）</u>kWである。',
      choices: ['1.0', '1.28', '1.6', '2.0', '2.56'],
      answer: 1,
      explanation: '銅損は負荷電流の2乗、すなわち負荷率の2乗に比例する。<div class="formula">P<sub>c</sub> = 2.0 × 0.8² = 2.0 × 0.64 = <b>1.28 kW</b></div>0.8を1回しか掛けない1.6kWは誤り。'
    },
    {
      id: 'tr-17', subject: 3, category: 'transformer', difficulty: 2,
      stem: '周波数50Hz、巻数200回の巻線に最大磁束0.01Wbが鎖交するとき、誘導起電力の実効値はおよそ<u>（A）</u>Vである。',
      choices: ['222', '314', '444', '628', '888'],
      answer: 2,
      explanation: '<div class="formula">E = 4.44 f N Φ<sub>m</sub> = 4.44 × 50 × 200 × 0.01</div>= <b>444 V</b>。<br>4.44 = √2π/2 ≒ 2π/√2 ÷ 2 に由来する変圧器起電力の基本式。'
    },
    {
      id: 'tr-18', subject: 3, category: 'transformer', difficulty: 2,
      stem: '定格60Hz用の変圧器を、同一電圧の50Hz電源で使用すると、鉄心の磁束密度は定格時のおよそ<u>（A）</u>倍となり、鉄損や励磁電流が増加して危険である。',
      choices: ['0.83', '1.0', '1.2', '1.44', '1.73'],
      answer: 2,
      explanation: 'E = 4.44 f N Φ<sub>m</sub> より、電圧一定なら<div class="formula">Φ<sub>m</sub> ∝ 1/f　→　60/50 = <b>1.2倍</b></div>磁束密度が上がると磁気飽和・過熱のおそれがある。逆（50Hz用を60Hzで使用）は磁束密度0.83倍となり磁気的には問題ない。'
    },
    {
      id: 'tr-19', subject: 3, category: 'transformer', difficulty: 3,
      stem: '百分率抵抗降下p＝1.0%、百分率リアクタンス降下q＝2.4%の変圧器の電圧変動率の最大値はおよそ<u>（A）</u>%である。',
      choices: ['2.6', '2.9', '3.4', '4.0', '4.8'],
      answer: 0,
      explanation: '電圧変動率 ε = p cosθ + q sinθ が最大になるのは tanθ = q/p のときで、その最大値は<div class="formula">ε<sub>max</sub> = √(p² + q²) = √(1.0² + 2.4²) = √6.76</div>= <b>2.6%</b>。単純和 p + q = 3.4% ではない。'
    },
    {
      id: 'tr-20', subject: 3, category: 'transformer', difficulty: 2,
      stem: '変圧器のインピーダンス電圧とは、<u>（A）</u>のことである。',
      choices: [
        '無負荷で二次側に現れる電圧',
        '定格負荷時の二次電圧降下',
        '励磁電流によって一次巻線に生じる電圧',
        '二次側を短絡し一次側に定格電流を流したときの一次電圧',
        '絶縁耐力試験で印加する電圧'
      ],
      answer: 3,
      explanation: '<b>二次短絡状態で一次に定格電流が流れるように加えた電圧</b>がインピーダンス電圧。定格電圧に対する百分率が%インピーダンス（%Z）で、短絡電流の大きさや並行運転の負荷分担を決める重要な値。この試験（短絡試験）で銅損（インピーダンスワット）も測定できる。'
    },
    {
      id: 'tr-21', subject: 3, category: 'transformer', difficulty: 1,
      stem: '変圧器の無負荷試験（開放試験）で測定できる損失は<u>（A）</u>である。',
      choices: ['銅損', '鉄損', '漂遊負荷損', '全損失', '機械損'],
      answer: 1,
      explanation: '無負荷試験では負荷電流が流れないため銅損はほぼゼロで、入力はほぼ<b>鉄損（無負荷損）</b>に等しい。あわせて励磁電流（励磁アドミタンス）も求められる。銅損は短絡試験で測る。'
    },
    {
      id: 'tr-22', subject: 3, category: 'transformer', difficulty: 1,
      stem: '変圧器の短絡試験で測定できるのは、インピーダンス電圧と<u>（A）</u>である。',
      choices: ['鉄損', '励磁電流', '銅損（負荷損）', '絶縁抵抗', '温度上昇限度'],
      answer: 2,
      explanation: '短絡試験では印加電圧が小さく磁束密度が低いため鉄損はほとんど発生せず、入力はほぼ<b>銅損（負荷損・インピーダンスワット）</b>に等しい。無負荷試験（鉄損）とセットで効率算定に用いる。'
    },
    {
      id: 'tr-23', subject: 3, category: 'transformer', difficulty: 2,
      stem: '変圧器の並行運転の条件として、必ずしも必要でないものは<u>（A）</u>である。',
      choices: ['極性が一致していること', '変圧比が等しいこと', '%インピーダンスが等しいこと', '定格容量が等しいこと', '（三相の場合）角変位・相回転が一致していること'],
      answer: 3,
      explanation: '<b>定格容量は等しくなくてよい</b>（容量比おおむね3:1以内が望ましい程度）。極性・変圧比・角変位が違うと循環電流や短絡的な電流が流れる。%Zが等しくないと容量に比例した負荷分担ができない。'
    },
    {
      id: 'tr-24', subject: 3, category: 'transformer', difficulty: 1,
      stem: 'アモルファス鉄心変圧器は、従来のけい素鋼板変圧器に比べて<u>（A）</u>が大幅に小さい。',
      choices: ['鉄損（無負荷損）', '銅損（負荷損）', '漂遊負荷損', '励磁突入電流', '騒音以外のすべての損失'],
      answer: 0,
      explanation: 'アモルファス合金はヒステリシス損・渦電流損が小さく、<b>無負荷損（鉄損）をけい素鋼板の1/3程度以下</b>にできる。負荷の軽い配電用変圧器ほど省エネ効果が大きい。トップランナー制度の高効率変圧器でも鉄損低減が中心。'
    },
    {
      id: 'tr-25', subject: 3, category: 'transformer', difficulty: 2,
      stem: '巻数比30の変圧器の一次側から見たインピーダンスが18Ωのとき、これを二次側に換算すると<u>（A）</u>Ωである。',
      choices: ['0.02', '0.60', '18', '540', '16,200'],
      answer: 0,
      explanation: 'インピーダンスは巻数比の2乗で換算する。<div class="formula">Z<sub>2</sub> = Z<sub>1</sub> / a² = 18 / 30² = 18 / 900 = <b>0.02 Ω</b></div>1乗（18/30＝0.6Ω）で換算しないこと。逆に二次→一次はa²倍。'
    }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
