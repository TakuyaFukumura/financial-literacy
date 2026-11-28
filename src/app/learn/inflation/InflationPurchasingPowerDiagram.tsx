export default function InflationPurchasingPowerDiagram() {
    return (
        <figure
            aria-labelledby="inflation-purchasing-power-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="inflation-purchasing-power-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                同じ1,000円で買える量の変化
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                1個あたりの価格が上がると、同じ金額で買える個数は少なくなります。
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                    <h3 className="font-bold text-sky-900 dark:text-sky-200">物価上昇前</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">1個 200円</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">1,000円</p>
                        <span aria-hidden="true" className="text-xl text-gray-500 dark:text-gray-400">→</span>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">5個</p>
                    </div>
                    <div aria-hidden="true" className="mt-4 flex gap-2">
                        {Array.from({length: 5}, (_, index) => (
                            <span key={index} className="h-6 flex-1 rounded-md bg-sky-300 dark:bg-sky-700"/>
                        ))}
                    </div>
                </div>
                <div
                    className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
                    <h3 className="font-bold text-amber-900 dark:text-amber-200">物価上昇後</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">1個 250円</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">1,000円</p>
                        <span aria-hidden="true" className="text-xl text-gray-500 dark:text-gray-400">→</span>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">4個</p>
                    </div>
                    <div aria-hidden="true" className="mt-4 flex gap-2">
                        {Array.from({length: 4}, (_, index) => (
                            <span key={index} className="h-6 flex-1 rounded-md bg-amber-300 dark:bg-amber-700"/>
                        ))}
                    </div>
                </div>
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                説明のための仮の例です。実際には商品ごとに価格の変化は異なります。
            </figcaption>
        </figure>
    );
}
