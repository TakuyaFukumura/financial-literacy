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
                    heading: '物価の動きを指標で見る',
                    body: '物価の変化を調べる指標の一つに消費者物価指数があります。指数は一定の品目・サービスの価格変化を集計したもので、個々の家庭で感じる値上がりと同じになるとは限りません。自分の支出内容もあわせて確認すると、暮らしへの影響を把握しやすくなります。',
                },
            ]}
            relatedTopic={{href: '/learn/inflation-risk', title: 'インフレリスク'}}
        >
            <InflationPurchasingPowerDiagram/>
        </LearningTopicPage>
    );
}
