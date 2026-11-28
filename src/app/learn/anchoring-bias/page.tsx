import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'アンカリングと投資判断 | お金の学び場',
    description: '買値や過去の高値に判断を引きずられるアンカリングと、見直し方を学びます。',
};

export default function AnchoringBiasPage() {
    return (
        <LearningTopicPage
            category="投資判断に影響する認知バイアス"
            title="アンカリングと投資判断"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['資産形成', '投資手法', 'リスク']}
            introduction="アンカリングとは、最初に目にした数字や情報が基準として残り、その後の判断に影響する傾向です。投資では、買値や過去の高値、誰かが示した目標価格が、現在の価値を考える際の「ものさし」になってしまうことがあります。"
            sections={[
                {
                    heading: '買値は、現在の価値を示す数字ではない',
                    body: '値下がりした商品を持っていると、「買値まで戻ったら売る」と考えがちです。しかし、買値は自分が過去に支払った価格であり、現在の企業の業績や商品の価値をそのまま示すものではありません。買値に戻ることを前提にせず、今の状況や当初の投資理由が変わっていないかを確認しましょう。',
                },
                {
                    heading: '過去の高値や目標価格にとらわれない',
                    body: '過去の最高値や広告で示された目標価格を見ると、その数字が妥当な基準のように感じられることがあります。価格がそこから下がっているから割安、あるいは必ず戻るとは限りません。数字の根拠となる期間や前提、手数料などを確認し、異なる情報源や現在の状況と照らし合わせましょう。',
                },
                {
                    heading: '複数の基準で考え直す',
                    body: '判断を始める前に、買値や過去の価格を見ずに現在の情報だけで評価してみる方法があります。投資目的、保有期間、業績や市場環境の変化など複数の要素を確認し、価格だけを根拠に結論を出さないようにしましょう。将来の価格は確実に予測できず、どの評価方法にも限界があります。',
                },
            ]}
            relatedTopic={{href: '/learn/loss-aversion', title: '損失回避'}}
            references={[
                {
                    label: 'CFA Institute “The Behavioral Biases of Individuals”',
                    href: 'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/the-behavioral-biases-of-individuals',
                },
            ]}
        />
    );
}
