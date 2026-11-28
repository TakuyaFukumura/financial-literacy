import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '投資判断に影響する認知バイアス | お金の学び場',
    description: '確証バイアスやアンカリングなど、投資判断に影響する認知バイアスと対策を学びます。',
};

export default function InvestmentBiasesPage() {
    return (
        <LearningTopicPage
            category="資産形成で知っておきたいリスク"
            title="投資判断に影響する認知バイアス"
            tags={['資産形成', '投資手法', 'リスク', '初心者']}
            introduction="認知バイアスとは、情報を受け取ったり判断したりするときに生じる、偏りやすい考え方のことです。投資では誰にでも起こり得ます。自分の判断が常に合理的だと思い込まず、どんなときに偏りやすいかを知って、確認の手順を持つことが役立ちます。"
            sections={[
                {
                    heading: '確証バイアス：自分の考えに合う情報ばかり集める',
                    body: '確証バイアスは、すでに持っている考えを支持する情報を重視し、反対の情報を見落としやすくなる傾向です。たとえば、買った株が値上がりすると信じていると、好材料の記事ばかり読み、業績悪化や投資判断を見直す情報を軽視してしまうことがあります。投資理由を書き出し、その見通しが外れるとしたら何が起こるか、反対の根拠やリスクも確認しましょう。',
                },
                {
                    heading: 'アンカリング：買値や過去の高値に引きずられる',
                    body: 'アンカリングは、最初に知った数字などが基準として残り、その後の判断に影響する傾向です。買値や過去の最高値を「本来の価値」と考え、現在の状況が変わっていても、その価格に戻るまで売れないと思うことがあります。過去の価格だけにこだわらず、今の企業や商品の状況、将来の見通し、自分の投資目的をあらためて確認しましょう。',
                },
                {
                    heading: '損失回避：損を確定したくなくて判断を先送りする',
                    body: '損失回避は、同じ金額なら利益を得る喜びより損失の痛みを強く感じやすい傾向です。値下がりした投資の損失を確定したくないために、「買値に戻るまで」と保有し続け、状況の変化を踏まえた見直しを先送りすることがあります。買値に戻るかどうかだけで判断せず、投資した理由や保有期間、資産全体のバランスを見直す基準を、落ち着いているときに決めておきましょう。',
                },
                {
                    heading: '周囲につられる：人気や話題性を根拠に買ってしまう',
                    body: '周囲の人が買っている、SNSで話題になっているといった理由だけで投資すると、自分が商品の仕組みや損失の可能性を理解しないまま判断してしまうことがあります。人気があることは、将来の値上がりや自分に合った投資であることの証明にはなりません。情報源や利益相反の有無を確かめ、自分の目的やリスク許容度に合うかを検討しましょう。',
                },
                {
                    heading: '判断の偏りに気づくための工夫',
                    body: 'バイアスを完全になくすことは難しいため、判断を急がず、複数の独立した情報源を確認し、投資する理由と見直す条件を記録しておく方法があります。大きな金額を動かすときは一晩おいて考える、定期的に当初の前提と現在の状況を比べるなど、自分なりの確認手順を決めましょう。特定のルールがすべての人や商品に適するわけではないため、損失を避けられると考えず、商品ごとのリスクも確認してください。',
                },
            ]}
            relatedTopic={{href: '/learn/price-volatility-risk', title: '価格変動リスク'}}
            references={[
                {
                    label: 'CFA Institute “The Behavioral Biases of Individuals”',
                    href: 'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/the-behavioral-biases-of-individuals',
                },
                {
                    label: 'U.S. Securities and Exchange Commission, Investor.gov “Investor Bulletin: Behavioral Patterns of U.S. Investors”',
                    href: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-72',
                },
            ]}
        />
    );
}
