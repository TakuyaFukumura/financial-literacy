import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import BondCashFlowDiagram from './BondCashFlowDiagram';

export const metadata: Metadata = {
    title: '債券の基本 | お金の学び場',
    description: '債券の仕組みや利息、満期、価格変動と主なリスクを図解で学びます。',
};

export default function BondsPage() {
    return (
        <LearningTopicPage
            category="投資商品の基礎"
            title="債券"
            tags={['投資商品', '債券', '金利', 'リスク']}
            introduction="債券は、国や企業などが投資家から資金を借りるために発行する有価証券です。債券を買うことは発行体にお金を貸すことにあたり、条件に応じて利息を受け取り、満期には額面金額の返済を受ける仕組みです。"
            sections={[
                {
                    heading: '利息と満期の仕組み',
                    body: '債券には、額面金額、利率、利息の支払時期、満期などの条件があります。固定利付債の例では、保有中に定期的な利息を受け取り、満期に額面金額の返済を受けます。ただし、発行体が返済できなくなると、利息や元本が支払われない場合があります。',
                },
                {
                    heading: '発行後の価格は変動する',
                    body: '満期前に市場で売買される債券の価格は、金利や発行体の信用状況などによって変わります。一般に、他の条件が同じなら市場金利が上がると既に発行された債券の価格は下がりやすく、市場金利が下がると上がりやすい傾向があります。満期前に売却すると、購入価格を下回ることもあります。',
                },
                {
                    heading: '発行体や通貨などのリスクを知る',
                    body: '主なリスクには、発行体が返済できなくなる信用リスク、金利変動による価格変動リスクがあります。外貨建て債券では為替変動も影響し、流通量が少ない債券は希望する価格や時期に売れないことがあります。債券の種類や条件によってリスクは異なります。',
                },
                {
                    heading: '購入前に条件を確認する',
                    body: '利率だけでなく、発行体、満期、購入価格、利息の支払条件、途中で売る場合の価格変動、手数料や税金を確認しましょう。債券でも元本や利息が必ず支払われるとは限らず、仕組みやリスクを理解して検討することが大切です。',
                },
            ]}
            relatedTopic={{href: '/learn/interest-rate', title: '金利'}}
        >
            <BondCashFlowDiagram/>
        </LearningTopicPage>
    );
}
