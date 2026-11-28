import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import InterestGrowthChart from '../InterestGrowthChart';

export const metadata: Metadata = {
    title: '単利の基本 | お金の学び場',
    description: '元本に対して利息が計算される単利の仕組みを学びます。',
};

export default function SimpleInterestPage() {
    return (
        <LearningTopicPage
            category="資産形成の基本"
            title="単利"
            tags={['資産形成', '基礎知識', '金利']}
            introduction="単利とは、最初に預けたり運用したりした元本だけをもとに、利息を計算する方法です。"
            sections={[
                {
                    heading: '利息の計算方法',
                    body: '利息は「元本 × 年利 × 期間（年）」で計算できます。たとえば元本10万円を年利5%で5年間運用する場合、利息は10万円 × 0.05 × 5年で2万5,000円、元本と利息の合計は12万5,000円です（税金や手数料を考慮しない場合）。',
                },
                {
                    heading: '利率や期間の条件を確認しよう',
                    body: 'ここでの計算例は、年利が一定で途中の入出金がない場合の単純な例です。金融商品によって利率、適用期間、税金、手数料などが異なり、受取額が変わることがあります。',
                },
            ]}
            relatedTopic={{href: '/learn/compound-interest', title: '複利'}}
        >
            <InterestGrowthChart/>
        </LearningTopicPage>
    );
}
