import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '資産形成ロードマップ | お金の学び場',
    description: 'NISAで全世界株式インデックスファンドの積立を検討するための学習ロードマップです。',
};

type RoadmapStop = {
    step: number;
    area: string;
    startsArea: boolean;
    title: string;
    description: string;
    side: 'left' | 'right';
    href?: string;
    linkLabel?: string;
    followupLink?: {href: string; label: string};
    checklist?: readonly string[];
    optionalLink?: {href: string; label: string};
};

const roadmapStops: readonly RoadmapStop[] = [
    {
        step: 1,
        area: '目的と目標を整理する',
        startsArea: true,
        title: '投資目的を確認する',
        description: 'なぜ資産形成や投資を考えるのか、実現したいことを整理します。',
        side: 'left',
        checklist: [
            '投資を考えるきっかけや目的を整理した',
            '投資以外の方法も含めて考えている',
        ],
    },
    {
        step: 2,
        area: '目的と目標を整理する',
        startsArea: false,
        title: '投資目標を設定する',
        description: '目標額や使う時期を考えます。目標は仮置きでき、将来見直せます。',
        side: 'right',
        checklist: [
            '目標額や、いつ使うお金かを考えた',
            '状況に応じて目標を見直せる',
            '目標を立てても投資成果は保証されないと理解した',
        ],
    },
    {
        step: 3,
        area: '家計の土台を整える',
        startsArea: true,
        title: '家計の現状を把握する',
        description: '手取り収入と毎月の支出を書き出し、現在の収支を確認します。',
        side: 'left',
        href: '/learn/pre-investment-household#household-status',
        linkLabel: '家計の現状を把握する',
    },
    {
        step: 4,
        area: '家計の土台を整える',
        startsArea: false,
        title: '家計の収支を改善する',
        description: '固定費などの契約や利用状況を確認し、見直せる点を考えます。',
        side: 'right',
        href: '/learn/pre-investment-household#fixed-costs',
        linkLabel: '固定費などを見直す',
    },
    {
        step: 5,
        area: '家計の土台を整える',
        startsArea: false,
        title: '高金利負債への対応を考える',
        description: '残高・金利・返済条件を確認し、必要に応じた相談先を知ります。',
        side: 'left',
        href: '/learn/pre-investment-household#debts',
        linkLabel: '負債と相談先を確認する',
    },
    {
        step: 6,
        area: '家計の土台を整える',
        startsArea: false,
        title: '生活防衛資金の考え方を知る',
        description: '必要額の考え方や準備方法を学びます。貯め終えることは次へ進む条件ではありません。',
        side: 'right',
        href: '/learn/emergency-fund',
        linkLabel: '生活防衛資金について学ぶ',
    },
    {
        step: 7,
        area: '投資の基礎を知る',
        startsArea: true,
        title: '投資の基礎を知る',
        description: 'まず長期・積立・分散を学び、続けてインデックス投資を確認します。',
        side: 'left',
        href: '/learn/long-term-installment-diversified',
        linkLabel: '先に読む：長期・積立・分散',
        followupLink: {
            href: '/learn/index-investing',
            label: '続けて読む：インデックス投資',
        },
        optionalLink: {
            href: '/learn/dollar-cost-averaging',
            label: '任意の補足：ドル・コスト平均法',
        },
    },
    {
        step: 8,
        area: '制度を知る',
        startsArea: true,
        title: 'NISAの仕組みを知る',
        description: 'NISAの非課税制度と投資枠を学びます。非課税でも元本は保証されません。',
        side: 'right',
        href: '/learn/nisa',
        linkLabel: 'NISAの基本を読む',
    },
];

