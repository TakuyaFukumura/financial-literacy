import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import InflationPurchasingPowerDiagram from './InflationPurchasingPowerDiagram';

export const metadata: Metadata = {
    title: 'インフレの基本 | お金の学び場',
    description: 'インフレの意味や、物価とお金の購買力に与える影響を図解で学びます。',
};

export default function InflationPage() {
    return (
        <LearningTopicPage
            category="経済の基礎"
            title="インフレ"
            tags={['経済', 'インフレ', '物価']}
            introduction="インフレ（インフレーション）とは、さまざまな商品やサービスの価格が全体として継続的に上がることです。物価が上がると、同じ金額で買えるものが少なくなり、お金の購買力は下がります。"
            sections={[
                {
                    heading: '物価と購買力の関係',
                    body: '物価は、商品やサービスの価格をまとめて見たものです。すべての価格が同じように上がるわけではありませんが、全体として上昇すると、現金の額面が変わらなくても買える量が減ることがあります。上の図は、その関係を簡単な例で示しています。',
                },
                {
                    heading: 'インフレが起きる背景',
                    body: '需要が供給を上回る、原材料や人件費などのコストが上がる、為替の変動で輸入品が高くなるなど、さまざまな要因があります。複数の要因が重なることもあり、個々の商品の値上がりだけで経済全体のインフレとは判断できません。',
                },
                {
                    heading: '家計への影響は一様ではない',
                    body: '食料品や光熱費などの値上がりは家計の支出を増やす一方、賃金や年金、預貯金の金利がどう変化するかによって影響は異なります。物価の動きを確認するときは、消費者物価指数などの指標や、自分の支出の変化もあわせて見ることが大切です。',
                },
                {
                    heading: '物価上昇だけで投資判断しない',
                    body: 'インフレに備える方法は一つではなく、投資には価格変動や元本割れのリスクがあります。特定の資産が必ずインフレに追いつくとは限りません。家計や資金を使う時期を踏まえて考え、制度や金融商品の最新情報も確認しましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/exchange-rate', title: '為替'}}
        >
            <InflationPurchasingPowerDiagram/>
        </LearningTopicPage>
    );
}
