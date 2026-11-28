import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '投資を考える前の家計整理 | お金の学び場',
    description: '家計の収支、固定費、高金利負債を確認し、投資を考える前に家計を整理する方法を学びます。',
};

export default function PreInvestmentHouseholdPage() {
    return (
        <LearningTopicPage
            category="資産形成の基本"
            title="投資を考える前の家計整理"
            tags={['初心者', '資産形成', '家計管理', 'ローン']}
            introduction="投資を考える前に、まず家計の現状を把握し、収支や負債を確認してみましょう。ここで紹介するのは確認の観点で、特定の節約額・返済方法・投資額を指示するものではありません。家計の情報を入力・保存する必要もありません。"
            sections={[
                {
                    id: 'household-status',
                    heading: '手取り収入と毎月の支出を書き出す',
                    body: '給与明細などで手取り収入を確認し、銀行口座やカードの明細などを使って、住居費、光熱費、通信費、食費、保険料、返済額など毎月の支出を整理します。年払いの費用や不定期な出費も別に書き出しておくと、毎月の収支だけでは見えにくい支出を把握できます。収入と支出を比べることは、家計を理解するための一歩です。残ったお金をすべて投資に回す必要はありません。',
                },
                {
                    id: 'fixed-costs',
                    heading: '固定費などの契約と利用状況を見直す',
                    body: '住居費、通信費、保険料、サブスクリプションなど、定期的に支払っている費用について、実際の利用状況や契約内容を確認します。見直す場合は、必要な保障やサービスが失われないか、契約期間や解約料などの条件も確認しましょう。すべての費用を減らすことが目的ではありません。無理のない範囲で、現在の暮らしに合っているかを考えます。',
                },
                {
                    id: 'debts',
                    heading: '高金利負債の残高・金利・返済条件を確認する',
                    body: 'カードローンやリボ払いなどの借入れがある場合は、残高、金利、毎月の返済額、手数料、返済日などを契約書や利用明細で確認します。返済額と残高の変化を把握し、返済が難しい、または条件がよく分からない場合は、借入先や公的な相談窓口に早めに相談してください。投資を始める前にすべての負債を完済すべきとは限りません。個別の返済方法を一律に決めつけず、必要に応じて専門の相談先を利用しましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/emergency-fund', title: '生活防衛資金'}}
            roadmapHref="/asset-building-roadmap"
            roadmapProgress={{
                step: 5,
                totalSteps: 8,
                nextHref: '/asset-building-roadmap#step-6',
                nextTitle: '生活防衛資金の考え方を知る',
            }}
            references={[
                {
                    label: 'J-FLEC「お金のキホン（家計管理編など）」',
                    href: 'https://www.j-flec.go.jp/materials/series-okane-kihon-active/',
                },
                {
                    label: '金融庁「多重債務者対策・貸金業法等について」',
                    href: 'https://www.fsa.go.jp/policy/kashikin/index.html',
                },
                {
                    label: '消費者庁「消費者ホットライン」',
                    href: 'https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/',
                },
            ]}
            contentReviewedOn="2026年11月28日"
        />
    );
}
