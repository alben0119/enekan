/* 課目Ⅲ 力率改善・工場配電 — オリジナル問題（過去問形式の穴埋め・択一） */
(function () {
  var Q = [
    {
      id: 'pw-01', subject: 3, category: 'power', difficulty: 2,
      stem: '有効電力300kWの負荷の力率を0.7（遅れ）から0.9（遅れ）に改善するために必要なコンデンサ容量はおよそ<u>（A）</u>kvarである。',
      choices: ['140', '152', '161', '175', '190'],
      answer: 2,
      explanation: '<div class="formula">Q<sub>C</sub> = P (tanθ<sub>1</sub> − tanθ<sub>2</sub>)</div>cosθ=0.7 → tanθ<sub>1</sub> = √(1−0.7²)/0.7 ≒ 1.020<br>cosθ=0.9 → tanθ<sub>2</sub> = √(1−0.9²)/0.9 ≒ 0.484<br>Q<sub>C</sub> = 300 × (1.020 − 0.484) ≒ <b>161 kvar</b><br>tanθ = sinθ/cosθ を毎回この形で作れるように。最頻出パターン。'
    },
    {
      id: 'pw-02', subject: 3, category: 'power', difficulty: 1,
      stem: '有効電力400kW、力率0.8（遅れ）の負荷の力率を1.0に改善すると、皮相電力（したがって線路電流）はおよそ<u>（A）</u>%減少する。',
      choices: ['10', '20', '25', '33', '40'],
      answer: 1,
      explanation: '改善前 S<sub>1</sub> = 400/0.8 = 500kV·A、改善後 S<sub>2</sub> = 400kV·A。<div class="formula">(500 − 400)/500 = 0.2 → <b>20%減</b></div>電流はSに比例するため同じく20%減。変圧器容量に余裕が生まれるのも力率改善の効果。'
    },
    {
      id: 'pw-03', subject: 3, category: 'power', difficulty: 2,
      stem: '負荷の力率を0.7から0.9に改善すると、配電線の抵抗損はおよそ<u>（A）</u>%低減する（有効電力・電圧は一定とする）。',
      choices: ['19', '26', '33', '40', '49'],
      answer: 3,
      explanation: '線路損失は電流の2乗、電流は1/cosθに比例するので<div class="formula">損失 ∝ 1/cos²θ</div>損失比 = (0.7/0.9)² ≒ 0.605 → 低減率は 1 − 0.605 ≒ <b>約40%</b><br>「(cosθ<sub>1</sub>/cosθ<sub>2</sub>)²が残る割合」で覚える。'
    },
    {
      id: 'pw-04', subject: 3, category: 'power', difficulty: 2,
      stem: '三相3線式配電線の1線当たりの抵抗0.2Ω、リアクタンス0.4Ωの線路に、力率0.8（遅れ）の負荷電流100Aが流れている。線間の電圧降下はおよそ<u>（A）</u>Vである。',
      choices: ['40.0', '48.0', '69.3', '86.6', '104'],
      answer: 2,
      explanation: '<div class="formula">v = √3 I (R cosθ + X sinθ)</div>= √3 × 100 × (0.2×0.8 + 0.4×0.6)<br>= √3 × 100 × 0.40 ≒ <b>69.3 V</b><br>√3を忘れる（40V）、cosθ/sinθを取り違える、が定番ミス。',
      tags: ['単位換算注意']
    },
    {
      id: 'pw-05', subject: 3, category: 'power', difficulty: 1,
      stem: '設備容量500kWの工場の最大需要電力が350kWのとき、需要率は<u>（A）</u>%である。',
      choices: ['70', '75', '80', '85', '90'],
      answer: 0,
      explanation: '<div class="formula">需要率 = 最大需要電力 / 設備容量 × 100 = 350/500</div>= <b>70%</b>。需要率は通常100%以下。'
    },
    {
      id: 'pw-06', subject: 3, category: 'power', difficulty: 1,
      stem: 'ある期間の平均需要電力が210kW、最大需要電力が350kWのとき、負荷率は<u>（A）</u>%である。',
      choices: ['30', '42', '50', '60', '70'],
      answer: 3,
      explanation: '<div class="formula">負荷率 = 平均需要電力 / 最大需要電力 × 100 = 210/350</div>= <b>60%</b>。負荷率が高いほど設備が有効利用されている。需要率（÷設備容量）と混同しないこと。'
    },
    {
      id: 'pw-07', subject: 3, category: 'power', difficulty: 2,
      stem: '各需要家の最大需要電力の合計が500kW、合成した最大需要電力が400kWのとき、不等率は<u>（A）</u>である。',
      choices: ['0.80', '1.00', '1.25', '1.50', '2.00'],
      answer: 2,
      explanation: '<div class="formula">不等率 = 各需要家の最大需要の総和 / 合成最大需要 = 500/400</div>= <b>1.25</b>。最大となる時刻がずれるため不等率は1以上になる。分子分母を逆にすると0.8になるので注意。'
    },
    {
      id: 'pw-08', subject: 3, category: 'power', difficulty: 3,
      stem: '設備容量800kW、需要率60%、負荷率70%の工場の30日間（720時間）の消費電力量はおよそ<u>（A）</u>kWhである。',
      choices: ['121,000', '169,000', '202,000', '242,000', '346,000'],
      answer: 3,
      explanation: '最大需要電力 = 800 × 0.6 = 480kW<br>平均需要電力 = 480 × 0.7 = 336kW<div class="formula">W = 336kW × 720h ≒ <b>242,000 kWh</b></div>需要率→負荷率の順に掛けるだけだが、どちらを先に掛けても同じ。346,000は負荷率を掛け忘れた値。'
    },
    {
      id: 'pw-09', subject: 3, category: 'power', difficulty: 2,
      stem: '基準容量10MV·Aにおける百分率インピーダンスが5%の系統の三相短絡容量は<u>（A）</u>MV·Aである。',
      choices: ['25', '50', '100', '150', '200'],
      answer: 4,
      explanation: '<div class="formula">P<sub>s</sub> = 基準容量 × 100 / %Z = 10 × 100/5</div>= <b>200 MV·A</b>。%Zが小さいほど短絡容量は大きい（強い系統）。'
    },
    {
      id: 'pw-10', subject: 3, category: 'power', difficulty: 2,
      stem: '10MV·A基準で4%の百分率インピーダンスを、20MV·A基準に換算すると<u>（A）</u>%になる。',
      choices: ['2', '4', '6', '8', '12'],
      answer: 3,
      explanation: '%Zは基準容量に比例する。<div class="formula">%Z&prime; = %Z × (新基準容量/旧基準容量) = 4 × 20/10 = <b>8%</b></div>基準を大きくすれば%Zも大きくなる。半分の2%にしてしまう向きの間違いに注意。'
    },
    {
      id: 'pw-11', subject: 3, category: 'power', difficulty: 2,
      stem: '公称電圧6.6kVの母線における三相短絡容量が100MV·Aのとき、三相短絡電流はおよそ<u>（A）</u>kAである。',
      choices: ['5.05', '6.06', '7.58', '8.75', '15.2'],
      answer: 3,
      explanation: '<div class="formula">I<sub>s</sub> = P<sub>s</sub> / (√3 V) = 100×10⁶ / (√3 × 6,600)</div>√3 × 6,600 ≒ 11,430<br>I<sub>s</sub> ≒ 8,748A → <b>約8.75 kA</b>。√3を忘れると15.2kA。'
    },
    {
      id: 'pw-12', subject: 3, category: 'power', difficulty: 2,
      stem: '高圧進相コンデンサには、第5高調波対策としてコンデンサ容量の<u>（A）</u>%の直列リアクトルを設けるのが標準である。',
      choices: ['4', '5', '6', '8', '13'],
      answer: 2,
      explanation: '第5高調波に対して回路を誘導性にする理論値は 1/5² = 4%だが、余裕をみて<b>6%</b>が標準（高調波が多い場合は13%）。直列リアクトルはコンデンサ投入時の突入電流抑制にも効果がある。'
    },
    {
      id: 'pw-13', subject: 3, category: 'power', difficulty: 1,
      stem: '進相コンデンサによる配電系統内の損失低減効果を最も大きくするには、コンデンサを<u>（A）</u>するのがよい。',
      choices: ['変電所の母線にまとめて設置', '受電点に設置', '配電線の中間に設置', 'どこに置いても効果は同じ', '負荷（電動機など）の近くに分散設置'],
      answer: 4,
      explanation: '無効電流が流れる区間が短いほど損失低減効果が大きい。したがって<b>負荷側末端への分散設置</b>が理想（保守性・経済性から現実には幹線単位などで妥協する）。受電点設置では構内配線の損失は減らない。'
    },
    {
      id: 'pw-14', subject: 3, category: 'power', difficulty: 1,
      stem: 'デマンド監視装置などにより最大需要電力（デマンド）を抑制する直接の経済効果は、<u>（A）</u>ことである。',
      choices: ['使用電力量が必ず減る', '契約電力に基づく基本料金を低減できる', '力率が自動的に改善する', '受電電圧が安定する', '高調波が減少する'],
      answer: 1,
      explanation: '高圧契約では、基本料金が過去1年の最大デマンド（30分平均電力の最大値）などで決まる。ピークカット・ピークシフトで<b>契約電力（基本料金）を下げられる</b>。電力量（kWh）自体が減るとは限らない。'
    },
    {
      id: 'pw-15', subject: 3, category: 'power', difficulty: 2,
      stem: '三相3線式配電線の1線当たりの抵抗が0.1Ωで、線電流150Aが流れているとき、線路の全抵抗損は<u>（A）</u>kWである。',
      choices: ['2.25', '4.50', '6.75', '9.00', '11.7'],
      answer: 2,
      explanation: '3線分の損失を数える。<div class="formula">P<sub>loss</sub> = 3 I²R = 3 × 150² × 0.1 = 6,750W</div>= <b>6.75 kW</b>。「3を掛け忘れて2.25kW」が定番ミス。',
      tags: ['単位換算注意']
    },
    {
      id: 'pw-16', subject: 3, category: 'power', difficulty: 2,
      stem: '力率を0.75から0.95に改善すると、配電線の抵抗損は改善前のおよそ<u>（A）</u>%になる（有効電力一定）。',
      choices: ['45', '50', '56', '62', '70'],
      answer: 3,
      explanation: '<div class="formula">損失比 = (cosθ<sub>1</sub>/cosθ<sub>2</sub>)² = (0.75/0.95)² ≒ 0.62</div>→ <b>約62%</b>（約38%の低減）。「何%になるか」と「何%減るか」を読み分けること。'
    },
    {
      id: 'pw-17', subject: 3, category: 'power', difficulty: 2,
      stem: '送電端電圧6,600V、受電端電圧6,400Vのとき、電圧降下率はおよそ<u>（A）</u>%である。',
      choices: ['3.0', '3.1', '3.3', '3.6', '3.9'],
      answer: 1,
      explanation: '電圧降下率は<b>受電端電圧基準</b>。<div class="formula">ε = (V<sub>s</sub> − V<sub>r</sub>) / V<sub>r</sub> × 100 = 200/6,400 × 100</div>≒ <b>3.1%</b>。送電端基準（200/6,600 = 3.0%）と混同しやすいので定義を確認。'
    },
    {
      id: 'pw-18', subject: 3, category: 'power', difficulty: 1,
      stem: '通電中の変流器（CT）の二次側を開放してはならないのは、<u>（A）</u>からである。',
      choices: ['二次側に過電流が流れる', '二次側に高電圧が誘起され危険である', '鉄損が減少する', '一次電流が増大する', '位相が反転する'],
      answer: 1,
      explanation: '二次を開放すると一次電流がすべて励磁電流となり鉄心が飽和、二次巻線に<b>高電圧が誘起されて絶縁破壊や感電のおそれ</b>がある。作業時は必ず二次側を短絡してから行う。逆に計器用変圧器（VT）の二次短絡は禁止。'
    },
    {
      id: 'pw-19', subject: 3, category: 'power', difficulty: 1,
      stem: '断路器（DS）は、<u>（A）</u>。',
      choices: ['短絡電流を遮断できる', '定格負荷電流を遮断できる', '無負荷時の充電電流程度しか開閉できない', '常時の開閉操作用に使う機器である', 'ヒューズと同じ保護機能をもつ'],
      answer: 2,
      explanation: '断路器は消弧能力をもたず、<b>無負荷（無電流）状態での回路の切り離し</b>が役目。負荷電流・短絡電流の遮断は遮断器（CB）が行う。操作順序は「遮断器を切ってから断路器を開く」。'
    },
    {
      id: 'pw-20', subject: 3, category: 'power', difficulty: 3,
      stem: '公称電圧6.6kVの系統で三相短絡電流が12.5kAのとき、三相短絡容量はおよそ<u>（A）</u>MV·Aである。',
      choices: ['82.5', '118', '143', '165', '248'],
      answer: 2,
      explanation: '<div class="formula">P<sub>s</sub> = √3 V I<sub>s</sub> = √3 × 6,600 × 12,500</div>≒ <b>143 MV·A</b>。√3を忘れると82.5MV·A。遮断器の定格遮断容量選定に用いる。'
    },
    {
      id: 'pw-21', subject: 3, category: 'power', difficulty: 2,
      stem: 'デマンド値は30分間の平均電力で表される。ある30分間の使用電力量が250kWhであったとき、この時限のデマンド値は<u>（A）</u>kWである。',
      choices: ['125', '250', '375', '500', '1,000'],
      answer: 3,
      explanation: '<div class="formula">平均電力 = 電力量 / 時間 = 250kWh / 0.5h = <b>500 kW</b></div>「250kWh→250kW」（時間を掛け忘れ）や「125kW」（0.5を掛けてしまう）に注意。',
      tags: ['単位換算注意']
    },
    {
      id: 'pw-22', subject: 3, category: 'power', difficulty: 1,
      stem: '単相3線式（100/200V）配電で、電圧線aに30A、電圧線bに20Aの平衡しない負荷電流が流れているとき、中性線に流れる電流は<u>（A）</u>Aである。',
      choices: ['0', '10', '25', '50', '70'],
      answer: 1,
      explanation: '中性線電流は両電圧線の負荷電流の差。<div class="formula">I<sub>N</sub> = |30 − 20| = <b>10 A</b></div>負荷が平衡すれば中性線電流は0となり損失が減る。中性線が断線すると不平衡負荷に異常電圧が加わる点も重要。'
    },
    {
      id: 'pw-23', subject: 3, category: 'power', difficulty: 2,
      stem: '複数台の変圧器を並列使用している工場で、軽負荷の時間帯に一部の変圧器を停止して負荷を集約すると、主に<u>（A）</u>という省エネ効果が得られる。',
      choices: ['銅損が減る', '無負荷損（鉄損）を減らせる', '力率が改善する', '電圧変動率が下がる', '高調波が減る'],
      answer: 1,
      explanation: '鉄損は加圧しているだけで発生する。台数を減らせば停止分の<b>鉄損がまるごと削減</b>できる。一方、残った変圧器の負荷率が上がって銅損は増えるため、「鉄損の減少分＞銅損の増加分」となる負荷範囲で実施するのがポイント。'
    },
    {
      id: 'pw-24', subject: 3, category: 'power', difficulty: 1,
      stem: '高圧受電契約の力率による料金割引・割増の基準となる力率は<u>（A）</u>%である。',
      choices: ['75', '80', '85', '90', '95'],
      answer: 2,
      explanation: '基準は<b>85%</b>。これを上回ると基本料金割引（1%につき1%引きなど）、下回ると割増。進相コンデンサ設置の経済的動機の一つ。'
    },
    {
      id: 'pw-25', subject: 3, category: 'power', difficulty: 2,
      stem: '皮相電力500kV·A、力率0.6（遅れ）の負荷の力率を1.0にするために必要なコンデンサ容量は<u>（A）</u>kvarである。',
      choices: ['240', '300', '333', '400', '480'],
      answer: 3,
      explanation: '力率0.6のとき sinθ = 0.8 なので<div class="formula">Q = S sinθ = 500 × 0.8 = <b>400 kvar</b></div>力率1.0にするには無効電力を全て打ち消す。有効電力は P = 500 × 0.6 = 300kW（こちらを選ばないこと）。'
    }
  ];
  window.QUESTIONS = (window.QUESTIONS || []).concat(Q);
})();
