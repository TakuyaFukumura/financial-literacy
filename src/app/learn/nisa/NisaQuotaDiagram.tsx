export default function NisaQuotaDiagram() {
    return (
        <figure
            aria-labelledby="nisa-quota-diagram-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="nisa-quota-diagram-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                NISAの2つの投資枠
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                    <h3 className="font-bold text-sky-900 dark:text-sky-200">つみたて投資枠</h3>
                    <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">年間120万円</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        長期・積立・分散投資に適した一定の商品が対象
                    </p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-200">成長投資枠</h3>
                    <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">年間240万円</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        上場株式や一定の投資信託などが対象
                    </p>
                </div>
            </div>

            <div className="py-3 text-center text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                <span aria-hidden="true" className="block text-2xl leading-7">↓</span>
                <p>2つの枠を併用できます</p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-700/60">
                <p className="text-center font-bold text-gray-900 dark:text-white">NISA口座全体の上限</p>
                <div className="mt-4 grid gap-4 text-center sm:grid-cols-2">
                    <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                        <p className="text-sm text-gray-600 dark:text-gray-300">年間投資枠の合計</p>
                        <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">360万円</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
                        <p className="text-sm text-gray-600 dark:text-gray-300">生涯の非課税保有限度額</p>
                        <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">1,800万円</p>
                        <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                            成長投資枠は内数で1,200万円まで
                        </p>
                    </div>
                </div>
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                成長投資枠の1,200万円は、1,800万円の生涯上限に含まれます。2つの枠を上限まで使う必要はありません。
            </figcaption>
        </figure>
    );
}
