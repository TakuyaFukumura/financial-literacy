export default function DistributionFromPrincipalDiagram() {
    return (
        <figure
            aria-labelledby="distribution-from-principal-diagram-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2
                id="distribution-from-principal-diagram-heading"
                className="text-xl font-bold text-gray-900 dark:text-white"
            >
                分配金と保有資産全体の関係
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                市場変動・税金・費用を除いた、金額を単純化した例
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
                <section className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">
                    <h3 className="font-bold text-sky-950 dark:text-sky-100">運用益500円から分配する例</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">分配前の評価額：10,500円</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">分配金：500円</p>
                    <p className="mt-3 rounded-lg bg-white p-3 text-sm font-semibold leading-6 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        分配後：投資信託10,000円 + 現金500円 = 合計10,500円
                    </p>
                </section>

                <section className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
                    <h3 className="font-bold text-amber-950 dark:text-amber-100">運用益がないのに500円分配する例</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">分配前の評価額：10,000円</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">分配金：500円</p>
                    <p className="mt-3 rounded-lg bg-white p-3 text-sm font-semibold leading-6 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        分配後：投資信託9,500円 + 現金500円 = 合計10,000円
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                        運用益を超える分配が続くと、投資信託の元本相当が減る場合があります。
                    </p>
                </section>
            </div>

            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                分配金を受け取っただけでは保有資産全体が増えるわけではありません。実際の分配金の原資や基準価額の動きは、運用報告書などで確認しましょう。
            </figcaption>
        </figure>
    );
}
