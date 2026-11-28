export default function InterestRateDiagram() {
    return (
        <figure
            aria-labelledby="interest-rate-diagram-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="interest-rate-diagram-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                金利が変わると利息はどう変わる？
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                100万円を1年間預けた場合の、金利ごとの利息の例
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                    <h3 className="font-bold text-sky-900 dark:text-sky-200">年利 1%</h3>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">100万円 × 1%</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">利息 1万円</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-200">年利 3%</h3>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">100万円 × 3%</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">利息 3万円</p>
                </div>
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                計算を簡単にするための単利の例です。税金や手数料は考慮していません。
            </figcaption>
        </figure>
    );
}
