import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'r＞gの基本 | お金の学び場',
    description: '資本収益率と経済成長率を比べる「r＞g」の考え方と注意点を学びます。',
};

export default function RGreaterThanGPage() {
    return (
        <LearningTopicPage
            category="経済の基礎"
            title="r＞g"
            tags={['経済', '資本', '格差']}
            introduction="「r＞g」は、資本収益率（r）が経済成長率（g）を上回る状態を表す式です。経済学者トマ・ピケティが、資本と所得の格差を考えるうえで示した概念として知られています。"
            sections={[
                {
                    heading: 'rとgが表すもの',
                    body: 'rは株式や不動産などの資本から得られる収益率、gは経済や所得の成長率を指します。どちらも、どの期間や指標を使うかによって値が異なります。比較するときは、物価上昇や税金、費用を含むかなど、前提をそろえる必要があります。',
                },
                {
                    heading: '格差との関係',
                    body: '資本収益率が経済成長率を上回る状態が長く続くと、資本を多く持つ人の資産が、経済全体や賃金の伸びより速く増え、資産格差が広がりやすくなる可能性がある、というのがこの考え方の要点です。',
                },
                {
                    heading: 'いつでも成り立つ法則ではない',
                    body: 'r＞gは、あらゆる国や時代で常に成り立つ決まりではありません。資産の種類や保有者によって収益は異なり、税制、相続、賃金、政策、景気なども格差の動きに影響します。この式だけから、将来の格差や個人の投資成果を断定することはできません。',
                },
                {
                    heading: '投資の利益を約束する式ではない',
                    body: '資本収益率は一定ではなく、投資には価格変動や元本割れのリスクがあります。経済成長率を上回る収益が誰にでも得られるわけではありません。rとgの具体的な数値を比べる際は、対象期間や計算方法、税金・費用の扱いを確認しましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/compound-interest', title: '複利'}}
        />
    );
}
