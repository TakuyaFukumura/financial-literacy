export default function PonziSchemeDiagram() {
    return (
        <figure
            aria-labelledby="ponzi-scheme-diagram-heading"
            className="my-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
        >
            <h2 id="ponzi-scheme-diagram-heading" className="text-xl font-bold text-gray-900 dark:text-white">
                新しい出資金が「配当」に見える流れ
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                実際の運用益がない、または不足している場合の単純化した例
            </p>

            <ol className="mt-5 list-none space-y-3">
                <li>
                    <div
                        className="rounded-xl border border-sky-200 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-950/40">
                        <h3 className="font-bold text-sky-950 dark:text-sky-100">新たな出資者</h3>
                        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">投資として資金を預ける</p>
                    </div>
                    <p className="mt-2 text-center text-sm font-semibold text-amber-700 dark:text-amber-300">
                        ↓ 出資金が運営者に集まる
                    </p>
                </li>
                <li>
                    <div
                        className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">
                        <h3 className="font-bold text-amber-950 dark:text-amber-100">運営者</h3>
                        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">運用益がない、または支払いに足りない</p>
                    </div>
                    <p className="mt-2 text-center text-sm font-semibold text-amber-700 dark:text-amber-300">
                        ↓ 新しい出資金の一部を配当として支払う
                    </p>
                </li>
                <li className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
                    <h3 className="font-bold text-emerald-950 dark:text-emerald-100">先に出資した人</h3>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">利益が出ているように見える</p>
                </li>
            </ol>

            <p className="mt-4 rounded-lg bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100">
                新たな出資が減ると、配当や返金が滞り、仕組みを維持できなくなります。
            </p>
            <figcaption className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                これは資金の流れを単純化した例です。ねずみ講のような段階的な会員構造がなくても、ポンジスキームは成立する場合があります。
            </figcaption>
        </figure>
    );
}
