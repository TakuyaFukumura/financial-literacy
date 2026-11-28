import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '現状維持バイアスと投資判断 | お金の学び場',
    description: '変更への不安や手間から今の状態を続けてしまう現状維持バイアスと、投資での見直し方を学びます。',
};

export default function StatusQuoBiasPage() {
    return (
        <LearningTopicPage
            category="投資判断に影響する認知バイアス"
            title="現状維持バイアスと投資判断"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['資産形成', '投資手法', 'リスク']}
            introduction="現状維持バイアスとは、変更に伴う手間や不安を避け、今の状態や初期設定を続ける選択をしやすくなる傾向です。投資では、商品や資産配分を見直す必要があっても、慣れた状態をそのまま続けてしまうことがあります。"
            sections={[
                {
                    heading: '変える理由を考えるのが負担に感じる',
                    body: '選択肢を調べ直したり、手続きしたりする手間や、変更後に後悔する不安から、今のままにしておくことがあります。たとえば、手数料や運用方針をよく確認せずに同じ商品を持ち続けたり、資産配分を長期間見直さなかったりするケースです。何もしない選択にも、費用やリスクが続く場合があります。',
                },
                {
                    heading: '長く保有すること自体がバイアスとは限らない',
                    body: '長期保有や定期的な積立は、投資目的や商品、リスク許容度に合った方針として選ぶこともできます。現状維持バイアスを避けるために、頻繁に売買したり、必ず商品を変更したりする必要はありません。大切なのは、今の方針を続ける理由があり、費用やリスクも理解しているかを確認することです。',
                },
                {
                    heading: '今の選択と変更する選択を比べる',
                    body: '見直すときは、変更する場合だけでなく、現状を続ける場合の費用、リスク、期待できる結果も比べましょう。商品を変えることで発生する手数料や税金など、変更に伴う費用も確認します。「今日初めて投資を考えるとしても、今と同じ商品や配分を選ぶだろうか」と問い直すと、慣れだけで続けていないかを考える助けになります。',
                },
                {
                    heading: '見直しの機会をあらかじめ決める',
                    body: '投資目的や家計、資産全体の配分に変化があったときなど、どんな場合に見直すかを事前に決めておく方法があります。定期的に確認する機会をつくり、当初の目的やリスク許容度と現在の状態を比べましょう。確認した結果、今の方針を続けると決めることも一つの判断です。特定の見直し頻度や方法がすべての人に適するわけではありません。',
                },
            ]}
            relatedTopic={{href: '/learn/sunk-cost-effect', title: 'サンクコスト効果'}}
            references={[
                {
                    label: 'CFA Institute “The Behavioral Biases of Individuals”',
                    href: 'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/the-behavioral-biases-of-individuals',
                },
            ]}
        />
    );
}
