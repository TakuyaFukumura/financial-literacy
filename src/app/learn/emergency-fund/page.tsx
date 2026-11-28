import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '生活防衛資金 | お金の学び場',
    description: '急な収入減や支出に備える生活防衛資金の目安や、準備・管理の方法を学びます。',
};

export default function EmergencyFundPage() {
    return (
        <LearningTopicPage
            category="資産形成の基本"
            title="生活防衛資金"
            tags={['資産形成', '預金', '初心者']}
            introduction="生活防衛資金は、失業や病気、災害などで収入が減ったり、急な支出が生じたりしたときに、生活を支えるためのお金です。投資に回す資金や、旅行・住宅購入など予定している支出とは分けて考えます。"
            sections={[
                {
                    heading: 'いくら必要かは状況によって変わる',
                    body: '日本FP協会は、緊急資金の目安として生活費の3か月分から1年分を示しています。たとえば1か月の生活費が20万円なら、60万〜240万円が計算上の目安です。ただし、必要な期間や金額は一律ではありません。収入の安定性、家族構成、再就職までにかかる時間、利用できる公的給付や保険などを踏まえて考えましょう。',
                },
                {
                    heading: '自分の目標額を計算する',
                    body: 'まず、住居費、食費、光熱費、通信費など、収入が減ったときにも必要になる月々の支出を見積もります。その金額に、備えたい月数を掛けると目標額の目安が出ます。例として、最低限の生活費が月18万円で6か月分を備えるなら、18万円×6か月＝108万円です。家計や働き方が変わったときは、目標額も見直しましょう。',
                },
                {
                    heading: 'すぐ使える形で、投資資金と分けておく',
                    body: '急なときに必要なお金なので、値下がりする可能性のある株式や投資信託に置くと、必要な時期に資産価値が下がっているおそれがあります。すぐに引き出せる預貯金など、値動きが小さく換金しやすい形で確保し、日常の支出や投資資金と分けて管理する方法があります。',
                },
                {
                    heading: '無理のないペースで準備する',
                    body: '目標額を一度に用意できなくても、毎月の収支から無理のない金額を決め、別口座への自動振替などで少しずつ積み立てられます。まずは家計を把握して、急な出費に対応できる手元資金を作り、収入や家族構成などに合わせて段階的に増やしていきましょう。生活防衛資金を確保することで、急な出費のたびに借入や投資資産の売却に頼るリスクを抑えやすくなります。',
                },
            ]}
            relatedTopic={{href: '/learn/long-term-installment-diversified', title: '長期・積立・分散投資'}}
            references={[
                {
                    label: '日本FP協会「主なライフイベントにかかる費用の目安」',
                    href: 'https://www.jafp.or.jp/know/lifeplan/indication/',
                },
            ]}
            roadmapHref="/asset-building-roadmap"
            roadmapProgress={{
                step: 6,
                totalSteps: 8,
                nextHref: '/learn/long-term-installment-diversified',
                nextTitle: '投資の基礎：長期・積立・分散',
            }}
        />
    );
}
