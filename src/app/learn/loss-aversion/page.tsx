import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '損失回避と投資判断 | お金の学び場',
    description: '損失を避けたい気持ちが投資判断に与える影響と、見直しの基準を学びます。',
};

export default function LossAversionPage() {
    return (
        <LearningTopicPage
            category="投資判断に影響する認知バイアス"
            title="損失回避と投資判断"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['資産形成', '投資手法', 'リスク']}
            introduction="損失回避とは、同じ金額であっても利益を得る喜びより損失の痛みを強く感じやすい傾向です。損を確定したくない気持ちが、投資を続けるか見直すかの判断に影響することがあります。"
            sections={[
                {
                    heading: '損失を認めたくなくて保有を続ける',
                    body: '値下がりした投資について、「買値に戻るまで待とう」と考え、投資した理由や状況が変わったかを確かめないまま保有を続けることがあります。買値に戻る保証はなく、保有し続けることにも価格変動などのリスクがあります。値下がりした事実だけで売買を決めるのではなく、現在の情報と当初の前提を見直すことが大切です。',
                },
                {
                    heading: '見直す基準を事前に考えておく',
                    body: '投資を始める前に、目的、想定する保有期間、許容できる損失、見直しが必要になる条件を書き留めておくと、感情に任せた判断を避ける助けになります。実際に見直すときは、その条件に当てはまるか、新しい情報で当初の理由が変わったかを確かめましょう。特定の損切り幅などが、すべての人や商品に適するわけではありません。',
                },
                {
                    heading: '資産全体と生活への影響を確認する',
                    body: '一つの投資の損益だけでなく、資産全体の配分や生活資金への影響も確認しましょう。生活に必要な資金を投資に回さないことや、損失が出た場合に家計へどの程度影響するかを考えることも大切です。判断に迷うときは、すぐに追加投資をしたり、急いで損失を取り返そうとしたりせず、契約内容やリスクを改めて確認してください。',
                },
            ]}
            relatedTopic={{href: '/learn/herd-behavior', title: '同調・群集心理'}}
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
