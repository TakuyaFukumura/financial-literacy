const annualRate = 0.05;
const plot = {left: 76, right: 690, top: 28, bottom: 312};

type InterestGrowthChartProps = {
    readonly compareWithCompound?: boolean;
    readonly principal?: number;
};

function xForYear(year: number, durationYears: number) {
    return plot.left + (year / durationYears) * (plot.right - plot.left);
}

function yForBalance(balance: number, maxBalance: number) {
    return plot.bottom - (balance / maxBalance) * (plot.bottom - plot.top);
}

function linePoints(
    balanceForYear: (year: number) => number,
    durationYears: number,
    maxBalance: number
) {
    const years = Array.from({length: durationYears + 1}, (_, year) => year);

    return years
        .map((year) => `${xForYear(year, durationYears)},${yForBalance(balanceForYear(year), maxBalance)}`)
        .join(' ');
}

function formatYen(amount: number) {
    if (amount < 10_000) {
        return `${amount.toLocaleString('ja-JP')}円`;
    }

    return `${amount / 10_000}万円`;
}

export default function InterestGrowthChart({
                                                compareWithCompound = false,
                                                principal = 100_000,
                                            }: InterestGrowthChartProps) {
    const title = compareWithCompound ? '単利と複利の残高推移' : '単利の残高推移';
    const durationYears = compareWithCompound ? 40 : 20;
    const maxBalance = compareWithCompound ? principal * 7.5 : principal * 2.9;
    const yTicks = compareWithCompound
        ? Array.from({length: 8}, (_, tick) => principal * tick)
        : Array.from({length: 6}, (_, tick) => (principal * tick) / 2);
    const xTicks = compareWithCompound ? [0, 10, 20, 30, 40] : [0, 5, 10, 15, 20];

    return (
        <figure
            className="my-8 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
            </h2>
            <svg
                viewBox="0 0 720 380"
                role="img"
                aria-label={title}
                className="mt-4 w-full"
            >
                <text
                    x="18"
                    y="170"
                    transform="rotate(-90 18 170)"
                    textAnchor="middle"
                    className="fill-gray-600 text-xs dark:fill-gray-300"
                >
                    残高（円）
                </text>
                {yTicks.map((tick) => {
                    const y = yForBalance(tick, maxBalance);
                    return (
                        <g key={tick}>
                            <line
                                x1={plot.left}
                                y1={y}
                                x2={plot.right}
                                y2={y}
                                className="stroke-gray-200 dark:stroke-gray-600"
                                strokeDasharray="4 4"
                            />
                            <text
                                x={plot.left - 10}
                                y={y + 4}
                                textAnchor="end"
                                className="fill-gray-600 text-xs dark:fill-gray-300"
                            >
                                {formatYen(tick)}
                            </text>
                        </g>
                    );
                })}
                {xTicks.map((tick) => {
                    const x = xForYear(tick, durationYears);
                    return (
                        <g key={tick}>
                            <line
                                x1={x}
                                y1={plot.top}
                                x2={x}
                                y2={plot.bottom}
                                className="stroke-gray-100 dark:stroke-gray-700"
                            />
                            <text
                                x={x}
                                y={plot.bottom + 22}
                                textAnchor="middle"
                                className="fill-gray-600 text-xs dark:fill-gray-300"
                            >
                                {tick}
                            </text>
                        </g>
                    );
                })}
                <text
                    x={(plot.left + plot.right) / 2}
                    y="368"
                    textAnchor="middle"
                    className="fill-gray-600 text-xs dark:fill-gray-300"
                >
                    運用期間（年）
                </text>
                <polyline
                    points={linePoints(
                        (year) => principal * (1 + annualRate * year),
                        durationYears,
                        maxBalance
                    )}
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-emerald-600 dark:stroke-emerald-400"
                />
                {compareWithCompound && (
                    <polyline
                        points={linePoints(
                            (year) => principal * (1 + annualRate) ** year,
                            durationYears,
                            maxBalance
                        )}
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-blue-600 dark:stroke-blue-400"
                    />
                )}
            </svg>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="inline-flex items-center gap-2">
                    <span aria-hidden="true" className="h-1 w-5 rounded bg-emerald-600 dark:bg-emerald-400"/>
                    <span>単利</span>
                </span>
                {compareWithCompound && (
                    <span className="inline-flex items-center gap-2">
                        <span aria-hidden="true" className="h-1 w-5 rounded bg-blue-600 dark:bg-blue-400"/>
                        <span>複利（利息を再投資）</span>
                    </span>
                )}
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {compareWithCompound
                    ? `元本${formatYen(principal)}、年利5%、税金・手数料なしの場合のイメージです。単利は毎年${formatYen(principal * annualRate)}ずつ増え、複利は利息を元本に加えて運用する想定です。`
                    : `元本${formatYen(principal)}、年利5%、税金・手数料なしの場合のイメージです。単利では毎年${formatYen(principal * annualRate)}ずつ増えます。`}
            </figcaption>
        </figure>
    );
}
