export default function StockOwnershipDiagram() {
    return (
        <figure
            aria-labelledby="stock-ownership-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="stock-ownership-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                株式を発行・売買する流れ
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                    <h3 className="font-bold text-sky-900 dark:text-sky-200">1. 株式の発行</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">投資家 → 会社</p>
                    <p className="mt-1 font-bold text-gray-900 dark:text-white">資金を提供し、株式を受け取る</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        会社は事業に使う資金を調達します。
                    </p>
                </div>
                <div
                    className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-200">2. 株主になる</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">株式を保有する</p>
                    <p className="mt-1 font-bold text-gray-900 dark:text-white">会社の一部を持つ</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        配当や議決権などの権利は、会社や株式の条件によって異なります。
                    </p>
                </div>
                <div
                    className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
                    <h3 className="font-bold text-amber-900 dark:text-amber-200">3. 市場で売買</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">投資家 ↔ 投資家</p>
                    <p className="mt-1 font-bold text-gray-900 dark:text-white">株式と代金を交換する</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        発行後の売買代金は、通常、会社ではなく売り手に渡ります。
                    </p>
                </div>
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                株式の発行による資金調達と、発行後の市場での売買は異なる取引です。
            </figcaption>
        </figure>
    );
}
