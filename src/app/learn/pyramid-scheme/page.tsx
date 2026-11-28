import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import PyramidSchemeDiagram from './PyramidSchemeDiagram';

export const metadata: Metadata = {
    title: 'ねずみ講（無限連鎖講）の仕組みと注意点 | お金の学び場',
    description: 'ねずみ講の仕組みや、MLM・ポンジスキームとの違い、勧誘を受けたときの対応を学びます。',
};

export default function PyramidSchemePage() {
    return (
        <LearningTopicPage
            category="投資トラブルを防ぐ"
            title="ねずみ講（無限連鎖講）"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['投資トラブル', 'リスク']}
            introduction="ねずみ講は、加入者が金品を出し、後から加わる人の金品から先に加わった人が出資額を上回る配当を受け取る仕組みです。無限に会員が増え続けることを前提とするため、続けることはできず、日本では無限連鎖講の防止に関する法律で開設・運営・加入・勧誘などが禁止されています。"
            sections={[
                {
                    heading: '後から入った人の出資が配当に回る',
                    body: '先に参加した人が利益を得るには、後から参加する人が次々と増え、その人たちが金品を出し続けなければなりません。参加者を無限に増やすことはできないため、組織は必ず行き詰まり、後から参加した多くの人が損失を負う仕組みです。',
                },
                {
                    heading: 'MLMやポンジスキームとの違い',
                    body: 'MLMと呼ばれる販売方式のうち、法律上の要件を満たすものは「連鎖販売取引」として特定商取引法の規制対象です。ねずみ講は、後から入った人の金品を先順位者へ配当する組織で、法律で禁止されています。ポンジスキームは、運用益があるように見せながら、新たな出資者の資金を既存の出資者への配当に回す投資詐欺の手口です。名称や「商品がある」という説明だけでは区別できないこともあるため、実際のお金の流れや契約内容を確認しましょう。',
                },
                {
                    heading: '勧誘を受けたときの対応',
                    body: '「人を紹介すれば元が取れる」「必ず配当が受け取れる」などと言われても、加入・送金・他の人への勧誘はせず、契約書や説明資料を持ち帰って確認しましょう。すでに支払いをしたり、勧誘に関わってしまったりした場合は、やり取りや振込記録を保存し、消費者ホットライン「188」や警察に相談してください。',
                },
            ]}
            relatedTopic={{href: '/learn/investment-mlm', title: '投資を装うマルチ商法（MLM）'}}
            references={[
                {
                    label: 'e-Gov法令検索「無限連鎖講の防止に関する法律」',
                    href: 'https://laws.e-gov.go.jp/law/353AC1000000101',
                },
                {
                    label: '消費者庁「連鎖販売取引」',
                    href: 'https://www.no-trouble.caa.go.jp/what/multilevelmarketing/',
                },
            ]}
        >
            <PyramidSchemeDiagram/>
        </LearningTopicPage>
    );
}
