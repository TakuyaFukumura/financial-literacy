import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import InterestRateDiagram from './InterestRateDiagram';

export const metadata: Metadata = {
    title: '金利の基本 | お金の学び場',
    description: '金利と利息の違いや、借りる側・預ける側への影響を図解で学びます。',
};

export default function InterestRatePage() {
    return (
        <LearningTopicPage
            category="経済の基礎"
            title="金利"
            tags={['経済', '金利', '預金', 'ローン']}
            introduction="金利は、お金を借りたり預けたりするときに、元本に対して支払う、または受け取る利息の割合です。通常は「年利○％」のように、期間と合わせて表します。"
            sections={[
                {
                    heading: '金利と利息は別のもの',
                    body: '金利は元本に対する割合、利息はその割合をもとに計算される金額です。たとえば元本100万円を年利1%で1年間預ける単利の例では、税金や手数料を考慮しない場合の利息は1万円です。図の金額は仕組みを説明するための例です。',
                },
                {
                    heading: '借りる側と預ける側で意味が変わる',
                    body: 'お金を借りる側にとって利息は借入れのコストで、金利が高いほど返済負担が大きくなる場合があります。預ける側にとっては利息が受け取る収益になりますが、実際の受取額は商品や期間、税金などによって異なります。',
                },
                {
                    heading: '金利が変わると家計にも影響する',
                    body: '住宅ローンなどの借入金利や預金金利は、固定か変動か、契約内容や金融機関などによって異なります。中央銀行の政策金利の変更が市場金利に影響し、預金や貸出金利に波及することがありますが、影響の時期や程度は一律ではありません。',
                },
                {
                    heading: '物価の変化もあわせて考える',
                    body: '名目金利は表示される金利で、実質金利は物価上昇の影響を考慮した金利の目安です。簡単には「名目金利−インフレ率」で表されます。預金金利が上がっても、物価の上昇率がそれを上回れば、実質的な購買力が増えるとは限りません。',
                },
                {
                    heading: '契約条件を確認しよう',
                    body: '金利を比べるときは、年利などの期間、固定金利か変動金利か、利息の計算方法、手数料や税金を確認しましょう。借入れでは金利だけでなく返済期間や毎月の返済額も含めて、無理のない計画か検討することが大切です。',
                },
            ]}
            relatedTopic={{href: '/learn/inflation', title: 'インフレ'}}
        >
            <InterestRateDiagram/>
        </LearningTopicPage>
    );
}
