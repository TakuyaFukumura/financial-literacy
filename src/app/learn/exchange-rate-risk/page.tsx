import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '為替リスクの基本 | お金の学び場',
    description: '為替変動が外貨建て資産の円換算額に与える影響と、確認したいポイントを学びます。',
};

export default function ExchangeRateRiskPage() {
    return (
        <LearningTopicPage
            category="資産形成で知っておきたいリスク"
            title="為替リスク"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['為替', '投資商品', 'リスク']}
            introduction="外貨建て預金や海外の株式・投資信託などは、現地通貨での価格だけでなく、為替レートの変化によって円で見た価値が変わります。この影響を為替リスクといいます。"
            sections={[
                {
                    heading: '円換算の価値は為替レートで変わる',
                    body: '外貨建て資産の価格が現地通貨で変わらなくても、円高になれば円に換算した評価額は下がり、円安になれば上がることがあります。実際の損益には、現地通貨での価格変動や、購入・換金時の手数料なども影響します。',
                },
                {
                    heading: '資産の値動きと為替の影響を合わせて見る',
                    body: '外貨建て資産の円での成果は、投資先そのものの価格変化と為替レートの両方で決まります。現地通貨で値上がりしていても、円高の影響で円換算の成果が小さくなる場合があり、その逆もあります。',
                },
                {
                    heading: '為替ヘッジにもコストや変動がある',
                    body: '為替ヘッジを行う商品は、為替変動の影響を抑えることを目指しますが、影響を完全になくすものではありません。金利差などを反映したヘッジコストがかかる場合があり、その水準も変動します。ヘッジの有無や方針は商品ごとの資料で確認しましょう。',
                },
                {
                    heading: '為替の先行きを決めつけない',
                    body: '為替レートは金利、経済状況、政策、国際情勢など多くの要因で動きます。短期的な方向を確実に予測することはできないため、外貨建て資産を検討するときは、値動きや費用、資金を使う時期も含めて理解することが大切です。',
                },
            ]}
            relatedTopic={{href: '/learn/exchange-rate', title: '為替の基本'}}
            relatedTopicLabel="基礎を読む"
        />
    );
}
