import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import InvestmentMlmDiagram from './InvestmentMlmDiagram';

export const metadata: Metadata = {
    title: '投資を装うマルチ商法（MLM） | お金の学び場',
    description: '投資をうたう勧誘で、連鎖販売取引の仕組みや契約内容を確認するポイントを学びます。',
};

export default function InvestmentMlmPage() {
    return (
        <LearningTopicPage
            category="投資トラブルを防ぐ"
            title="投資を装うマルチ商法（MLM）"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['投資トラブル', 'リスク']}
            introduction="高い投資利益をうたって人を集めながら、実際には会員登録や商品購入、知人の紹介による報酬が中心となっている勧誘があります。MLM（連鎖販売取引）自体が直ちに違法というわけではありませんが、投資の実態と契約内容を分けて確かめることが大切です。"
            sections={[
                {
                    heading: 'MLMと投資の仕組みを分けて見る',
                    body: '連鎖販売取引では、商品やサービスの契約とあわせて、他の人を勧誘することで紹介料などを得られる仕組みがあります。投資をうたう場合は、何に資金を投じるのか、運用する事業者や資金の管理先はどこか、利益や紹介報酬がどこから支払われるのかを確認しましょう。新しい参加者のお金を既存の参加者への配当に回すポンジスキームとは、仕組みを区別して考える必要があります。',
                },
                {
                    heading: '勧誘で立ち止まりたいサイン',
                    body: '投資対象や運用実績の説明が曖昧なのに紹介報酬が強調される、利益や元本が保証されると言われる、参加費や商品購入のため借入れを勧められる、契約を急かされる、といった場合は慎重に確認しましょう。こうしたサインだけで違法・詐欺と決めつけることはできませんが、その場で契約や送金をせず、独立した情報源で確かめるきっかけになります。',
                },
                {
                    heading: '契約前に確認すること',
                    body: '事業者名、契約する商品・サービス、初期費用や継続費用、紹介報酬の条件、解約・返金の条件を書面で確認しましょう。金融商品への投資を勧められた場合は、商品や勧誘方法に応じた登録・届出が必要かを調べ、金融庁の情報も確認します。説明資料を持ち帰り、家族や信頼できる人に相談してから判断してください。',
                },
                {
                    heading: '契約・支払いをしてしまったら',
                    body: '追加の送金や、出金のための手数料・保証金の支払いを求められても、すぐには応じないでください。契約書、広告、メッセージ、振込記録を保存し、消費者ホットライン「188」などの消費生活相談窓口に早めに相談しましょう。連鎖販売取引に該当する契約では、条件を満たせば法定書面を受け取った日等から20日以内にクーリング・オフできる場合があります。',
                },
            ]}
            relatedTopic={{href: '/learn/ponzi-scheme', title: 'ポンジスキーム'}}
            references={[
                {
                    label: '消費者庁「連鎖販売取引」',
                    href: 'https://www.no-trouble.caa.go.jp/what/multilevelmarketing/',
                },
                {
                    label: '金融庁「無登録で金融商品取引業を行う者の名称等について」',
                    href: 'https://www.fsa.go.jp/ordinary/chuui/mutouroku.html',
                },
            ]}
        >
            <InvestmentMlmDiagram/>
        </LearningTopicPage>
    );
}
