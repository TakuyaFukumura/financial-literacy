export default function InvestmentMlmDiagram() {
    return (
        <figure
            aria-labelledby="investment-mlm-diagram-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="investment-mlm-diagram-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                商品販売と投資勧誘を切り分けて確認
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
                <section
                    className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                    <h3 className="font-bold text-sky-950 dark:text-sky-100">商品・サービスの販売と紹介</h3>
                    <div
                        className="mt-3 space-y-2 rounded-lg bg-white p-3 text-center text-sm font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        <p>販売：事業者 → 会員・販売員 → 購入者</p>
                        <p>紹介：既存会員 → 新しい会員</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        会員が商品・サービスを販売したり、新しい会員を紹介したりします。紹介報酬がある場合は、条件や支払元を確認します。
                    </p>
                </section>

                <section
                    className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
                    <h3 className="font-bold text-amber-950 dark:text-amber-100">「投資」と勧誘されたら別に確認</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        <li>何に投資するのか</li>
                        <li>誰が運用し、資金を管理するのか</li>
                        <li>利益や紹介報酬はどこから支払われるのか</li>
                    </ul>
                </section>
            </div>

            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                商品・サービスの販売と投資の運用は別の仕組みです。図は確認ポイントを示す簡略例で、個別の取引の適法性や利益を判断するものではありません。
            </figcaption>
        </figure>
    );
}
