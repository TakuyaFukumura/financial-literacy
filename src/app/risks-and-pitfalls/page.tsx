import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'リスクと落とし穴 | お金の学び場',
    description: '投資トラブルや資産形成に関わるリスクを学び、確認したいポイントを知るための記事一覧です。',
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
];

const risks = [
    {
        href: '/learn/exchange-rate',
        title: '為替リスク',
        description: '為替レートの変動が、外貨建て資産の円換算額や暮らしに与える影響を学びます。',
    },
    {
        href: '/learn/inflation',
        title: 'インフレリスク',
        description: '物価上昇によってお金の購買力が変化する仕組みと、家計への影響を学びます。',
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
                        投資トラブルを避けるための知識と、資産形成で理解しておきたいリスクを紹介します。
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
            </div>
        </main>
    );
}
