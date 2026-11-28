import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'インデックス投資の基本 | お金の学び場',
    description: 'インデックス投資の仕組みや分散効果、リスクと商品選びの確認点を学びます。',
};

export default function IndexInvestingPage() {
    return (
        <LearningTopicPage
            category="投資信託の基礎"
            title="インデックス投資"
            tags={['初心者', '投資信託', '投資手法', '分散', 'リスク']}
            introduction="インデックス投資とは、日経平均株価など特定の指数に連動する運用成果を目指す投資方法です。投資信託やETFを通じて、指数を構成する複数の資産に投資する方法があります。"
            sections={[
                {
                    heading: '指数に連動することを目指す',
                    body: 'インデックスファンドは、決められた指数と同じような値動きを目指して運用されます。実際の運用成果は指数と完全には一致せず、信託報酬などの費用や運用上の差が影響します。',
                },
                {
                    heading: '分散投資につながることがある',
                    body: '幅広い銘柄や地域を含む指数に連動する商品なら、一つの商品を通じて多くの資産に投資できる場合があります。ただし、指数の種類によっては特定の国や業種、銘柄への比重が大きく、十分に分散されているとは限りません。',
                },
                {
                    heading: '市場全体の値下がりは避けられない',
                    body: '指数に連動する投資でも、相場全体が下がれば資産価値が下がり、元本割れすることがあります。過去の実績は将来の利益を保証しません。外貨建て資産を含む場合は為替変動も影響します。',
                },
                {
                    heading: '全世界株式インデックスファンドを確認する',
                    body: '全世界株式インデックスファンドは、全世界の株式を対象とする指数への連動を目指す投資信託です。商品によって連動を目指す指数や対象範囲、国・地域・銘柄の構成、費用が異なります。世界中の株式に分散しても、株価や為替の変動で資産価値が下がる可能性があり、元本は保証されません。目論見書や運用報告書で、連動対象の指数、投資対象、信託報酬などを確認しましょう。',
                },
                {
                    heading: '指数と費用を確認する',
                    body: '商品を比較するときは、連動を目指す指数、投資対象やその構成、信託報酬などの費用、指数との連動状況を確認しましょう。投資目的やリスク許容度に合うかを考え、手数料や税金も含めた全体の成果を見ることが大切です。',
                },
            ]}
            relatedTopic={{href: '/learn/nisa', title: 'NISA'}}
            references={[
                {
                    label: '金融庁「NISA特設ウェブサイト 資料コーナー」',
                    href: 'https://www.fsa.go.jp/policy/nisa2/book/index.html',
                },
            ]}
            contentReviewedOn="2026年11月28日"
            roadmapHref="/asset-building-roadmap"
            roadmapProgress={{
                step: 3,
                nextHref: '/learn/long-term-installment-diversified',
                nextTitle: '長期・積立・分散を考える',
            }}
        />
    );
}
