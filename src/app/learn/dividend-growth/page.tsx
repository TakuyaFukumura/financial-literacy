import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '増配の基本 | お金の学び場',
    description: '増配の意味や配当利回りとの違い、配当の持続性を確認する視点を学びます。',
};

export default function DividendGrowthPage() {
    return (
        <LearningTopicPage
            category="株式投資の基礎"
            title="増配"
            tags={['株式', '配当', '企業分析', 'リスク']}
            introduction="増配とは、企業が株主に支払う1株あたりの配当金を増やすことです。過去に増配していても、将来の配当が約束されているわけではありません。"
            sections={[
                {
                    heading: '増配と配当利回りは別の指標',
                    body: '配当利回りは、1株あたりの年間配当金を株価で割って求めます。配当金が変わらなくても株価が動けば利回りは変わり、増配しても株価の変化によって利回りが下がることがあります。',
                },
                {
                    heading: '増配が続くとは限らない',
                    body: '企業の利益や資金繰り、事業方針によって配当金は減ったり、支払われなくなったりすることがあります。過去の増配実績だけを見て、今後も同じように続くと判断しないことが大切です。',
                },
                {
                    heading: '配当を支える業績や資金を確認する',
                    body: '決算資料や株主向け資料で、利益やキャッシュフロー、配当性向、借入金、今後の投資計画などを確認しましょう。利益に対して配当が過度に大きくないか、配当方針とあわせて見ることが参考になります。',
                },
                {
                    heading: '配当だけでなく投資全体の成果を見る',
                    body: '投資の成果は、受け取った配当金だけでなく株価の変化や手数料、税金も含めて考えます。配当の多さや増配年数だけで投資判断をせず、企業の事業内容やリスクも確認しましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/distribution-from-principal', title: 'タコ足配当'}}
        />
    );
}
