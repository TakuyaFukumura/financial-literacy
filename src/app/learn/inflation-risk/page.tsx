import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'インフレリスクの基本 | お金の学び場',
    description: '物価上昇が預貯金や資産の実質的な価値に与える影響と、確認したいポイントを学びます。',
};

export default function InflationRiskPage() {
    return (
        <LearningTopicPage
            category="資産形成で知っておきたいリスク"
            title="インフレリスク"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['インフレ', '物価', 'リスク']}
            introduction="物価が上がると、同じ金額で買える商品やサービスが少なくなることがあります。預貯金などの額面が変わらなくても、物価上昇によってお金の実質的な購買力が下がる可能性があることを、インフレリスクといいます。"
            sections={[
                {
                    heading: '預貯金の額面と購買力は別',
                    body: '預貯金の残高が変わらなくても、物価が上がれば将来そのお金で買える量が減る場合があります。預金金利が物価上昇率を下回る期間が続くと、利息を含めた購買力が低下することがあります。',
                },
                {
                    heading: '実質的な価値は収入や支出でも変わる',
                    body: 'インフレの影響は、賃金や年金などの収入、食料品・住居費などの支出の変化によって異なります。物価全体の指標だけでなく、自分の家計で何がどれだけ変化したかを見ることも役立ちます。',
                },
                {
                    heading: 'インフレに強い資産が必ずあるわけではない',
                    body: '資産によって物価上昇への反応は異なり、どの資産も常にインフレを上回るとは限りません。投資には価格変動や元本割れの可能性があり、過去の値動きが将来の成果を保証するものでもありません。',
                },
                {
                    heading: '使う時期や目的に合わせて考える',
                    body: '日々の支出や近い将来に使う予定のお金、長期で備えるお金では、必要な備え方が異なります。物価や金利、家計の変化を確認し、金融商品を利用する場合は費用やリスクもあわせて理解しましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/inflation', title: 'インフレの基本'}}
            relatedTopicLabel="基礎を読む"
        />
    );
}
