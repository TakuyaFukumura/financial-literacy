import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '価格変動リスク | お金の学び場',
    description: '価格変動で資産評価額が変わる仕組みを、リーマン・ショック時の日経平均を例に学びます。',
};

export default function PriceVolatilityRiskPage() {
    return (
        <LearningTopicPage
            category="資産形成で知っておきたいリスク"
            title="価格変動リスク"
            tags={['投資商品', 'リスク']}
            introduction="株式や投資信託などの価格は、企業の業績や景気、金利、市場心理などの影響で変動します。購入時より価格が下がれば資産評価額も下がり、売却時に損失が確定することがあります。"
            sections={[
                {
                    heading: 'リーマン・ショック時の日経平均',
                    body: '2008年9月のリーマン・ブラザーズ破綻を含む世界金融危機の時期、日経平均は2007年7月の高値約18,300円から、2009年3月10日の終値7,054.98円まで下落しました。下落率は約61%です。これはリーマン・ブラザーズの破綻だけで起きたものではなく、金融危機や景気悪化などが重なった期間の値動きです。',
                },
                {
                    heading: '100万円を投資していた場合の単純な例',
                    body: '日経平均と同じ割合で値動きするものに100万円を投資していたと仮定すると、約61%の下落後の評価額は約39万円、評価損は約61万円です。指数に連動する実際の商品では、分配金、手数料、連動誤差などによって結果は異なります。この計算は値下がりの影響を示すための単純化した例です。',
                },
                {
                    heading: '過去の回復が将来を保証するわけではない',
                    body: '価格が下がった後に回復するか、いつ回復するかは事前にはわかりません。長期・積立・分散はリスクを抑える考え方の一つですが、損失をなくしたり、特定の期間内の回復を保証したりするものではありません。生活に必要な資金と投資資金を分け、価格が大きく動いた場合にも無理なく保有できるかを考えましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/exchange-rate-risk', title: '為替リスク'}}
            references={[
                {
                    label: '日経平均「2000年代：911テロとリーマン・ショック」',
                    href: 'https://indexes.nikkei.co.jp/atoz/2016/06/2000s.html',
                },
                {
                    label: '日本銀行「金融市場レポート（2008年下期の動き）」',
                    href: 'https://www.boj.or.jp/research/brp/fmr/mkr0901a.htm',
                },
            ]}
        />
    );
}
