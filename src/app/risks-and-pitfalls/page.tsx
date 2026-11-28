import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'リスクと落とし穴 | お金の学び場',
    description: '投資トラブル、資産形成のリスク、投資判断に影響する認知バイアスを学ぶ記事一覧です。',
};

const topics = [
    {
        href: '/learn/distribution-from-principal',
        title: 'タコ足配当',
        description: '分配金の原資を確認し、受取額だけでなく運用成果全体を見るポイントを学びます。',
    },
    {
        href: '/learn/ponzi-scheme',
        title: 'ポンジスキーム',
        description: '詐欺の仕組みや勧誘で注意したいサイン、勧誘を受けたときの対応を学びます。',
    },
    {
        href: '/learn/investment-mlm',
        title: '投資を装うマルチ商法（MLM）',
        description: '投資をうたう勧誘で、連鎖販売取引の仕組みや契約内容を確認するポイントを学びます。',
    },
    {
        href: '/learn/pyramid-scheme',
        title: 'ねずみ講（無限連鎖講）',
        description: 'ねずみ講の仕組みや、MLM・ポンジスキームとの違い、勧誘を受けたときの対応を学びます。',
    },
    {
        href: '/learn/binary-options',
        title: 'バイナリーオプション',
        description: '損益の仕組みや損益分岐に必要な勝率、繰り返し取引や業者選びの注意点を学びます。',
    },
    {
        href: '/learn/private-funds',
        title: '私募ファンドの注意点',
        description: '私募の仕組みや、運用実態・換金条件・事業者の登録状況を確認するポイントを学びます。',
    },
    {
        href: '/learn/new-build-one-room',
        title: '新築ワンルームマンション投資の注意点',
        description: '収支やサブリース、売却価格、ローンの条件など、契約前に確認したいポイントを学びます。',
    },
    {
        href: '/learn/automated-trading-tools',
        title: '自動売買ツールの注意点',
        description: '利益を保証する勧誘や、取引業者・契約条件を確認するポイントを学びます。',
    },
    {
        href: '/learn/altcoin-risks',
        title: '草コインの注意点',
        description: '流動性や価格変動、トークンの仕組み、勧誘を受けたときの確認点を学びます。',
    },
];

const risks = [
    {
        href: '/learn/dividend-cut-risk',
        title: '減配リスク',
        description: '減配や無配が起きる理由や、高い配当利回りだけで判断しないための確認点を学びます。',
    },
    {
        href: '/learn/price-volatility-risk',
        title: '価格変動リスク',
        description: '価格変動で資産評価額が変わる仕組みを、リーマン・ショック時の日経平均を例に学びます。',
    },
    {
        href: '/learn/leverage-and-margin-call',
        title: 'レバレッジと追証',
        description: 'レバレッジで損益が拡大する仕組みや、追証の条件・取引前の確認点を学びます。',
    },
    {
        href: '/learn/exchange-rate-risk',
        title: '為替リスク',
        description: '為替レートの変動が外貨建て資産の円換算額に与える影響を学びます。',
    },
    {
        href: '/learn/inflation-risk',
        title: 'インフレリスク',
        description: '物価上昇によって預貯金や資産の実質的な価値が変化する影響を学びます。',
    },
    {
        href: '/learn/asset-price-bubble',
        title: 'バブルと資産価格の急落',
        description: '日本の資産価格バブルを例に、価格上昇と信用の拡大、崩壊後の影響を学びます。',
    },
];

const biases = [
    {
        href: '/learn/confirmation-bias',
        title: '確証バイアス',
        description: '自分の考えに合う情報ばかり集めてしまう傾向と、反対の根拠を確認する方法を学びます。',
    },
    {
        href: '/learn/anchoring-bias',
        title: 'アンカリング',
        description: '買値や過去の高値に判断を引きずられないための考え方を学びます。',
    },
    {
        href: '/learn/loss-aversion',
        title: '損失回避',
        description: '損失を確定したくない気持ちが投資判断に与える影響と、見直し方を学びます。',
    },
    {
        href: '/learn/sunk-cost-effect',
        title: 'サンクコスト効果',
        description: '過去に使ったお金や時間に判断を引きずられないための考え方を学びます。',
    },
    {
        href: '/learn/status-quo-bias',
        title: '現状維持バイアス',
        description: '変える手間や不安から今の投資を続けてしまう傾向と、見直し方を学びます。',
    },
    {
        href: '/learn/herd-behavior',
        title: '同調・群集心理',
        description: '周囲の人気や話題につられて投資するリスクと、判断前の確認点を学びます。',
    },
];

function TopicList({items}: {items: typeof topics}) {
    return (
        <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        className="block h-full rounded-2xl border border-gray-200 bg-white p-6 transition
                        hover:border-emerald-300 hover:shadow-md focus-visible:outline-2
                        focus-visible:outline-offset-4 focus-visible:outline-emerald-700
                        dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-600
                        dark:focus-visible:outline-emerald-400"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{item.description}</p>
                        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400">
                            記事を読む
                            <span aria-hidden="true">→</span>
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default function RisksAndPitfallsPage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-amber-50 to-white px-4 py-12 dark:from-gray-900 dark:to-gray-950 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-5xl">
                <nav aria-label="ページナビゲーション">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
                    >
                        ← テーマ一覧へ戻る
                    </Link>
                </nav>

                <header className="mt-10 max-w-3xl">
                    <p className="text-sm font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
                        お金の知識を身につける
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        リスクと落とし穴
                    </h1>
                    <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        投資トラブル、資産形成で知っておきたいリスク、投資判断に影響する認知バイアスを紹介します。
                        為替やインフレは避けるべきものではなく、影響を知って備えることが大切です。
                    </p>
                </header>

                <section aria-labelledby="pitfalls-heading" className="mt-12">
                    <h2 id="pitfalls-heading" className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
                        投資トラブル・商品の注意点
                    </h2>
                    <TopicList items={topics}/>
                </section>

                <section aria-labelledby="risks-heading" className="mt-12">
                    <h2 id="risks-heading" className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
                        資産形成で知っておきたいリスク
                    </h2>
                    <TopicList items={risks}/>
                </section>

                <section aria-labelledby="biases-heading" className="mt-12">
                    <h2 id="biases-heading" className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
                        投資判断に影響する認知バイアス
                    </h2>
                    <TopicList items={biases}/>
                </section>
            </div>
        </main>
    );
}
