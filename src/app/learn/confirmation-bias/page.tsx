import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: '確証バイアスと投資判断 | お金の学び場',
    description: '確証バイアスが投資判断に与える影響と、反対の根拠を確かめる方法を学びます。',
};

export default function ConfirmationBiasPage() {
    return (
        <LearningTopicPage
            category="投資判断に影響する認知バイアス"
            title="確証バイアスと投資判断"
            tags={['資産形成', '投資手法', 'リスク']}
            introduction="確証バイアスとは、自分がすでに信じている考えを支持する情報を集めたり重視したりし、反対の情報を見落としやすくなる傾向です。投資では、保有したい商品に都合のよい材料ばかり見て、判断を見直す機会を逃すことがあります。"
            sections={[
                {
                    heading: '好材料ばかりを探してしまう',
                    body: 'たとえば、ある株を買ったあとに「値上がりするはず」と考えると、上昇予想の記事やSNS投稿には目が向きやすく、業績の悪化や競争環境の変化など、見通しに合わない情報を軽視してしまうことがあります。反対の材料を見ないままだと、最初の投資理由が変わっていても気づきにくくなります。',
                },
                {
                    heading: '一つの見方に偏らないための確認',
                    body: '投資する理由を具体的に書き出し、「どんな事実が分かったら、この見通しを見直すか」もあらかじめ考えておきましょう。公式資料や異なる立場の情報源を見比べ、反対の根拠があるかを意識して探すと、情報を選り好みしていないか確認しやすくなります。',
                },
                {
                    heading: '自分の判断を記録して振り返る',
                    body: '購入時に、判断の根拠や不確実な点、見直す条件を記録しておくと、後から結果に合わせて理由を書き換えることを防ぎやすくなります。記録は売買を自動的に決めるものではありません。新しい情報を踏まえ、投資目的や資産全体のリスクに照らして判断を見直すために使いましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/anchoring-bias', title: 'アンカリング'}}
            references={[
                {
                    label: 'CFA Institute “The Behavioral Biases of Individuals”',
                    href: 'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/the-behavioral-biases-of-individuals',
                },
            ]}
        />
    );
}