function RoadmapStopCard({stop}: {readonly stop: RoadmapStop}) {
    return (
        <div
            className={`relative z-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm
            dark:border-gray-700 dark:bg-gray-800 sm:p-7 ${stop.side === 'left'
                ? 'md:col-start-1 md:justify-self-end'
                : 'md:col-start-3 md:justify-self-start'} md:row-start-1 md:w-full md:max-w-md`}
        >
            {stop.startsArea && (
                <h3
                    id={`area-${stop.step}`}
                    className="mb-4 border-l-4 border-emerald-500 pl-3 text-base font-bold text-emerald-800
                    dark:text-emerald-300"
                >
                    {stop.area}
                </h3>
            )}
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {stop.title}
            </h4>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                {stop.description}
            </p>

            {stop.checklist && (
                <ul aria-label="確認項目" className="mt-4 space-y-3">
                    {stop.checklist.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                            <span aria-hidden="true" className="font-bold text-emerald-700 dark:text-emerald-400">□</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {stop.href && stop.linkLabel && (
                <Link
                    href={stop.href}
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-700
                    hover:underline focus-visible:outline-2 focus-visible:outline-offset-4
                    focus-visible:outline-emerald-700 dark:text-emerald-400 dark:focus-visible:outline-emerald-400"
                >
                    {stop.linkLabel}
                    <span aria-hidden="true">→</span>
                </Link>
            )}

            {stop.followupLink && (
                <p className="mt-2 text-sm">
                    <Link
                        href={stop.followupLink.href}
                        className="font-semibold text-emerald-700 hover:underline
                        focus-visible:outline-2 focus-visible:outline-offset-4
                        focus-visible:outline-emerald-700 dark:text-emerald-400
                        dark:focus-visible:outline-emerald-400"
                    >
                        {stop.followupLink.label}
                        <span aria-hidden="true"> →</span>
                    </Link>
                </p>
            )}

            {stop.optionalLink && (
                <p className="mt-4 border-t border-gray-200 pt-4 text-sm dark:border-gray-700">
                    <Link
                        href={stop.optionalLink.href}
                        className="font-medium text-gray-600 underline decoration-dotted underline-offset-4
                        hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4
                        focus-visible:outline-emerald-700 dark:text-gray-300 dark:hover:text-emerald-300
                        dark:focus-visible:outline-emerald-400"
                    >
                        {stop.optionalLink.label}
                        <span aria-hidden="true"> →</span>
                    </Link>
                </p>
            )}
        </div>
    );
}

export default function AssetBuildingRoadmapPage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-amber-50 to-white px-4 py-12 dark:from-gray-900 dark:to-gray-950 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-5xl">
                <Link
                    href="/"
                    className="text-sm font-semibold text-emerald-700 hover:underline
                    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700
                    dark:text-emerald-400 dark:focus-visible:outline-emerald-400"
                >
                    ← テーマ一覧へ戻る
                </Link>

                <header className="mt-8 max-w-3xl">
                    <p className="text-sm font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
                        投資を検討している方へ
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        資産形成ロードマップ
                    </h1>
                    <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        投資目的と目標を整理し、家計の準備、投資の基礎、NISAの順に8つの地点で学びます。
                    </p>
                    <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 leading-7 text-gray-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-gray-200">
                        このロードマップは金融知識の学習を目的としています。投資を始めることや特定の商品を買うことを勧めるものではありません。生活防衛資金を貯め終えることも、投資を始める条件ではありません。
                    </p>
                </header>

                <section aria-labelledby="roadmap-heading" className="mt-12">
                    <h2 id="roadmap-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                        学習の道筋
                    </h2>

                    <div className="relative mt-8">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 100 1000"
                            preserveAspectRatio="none"
                            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
                        >
                            <path
                                d="M50 0 C50 55 18 55 50 100 S82 145 50 200 S18 255 50 300 S82 345 50 400 S18 455 50 500 S82 545 50 600 S18 655 50 700 S82 745 50 800 S18 855 50 900 S50 955 50 1000"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="9"
                                strokeLinecap="round"
                                className="text-gray-300 dark:text-gray-700"
                            />
                            <path
                                d="M50 0 C50 55 18 55 50 100 S82 145 50 200 S18 255 50 300 S82 345 50 400 S18 455 50 500 S82 545 50 600 S18 655 50 700 S82 745 50 800 S18 855 50 900 S50 955 50 1000"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="6"
                                strokeLinecap="round"
                                className="text-amber-100 dark:text-gray-800"
                            />
                            <path
                                d="M50 0 C50 55 18 55 50 100 S82 145 50 200 S18 255 50 300 S82 345 50 400 S18 455 50 500 S82 545 50 600 S18 655 50 700 S82 745 50 800 S18 855 50 900 S50 955 50 1000"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                strokeDasharray="1 2"
                                className="text-white dark:text-gray-500"
                            />
                        </svg>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 100 1000"
                            preserveAspectRatio="none"
                            className="pointer-events-none absolute left-0 top-0 h-full w-10 md:hidden"
                        >
                            <path
                                d="M50 0 C50 55 22 55 50 100 S78 145 50 200 S22 255 50 300 S78 345 50 400 S22 455 50 500 S78 545 50 600 S22 655 50 700 S78 745 50 800 S22 855 50 900 S50 955 50 1000"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="34"
                                strokeLinecap="round"
                                className="text-gray-300 dark:text-gray-700"
                            />
                            <path
                                d="M50 0 C50 55 22 55 50 100 S78 145 50 200 S22 255 50 300 S78 345 50 400 S22 455 50 500 S78 545 50 600 S22 655 50 700 S78 745 50 800 S22 855 50 900 S50 955 50 1000"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="25"
                                strokeLinecap="round"
                                className="text-amber-100 dark:text-gray-800"
                            />
                            <path
                                d="M50 0 C50 55 22 55 50 100 S78 145 50 200 S22 255 50 300 S78 345 50 400 S22 455 50 500 S78 545 50 600 S22 655 50 700 S78 745 50 800 S22 855 50 900 S50 955 50 1000"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeDasharray="5 6"
                                className="text-white dark:text-gray-500"
                            />
                        </svg>

                        <ol aria-label="8つの学習地点" className="relative space-y-6 pl-14 md:space-y-0 md:pl-0">
                            {roadmapStops.map((stop) => (
                                <li
                                    key={stop.step}
                                    id={`step-${stop.step}`}
                                    className="relative min-h-48 md:grid md:min-h-56 md:grid-cols-[1fr_3rem_1fr] md:items-center md:gap-6"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute -left-14 top-4 z-20 flex h-10 w-10 items-center justify-center
                                        rounded-full border-2 border-emerald-700 bg-white text-lg font-bold text-emerald-800
                                        shadow-sm dark:border-emerald-400 dark:bg-gray-900 dark:text-emerald-200
                                        md:hidden"
                                    >
                                        {stop.step}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="z-20 hidden h-12 w-12 items-center justify-center rounded-full
                                        border-2 border-emerald-700 bg-white text-lg font-bold text-emerald-800 shadow-sm
                                        dark:border-emerald-400 dark:bg-gray-900 dark:text-emerald-200
                                        md:col-start-2 md:row-start-1 md:flex md:justify-self-center"
                                    >
                                        {stop.step}
                                    </span>
                                    <RoadmapStopCard stop={stop}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <aside
                    id="optional-next-action"
                    aria-labelledby="optional-next-action-heading"
                    className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
                >
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">任意の行動</p>
                    <h2 id="optional-next-action-heading" className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                        主ルートの後：証券口座の開設を検討する
                    </h2>
                    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                        必要だと感じた場合に、金融機関の公式案内で口座の条件を確認してください。口座開設や投資開始は必須ではなく、主ルートはNISAの学習で完了です。
                    </p>
                </aside>

                <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                        NISA制度や商品の内容は変更されることがあります。最新情報は公的機関や各商品の公式資料で確認してください。
                    </p>
                    <Link
                        href="/"
                        className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-700
                        hover:underline focus-visible:outline-2 focus-visible:outline-offset-4
                        focus-visible:outline-emerald-700 dark:text-emerald-400
                        dark:focus-visible:outline-emerald-400"
                    >
                        ← テーマ一覧へ戻る
                    </Link>
                </footer>
            </div>
        </main>
    );
}
