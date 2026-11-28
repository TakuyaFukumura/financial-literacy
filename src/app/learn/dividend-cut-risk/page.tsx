import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '減配リスク | お金の学び場',
    description: '減配や無配が起きる理由、高配当利回りだけで判断しないための確認ポイントを学びます。',
};

export default function DividendCutRiskPage() {
    return (
        <LearningTopicPage
            category="資産形成で知っておきたいリスク"
            title="減配リスク"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['株式', '配当', 'リスク']}
            introduction="株式の配当金は、企業の業績や財務状況、配当方針によって減ったり、支払われなくなったりすることがあります。過去の配当実績や高い利回りだけで、将来の配当を判断しないことが大切です。"
            sections={[
                {
                    heading: '減配・無配になると受取額が変わる',
                    body: '減配は1株あたりの配当金が減ること、無配は配当金が支払われないことです。配当は預貯金の利息のようにあらかじめ約束されたものではありません。企業は利益や資金の状況、事業への投資などを踏まえて配当を決めるため、安定して配当してきた企業でも方針が変わる場合があります。',
                },
                {
                    heading: '利益だけでなく配当を支える資金も見る',
                    body: '業績の悪化や利益の減少、資金繰りの悪化、借入金の負担、設備投資などは、配当を維持しにくくする要因になり得ます。利益のうち配当に回している割合を示す配当性向は参考指標の一つですが、業種や事業の状況によって見方が異なり、単独で減配を予測できるものではありません。利益やキャッシュフロー、借入金、配当方針をあわせて確認しましょう。',
                },
                {
                    heading: '高い配当利回りが続くとは限らない',
                    body: '配当利回りは、1株あたりの年間配当金を株価で割って計算します。配当金が変わらなくても、業績への懸念などで株価が下がると、計算上の利回りは高くなることがあります。その後に減配されれば、受取額が減るだけでなく、株価も変動する可能性があります。利回りの高さだけを見て「お得」と判断せず、株価や業績が変化した背景を調べましょう。',
                },
                {
                    heading: '配当だけでなく投資全体で考える',
                    body: '投資の成果は、受け取った配当金だけでなく、株価の変化や手数料、税金も含めて考えます。決算資料や会社の配当方針を確認し、配当が減った場合に家計や投資計画へどのような影響があるかも考えておきましょう。配当性向など一つの指標や過去の実績だけで、将来の配当を確実に予測することはできません。',
                },
            ]}
            relatedTopic={{href: '/learn/dividend-growth', title: '増配'}}
            references={[
                {
                    label: '野村證券「銘柄選びに役立つ2つの指標｜配当利回りと配当性向」',
                    href: 'https://www.nomura.co.jp/wealthstyle/article/0071/',
                },
                {
                    label: '日本取引所グループ「株主還元」',
                    href: 'https://www.jpx.co.jp/corporate/investor-relations/shareholders/basic-policy/index.html',
                },
            ]}
        />
    );
}
