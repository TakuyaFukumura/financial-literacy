import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import InterestGrowthChart from '../InterestGrowthChart';

export const metadata: Metadata = {
    title: '複利の基本 | お金の学び場',
    description: '利息が利息を生む複利の仕組みを基礎から学びます。',
};

export default function CompoundInterestPage() {
    return (
        <LearningTopicPage
            category="資産形成の基本"
            title="複利"
            tags={['資産形成', '複利', 'リスク']}
            introduction="複利とは、元本だけでなく、これまでに得た利息にも利息がつく仕組みです。"
            sections={[
                {
                    heading: '単利との違い',
                    body: '単利は元本だけをもとに利息を計算しますが、複利では得た利息を元本に加えて次の利息を計算します。元本100万円、年利5%で40年間運用する例では、税金や手数料を考慮しない場合、単利の残高は300万円、複利では約704万円になります。',
                },
                {
                    heading: '時間を味方につける仕組み',
                    body: '運用で得た利益を元本に加えて運用を続けると、その後は元本と利益の両方が運用の対象になります。期間が長くなるほど、複利の影響が大きくなることがあります。',
                },
                {
                    heading: '利益が保証されるわけではない',
                    body: '複利は利益を約束する仕組みではありません。投資では元本割れの可能性があり、手数料や税金も結果に影響します。仕組みを理解したうえで、商品ごとのリスクを確認しましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/nisa', title: 'NISA'}}
        >
            <InterestGrowthChart compareWithCompound principal={1_000_000}/>
        </LearningTopicPage>
    );
}
