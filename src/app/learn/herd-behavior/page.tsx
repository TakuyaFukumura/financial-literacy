import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '同調・群集心理と投資判断 | お金の学び場',
    description: '周囲の人気や話題につられて投資する同調・群集心理と、判断前の確認点を学びます。',
};

export default function HerdBehaviorPage() {
    return (
        <LearningTopicPage
            category="投資判断に影響する認知バイアス"
            title="同調・群集心理と投資判断"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['資産形成', '投資手法', 'リスク']}
            introduction="同調・群集心理とは、周囲の人の行動や多数派の意見に、自分の判断が影響されることです。投資では、人気や話題性を「安全」や「値上がりの根拠」と思い込み、十分に調べないまま購入してしまうことがあります。"
            sections={[
                {
                    heading: '人気や話題性は、投資の根拠とは限らない',
                    body: 'SNSで多くの人が話題にしている商品や、急に値上がりしている銘柄を見ると、乗り遅れたくないと感じることがあります。しかし、人気があることだけでは、商品の仕組みや価格が妥当であること、将来も値上がりすることは分かりません。話題になった理由と情報の出どころを確認し、仕組みや損失の可能性を理解しましょう。',
                },
                {
                    heading: '周囲の成功談だけを見ない',
                    body: '利益が出た人の投稿や広告は目立ちやすい一方、損失や失敗の情報は共有されにくいことがあります。成功談が実際の取引を示すか、どの期間や条件の結果か、紹介者に報酬などの利害関係があるかを確かめてください。実績画像や口コミだけで、将来の成果や業者の信頼性を判断しないようにしましょう。',
                },
                {
                    heading: '自分の目的とリスクに照らして決める',
                    body: '投資する前に、何のために投資するのか、どれくらいの期間を想定するのか、損失が出た場合に家計へどのような影響があるのかを考えましょう。説明を理解できない、急いで決めるよう求められる、借金や追加送金を勧められる場合は、その場で契約せず、独立した情報源や相談先を利用してください。',
                },
            ]}
            relatedTopic={{href: '/learn/confirmation-bias', title: '確証バイアス'}}
            references={[
                {
                    label: 'CFA Institute “The Behavioral Biases of Individuals”',
                    href: 'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/the-behavioral-biases-of-individuals',
                },
                {
                    label: 'U.S. Securities and Exchange Commission, Investor.gov “Investor Bulletin: Behavioral Patterns of U.S. Investors”',
                    href: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-72',
                },
            ]}
        />
    );
}
