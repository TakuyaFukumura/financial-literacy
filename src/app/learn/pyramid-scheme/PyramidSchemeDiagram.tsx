export default function PyramidSchemeDiagram() {
    return (
        <figure
            aria-labelledby="pyramid-scheme-diagram-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="pyramid-scheme-diagram-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                ねずみ講の参加者とお金の流れ
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                各段階で参加者が2倍になる単純化した例
            </p>

            <div className="mt-5 space-y-3">
                <div
                    className="mx-auto max-w-xs rounded-xl border border-amber-300 bg-amber-50 p-4 text-center dark:border-amber-800 dark:bg-amber-950/40">
                    <p className="font-bold text-amber-950 dark:text-amber-100">先順位者（1人）</p>
                </div>

                <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-400">↓ 勧誘により参加者が増える</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span className="text-amber-700 dark:text-amber-300">↑ 後順位者の金品から配当</span>
                </p>

                <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
                    <p className="col-span-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                        次の段階：2人
                    </p>
                    {[1, 2].map((person) => (
                        <div
                            key={person}
                            className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-center dark:border-sky-900 dark:bg-sky-950/40"
                        >
                            <p className="font-semibold text-sky-950 dark:text-sky-100">後順位者</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-400">↓ さらに参加者を勧誘</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span className="text-amber-700 dark:text-amber-300">↑ 金品の配当は上位へ</span>
                </p>

                <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                    <p className="col-span-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-300 sm:col-span-4">
                        さらに次の段階：4人
                    </p>
                    {[1, 2, 3, 4].map((person) => (
                        <div
                            key={person}
                            className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-center dark:border-sky-900 dark:bg-sky-950/40"
                        >
                            <p className="font-semibold text-sky-950 dark:text-sky-100">後順位者</p>
                        </div>
                    ))}
                </div>
            </div>

            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                参加者が増える一方、後順位者が出した金品は先順位者への配当に回ります。参加者を増やし続けることはできないため、後から加わるほど配当を受け取れず損失を負う可能性が高くなります。
            </figcaption>
        </figure>
    );
}
