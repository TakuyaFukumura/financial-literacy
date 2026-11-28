import Link from 'next/link';

type LearningTopicPageProps = {
    category: string;
    title: string;
    introduction: string;
    sections: {heading: string; body: string}[];
    relatedTopic: {href: string; title: string};
};

export default function LearningTopicPage({
                                              category,
                                              title,
                                              introduction,
                                              sections,
                                              relatedTopic,
                                          }: LearningTopicPageProps) {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-amber-50 to-white px-4 py-12 dark:from-gray-900 dark:to-gray-950 sm:px-6 sm:py-20">
            <article className="mx-auto max-w-3xl">
                <Link
                    href="/"
                    className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
                >
                    ← テーマ一覧へ戻る
                </Link>
                <header className="mt-10 border-b border-gray-200 pb-8 dark:border-gray-700">
                    <p className="text-sm font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
                        {category}
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        {introduction}
                    </p>
                </header>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {sections.map((section) => (
                        <section key={section.heading} className="py-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {section.heading}
                            </h2>
                            <p className="mt-4 leading-8 text-gray-700 dark:text-gray-300">
                                {section.body}
                            </p>
                        </section>
                    ))}
                </div>

                <Link
                    href={relatedTopic.href}
                    className="mt-4 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 font-semibold text-gray-900 transition hover:border-emerald-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-emerald-600"
                >
                    <span>次に読む：{relatedTopic.title}</span>
                    <span aria-hidden="true" className="text-emerald-700 dark:text-emerald-400">→</span>
                </Link>
            </article>
        </main>
    );
}
