import Link from 'next/link';
import type {ReactNode} from 'react';

export type LearningTag =
    | '資産形成'
    | '基礎知識'
    | '複利'
    | '投資商品'
    | '債券'
    | '株式'
    | '投資信託'
    | '分配金'
    | '配当'
    | '積立'
    | '長期'
    | '分散'
    | '制度'
    | '税制'
    | '老後資金'
    | 'インフレ'
    | '物価'
    | '金利'
    | '為替'
    | '経済'
    | '投資トラブル'
    | '詐欺'
    | 'リスク'
    | '投資手法'
    | '企業分析'
    | '預金'
    | 'ローン'
    | '家計管理'
    | '資本'
    | '格差'
    | '初心者';

type LearningTopicPageProps = {
    readonly category: string;
    readonly title: string;
    readonly backHref?: string;
    readonly backLabel?: string;
    readonly tags: readonly LearningTag[];
    readonly introduction: string;
    readonly sections: { id?: string; heading: string; body: string }[];
    readonly relatedTopic: { href: string; title: string };
    readonly relatedTopicLabel?: string;
    readonly references?: readonly { label: string; href: string }[];
    readonly contentReviewedOn?: string;
    readonly roadmapHref?: string;
    readonly roadmapProgress?:
        | {
        step: number;
        totalSteps: number;
        nextHref: string;
        nextTitle: string;
    }
        | {
        step: number;
        totalSteps: number;
        completionMessage: string;
    };
    readonly children?: ReactNode;
};

export default function LearningTopicPage({
                                              category,
                                              title,
                                              backHref = '/',
                                              backLabel = 'テーマ一覧へ戻る',
                                              tags,
                                              introduction,
                                              sections,
                                              relatedTopic,
                                              relatedTopicLabel = '次に読む',
                                              references = [],
                                              contentReviewedOn,
                                              roadmapHref,
                                              roadmapProgress,
                                              children,
                                          }: LearningTopicPageProps) {
    return (
        <main
            className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-amber-50 to-white px-4 py-12 dark:from-gray-900 dark:to-gray-950 sm:px-6 sm:py-20">
            <article className="mx-auto max-w-3xl">
                <nav aria-label="ページナビゲーション" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                    <Link
                        href={backHref}
                        className="text-emerald-700 hover:underline dark:text-emerald-400"
                    >
                        ← {backLabel}
                    </Link>
                    {roadmapHref && (
                        <Link
                            href={roadmapHref}
                            className="text-emerald-700 hover:underline dark:text-emerald-400"
                        >
                            ← 資産形成ロードマップへ戻る
                        </Link>
                    )}
                </nav>
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
                    <ul aria-label="タグ" className="mt-5 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </header>

                {children}

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {sections.map((section) => (
                        <section key={section.heading} id={section.id} className="py-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {section.heading}
                            </h2>
                            <p className="mt-4 leading-8 text-gray-700 dark:text-gray-300">
                                {section.body}
                            </p>
                        </section>
                    ))}
                </div>

                {(references.length > 0 || contentReviewedOn) && (
                    <aside
                        aria-labelledby="references-heading"
                        className="mt-8 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                    >
                        <h2 id="references-heading" className="text-lg font-bold text-gray-900 dark:text-white">
                            参考情報
                        </h2>
                        {contentReviewedOn && (
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                最終確認日：{contentReviewedOn}
                            </p>
                        )}
                        {references.length > 0 && (
                            <ul className="mt-3 list-inside list-disc space-y-1">
                                {references.map((reference) => (
                                    <li key={reference.href}>
                                        <a
                                            href={reference.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-emerald-700 underline
                                            underline-offset-2 hover:text-emerald-900 focus-visible:outline-2
                                            focus-visible:outline-offset-2 focus-visible:outline-emerald-700
                                            dark:text-emerald-400 dark:hover:text-emerald-300
                                            dark:focus-visible:outline-emerald-400"
                                        >
                                            {reference.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </aside>
                )}

                {roadmapProgress && (
                    'nextHref' in roadmapProgress ? (
                        <Link
                            href={roadmapProgress.nextHref}
                            className="mt-8 flex items-center justify-between rounded-xl border border-emerald-200
                            bg-emerald-50 p-5 font-semibold text-gray-900 transition hover:border-emerald-400
                            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700
                            dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-white
                            dark:hover:border-emerald-600 dark:focus-visible:outline-emerald-400"
                        >
                            <span>
                                <span className="block text-sm font-medium text-emerald-800 dark:text-emerald-300">
                                    資産形成ロードマップ {roadmapProgress.step} / {roadmapProgress.totalSteps}
                                </span>
                                <span className="mt-1 block">次の地点：{roadmapProgress.nextTitle}</span>
                            </span>
                            <span aria-hidden="true" className="text-emerald-700 dark:text-emerald-400">→</span>
                        </Link>
                    ) : (
                        <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5
                        font-semibold text-gray-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-white">
                            <span className="block text-sm font-medium text-emerald-800 dark:text-emerald-300">
                                資産形成ロードマップ {roadmapProgress.step} / {roadmapProgress.totalSteps}
                            </span>
                            <span className="mt-1 block">{roadmapProgress.completionMessage}</span>
                        </div>
                    )
                )}

                {(!roadmapProgress || !('nextHref' in roadmapProgress) ||
                    roadmapProgress.nextHref !== relatedTopic.href) && (
                    <Link
                        href={relatedTopic.href}
                        className="mt-4 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 font-semibold text-gray-900 transition hover:border-emerald-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-emerald-600"
                    >
                        <span>{relatedTopicLabel}：{relatedTopic.title}</span>
                        <span aria-hidden="true" className="text-emerald-700 dark:text-emerald-400">→</span>
                    </Link>
                )}
            </article>
        </main>
    );
}
