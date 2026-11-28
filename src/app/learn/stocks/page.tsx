import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import StockOwnershipDiagram from './StockOwnershipDiagram';

export const metadata: Metadata = {
    title: '株式の基本 | お金の学び場',
    description: '株式が表す会社の持分や、株主の利益、価格変動リスクを図解で学びます。',
};

export default function StocksPage() {
    return (
        <LearningTopicPage
            category="投資商品の基礎"
            title="株式"
            tags={['投資商品', '株式', '配当', 'リスク']}
            introduction="株式は、株式会社が資金を集めるために発行する有価証券です。株式を持つ人は株主となり、会社の持分を持つことになります。"
            sections={[
                {
                    heading: '株式を持つと会社の株主になる',
                    body: '株主は会社の持分を持ち、株式の種類や会社の定款などに応じた権利を持ちます。たとえば、株主総会での議決権や、会社が決定した場合に配当を受け取る権利があります。株式には通常、債券のような満期や元本の返済はありません。',
                },
                {
                    heading: '利益が得られる場合と損失の可能性',
                    body: '株式投資の収益には、株価が上がったときに売却して得る値上がり益や、会社が実施する配当があります。株価は会社の業績や市場環境などによって変動し、購入価格を下回ることがあります。配当も必ず支払われるものではありません。',
                },
                {
                    heading: '発行と市場での売買は別',
                    body: '会社が新たに株式を発行して投資家が取得する取引では、会社が資金を調達します。一方、発行済みの株式を証券取引所などで投資家同士が売買する場合、売買代金は通常、株式を売った投資家に渡ります。市場での株価は需要と供給、会社の状況、景気などを受けて変動します。',
                },
                {
                    heading: '会社や市場に関するリスクを確認する',
                    body: '会社の業績悪化や倒産、市場全体の下落などで株式の価値が大きく下がることがあります。外国株式では為替変動や現地市場の制度も影響します。投資する場合は、会社や商品の情報、費用、値下がりした場合の影響を確認し、リスクを理解することが大切です。',
                },
            ]}
            relatedTopic={{href: '/learn/bonds', title: '債券'}}
        >
            <StockOwnershipDiagram/>
        </LearningTopicPage>
    );
}
