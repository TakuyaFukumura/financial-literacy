import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '長期・積立・分散投資の基本 | お金の学び場',
    description: '長期・積立・分散投資それぞれの考え方と、知っておきたいリスクを学びます。',
};

export default function LongTermInstallmentDiversifiedPage() {
    return (
        <LearningTopicPage
            category="資産形成の基本"
            title="長期・積立・分散投資"
            tags={['初心者', '資産形成', '投資手法', '長期', '積立', '分散', 'リスク']}
            introduction="長期・積立・分散投資は、投資の期間や購入方法、投資先を考えるときの基本的な視点です。組み合わせることで価格変動の影響を抑えやすくなる場合がありますが、損失を防いだり利益を保証したりするものではありません。"
            sections={[
                {
                    heading: '長期：時間をかけて運用する',
                    body: '短期的な値動きに一喜一憂せず、資金を使う時期や目的を考えて、長い期間で運用する考え方です。複利の効果が期待できる場合もありますが、長く保有すれば必ず利益が出るわけではありません。必要な時期に資産価値が下がっている可能性もあります。',
                },
                {
                    heading: '積立：定期的に購入する',
                    body: '一度にまとめて投資するのではなく、決まった間隔で購入を続ける方法です。一定額ずつ購入する場合、価格が低いときは多く、高いときは少なく買うことになり、購入時期を分けられます。ただし、相場が下がれば損失が出ることがあり、購入方法だけで利益が保証されるわけではありません。',
                },
                {
                    heading: '分散：投資先を分ける',
                    body: '一つの資産や銘柄に集中させず、値動きの異なる資産、地域、銘柄などに投資先を分ける考え方です。特定の投資先の値下がりが資産全体に与える影響を抑えやすくなる場合があります。一方、市場全体の下落などによる損失は避けられず、分散すればリスクがなくなるわけではありません。',
                },
                {
                    heading: '自分に合った計画を立てる',
                    body: '投資に回す金額は、生活費や近い将来に使う予定のお金を確保したうえで、無理なく続けられる範囲で考えましょう。投資対象や費用、値下がりした場合の影響を確認し、目的やリスク許容度に合った方法を選ぶことが大切です。',
                },
            ]}
            relatedTopic={{href: '/learn/dollar-cost-averaging', title: 'ドル・コスト平均法'}}
            relatedTopicLabel="任意の補足"
            references={[
                {
                    label: '金融庁「NISA早わかりガイドブック」',
                    href: 'https://www.fsa.go.jp/policy/nisa2/book/index.html',
                },
            ]}
            contentReviewedOn="2026年11月28日"
            roadmapHref="/asset-building-roadmap"
            roadmapProgress={{
                step: 7,
                totalSteps: 8,
                nextHref: '/learn/index-investing',
                nextTitle: 'インデックス投資を学ぶ',
            }}
        />
    );
}
