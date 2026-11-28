export default function BondCashFlowDiagram() {
    return (
        <figure
            aria-labelledby="bond-cash-flow-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="bond-cash-flow-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                債券のお金の流れ
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                額面10万円・年利1%・期間3年の固定利付債を想定した例
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                    <h3 className="font-bold text-sky-900 dark:text-sky-200">1. 発行時</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">投資家から発行体へ</p>
                    <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">10万円を払う</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-200">2. 保有中</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">発行体から投資家へ</p>
                    <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">毎年1,000円</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">利息を受け取る</p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
                    <h3 className="font-bold text-amber-900 dark:text-amber-200">3. 満期</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">発行体から投資家へ</p>
                    <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">元本10万円</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">最後の利息1,000円も受け取る</p>
                </div>
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                仕組みを説明するための単純化した例です。発行体が返済できることを前提とし、税金や手数料は考慮していません。
            </figcaption>
        </figure>
    );
}
