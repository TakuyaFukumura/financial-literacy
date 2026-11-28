import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'ドル・コスト平均法の基本 | お金の学び場',
    description: '一定額を定期的に投資するドル・コスト平均法の仕組みと注意点を学びます。',
};

export default function DollarCostAveragingPage() {
    return (
        <LearningTopicPage
            category="資産形成の基本"
            title="ドル・コスト平均法"
            tags={['投資手法', '積立', '資産形成', 'リスク']}
            introduction="ドル・コスト平均法は、価格が変動する金融商品を、定期的に一定の金額ずつ購入していく方法です。"
            sections={[
                {
                    heading: '価格に応じて購入量が変わる',
                    body: '毎回同じ金額を投資するため、価格が低いときは多く、高いときは少ない数量を購入します。たとえば毎回1万円を投資すると、価格が1,000円なら10口、500円なら20口、2,000円なら5口を購入します。',
                },
                {
                    heading: '価格変動の影響をならす方法',
                    body: '購入時期を分けることで、一度にまとめて購入した場合と比べ、購入価格が一時点の相場に左右されにくくなります。ただし、平均購入価格が必ず下がるわけではなく、利益が出ることを保証する方法でもありません。',
                },
                {
                    heading: '相場が下がれば損失が出ることもある',
                    body: '価格が長く下がり続ければ、積み立てた資産の評価額が購入金額を下回ることがあります。投資対象そのものの価格変動リスクはなくならず、手数料なども運用成果に影響します。',
                },
                {
                    heading: '無理のない金額と期間を考える',
                    body: '投資を続けるには、生活費や近い将来に使うお金と分けて、家計に無理のない金額を設定することが大切です。購入頻度や手数料、投資対象の特徴も確認し、途中で続けられなくなる場合も考えておきましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/index-investing', title: 'インデックス投資'}}
        />
    );
}
