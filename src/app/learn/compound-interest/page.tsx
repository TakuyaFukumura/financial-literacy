import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '複利の基本 | お金の学び場',
    description: '利息が利息を生む複利の仕組みを基礎から学びます。',
};

export default function CompoundInterestPage() {
    return (
        <LearningTopicPage
            category="資産形成の基本"
            title="複利"
            introduction="複利とは、元本だけでなく、これまでに得た利息にも利息がつく仕組みです。"
            sections={[
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
        />
    );
}
