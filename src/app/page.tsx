import Link from 'next/link';

const topics = [
    {
        href: '/learn/pre-investment-household',
        category: '資産形成の基本',
        title: '投資を考える前の家計整理',
        description: '家計の現状、固定費、高金利負債を確認するポイントを学びます。',
    },
    {
        href: '/learn/emergency-fund',
        category: '資産形成の基本',
        title: '生活防衛資金',
        description: '病気や失業などの急な出費に備える資金の考え方を学びます。',
    },
    {
        href: '/learn/simple-interest',
        category: '資産形成の基本',
        title: '単利',
        description: '元本をもとに利息を計算する方法を学びます。',
    },
    {
        href: '/learn/compound-interest',
        category: '資産形成の基本',
        title: '複利',
        description: '利息が利息を生む仕組みを、基礎から学びます。',
    },
    {
        href: '/learn/r-g',
        category: '経済の基礎',
        title: 'r＞g',
        description: '資本収益率と経済成長率の関係を学びます。',
    },
    {
        href: '/learn/inflation',
        category: '経済の基礎',
        title: 'インフレ',
        description: '物価の上昇と、お金の購買力への影響を学びます。',
    },
    {
        href: '/learn/interest-rate',
        category: '経済の基礎',
        title: '金利',
        description: '利息の割合や、借りる側・預ける側への影響を学びます。',
    },
    {
        href: '/learn/bonds',
        category: '投資商品の基礎',
        title: '債券',
        description: '利息や満期の仕組み、価格変動とリスクを学びます。',
    },
    {
        href: '/learn/stocks',
        category: '投資商品の基礎',
        title: '株式',
        description: '株主の権利や株価の変動、投資リスクを学びます。',
    },
    {
        href: '/learn/nisa',
        category: '制度を知る',
        title: 'NISA',
        description: '投資の利益が非課税になる制度の基本を学びます。',
    },
    {
        href: '/learn/index-investing',
        category: '投資信託の基礎',
        title: 'インデックス投資',
        description: '指数に連動する投資の仕組みやリスクを学びます。',
    },
    {
        href: '/learn/dollar-cost-averaging',
        category: '資産形成の基本',
        title: 'ドル・コスト平均法',
        description: '定期的に一定額を投資する方法と注意点を学びます。',
    },
    {
        href: '/learn/long-term-installment-diversified',
        category: '資産形成の基本',
        title: '長期・積立・分散投資',
        description: '投資期間や購入方法、投資先を考える基本を学びます。',
    },
    {
        href: '/learn/exchange-rate',
        category: '経済の基礎',
        title: '為替',
        description: '為替レートや円高・円安の影響を学びます。',
    },
    {
        href: '/learn/ideco',
        category: '老後資金を準備する',
        title: 'iDeCo',
        description: '自分で積み立てて運用する私的年金制度を学びます。',
    },
    {
        href: '/learn/dividend-growth',
        category: '株式投資の基礎',
        title: '増配',
        description: '配当が増える仕組みと、確認したいポイントを学びます。',
    },
];

export default function Home() {
    return (
        <main
            className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-amber-50 to-white px-4 py-16 dark:from-gray-900 dark:to-gray-950 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-5xl">
                <section aria-labelledby="welcome-heading" className="mb-16 max-w-3xl">
                    <p className="mb-4 text-sm font-semibold tracking-widest text-emerald-700 dark:text-emerald-400">
                        金融リテラシー入門
                    </p>
                    <h1 id="welcome-heading"
                        className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        お金のことを、
                        <br/>
                        基礎から学ぼう。
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                        暮らしに役立つお金の知識を、身近なテーマからわかりやすく紹介します。
                        気になるテーマを選んで、ひとつずつ学んでみましょう。
                    </p>
                </section>

                <section aria-labelledby="topics-heading">
                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">LEARN</p>
                            <h2 id="topics-heading" className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                                テーマから学ぶ
                            </h2>
                        </div>
                        <p className="hidden text-sm text-gray-500 dark:text-gray-400 sm:block">
                            まずは気になるテーマから
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {topics.map((topic, index) => (
                            <Link
                                key={topic.href}
                                href={topic.href}
                                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-600 dark:focus-visible:outline-emerald-400"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                                        {topic.category}
                                    </span>
                                    <span className="text-sm text-gray-400 dark:text-gray-500">
                                        0{index + 1}
                                    </span>
                                </div>
                                <h3 className="mt-8 text-3xl font-bold text-gray-900 group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-300">
                                    {topic.title}
                                </h3>
                                <p className="mt-3 min-h-12 leading-7 text-gray-600 dark:text-gray-300">
                                    {topic.description}
                                </p>
                                <span
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400">
                                    <span>学んでみる</span>
                                    <span aria-hidden="true"
                                          className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                <p className="mt-12 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    このサイトは金融知識の学習を目的としています。個別の金融商品や投資を勧めるものではありません。
                </p>
            </div>
        </main>
    );
}
