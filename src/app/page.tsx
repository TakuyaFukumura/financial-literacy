import Link from 'next/link';

const topics = [
    {
        href: '/learn/compound-interest',
        category: '資産形成の基本',
        title: '複利',
        description: '利息が利息を生む仕組みを、基礎から学びます。',
    },
    {
        href: '/learn/nisa',
        category: '制度を知る',
        title: 'NISA',
        description: '投資の利益が非課税になる制度の基本を学びます。',
    },
];

export default function Home() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-amber-50 to-white px-4 py-16 dark:from-gray-900 dark:to-gray-950 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-5xl">
                <section aria-labelledby="welcome-heading" className="mb-16 max-w-3xl">
                    <p className="mb-4 text-sm font-semibold tracking-widest text-emerald-700 dark:text-emerald-400">
                        金融リテラシー入門
                    </p>
                    <h1 id="welcome-heading" className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl">
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
                                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400">
                                    学んでみる
                                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
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
