import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import PonziSchemeDiagram from './PonziSchemeDiagram';

export const metadata: Metadata = {
    title: 'ポンジスキームの仕組みと対策 | お金の学び場',
    description: 'ポンジスキームの仕組みや注意したいサイン、勧誘を受けたときの対応を学びます。',
};

export default function PonziSchemePage() {
    return (
        <LearningTopicPage
            category="投資トラブルを防ぐ"
            title="ポンジスキーム"
            tags={['投資トラブル', '詐欺', 'リスク']}
            introduction="ポンジスキームは、運用益がほとんどない、または実態がないのに、新たな出資者から集めた資金を既存の出資者への配当に充て、利益が出ているように見せる詐欺の手口です。"
            sections={[
                {
                    heading: '新たな出資が止まると続かない',
                    body: '集めた資金を実際の運用で増やすのではなく、後から参加した人のお金を先に参加した人への配当や返金に回します。新しい出資が減ると支払いが滞り、最終的に破綻する可能性が高くなります。',
                },
                {
                    heading: '勧誘で注意したいサイン',
                    body: '「元本保証で高利回り」「損をしない」などの断定、運用方法や資金の管理先がはっきりしない説明、急いで出資を求める勧誘には注意が必要です。紹介への報酬が強調される場合も、仕組みを慎重に確認しましょう。一つのサインだけで詐欺と決めつけず、事業者や商品の情報を独立して調べることが大切です。',
                },
                {
                    heading: '勧誘を受けたときの対応',
                    body: 'その場で送金や契約をせず、事業者の登録状況や説明資料を公的な情報と照らして確認しましょう。出金のために追加の手数料や保証金を求められても、すぐに支払わないでください。すでに送金した場合は、契約書やメッセージ、振込記録を保存し、金融機関や消費生活相談窓口、警察などに早めに相談してください。',
                },
            ]}
            relatedTopic={{href: '/learn/distribution-from-principal', title: 'タコ足配当'}}
        >
            <PonziSchemeDiagram/>
        </LearningTopicPage>
    );
}
