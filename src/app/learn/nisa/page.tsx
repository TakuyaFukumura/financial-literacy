import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';
import NisaQuotaDiagram from './NisaQuotaDiagram';

export const metadata: Metadata = {
    title: 'NISAの基本 | お金の学び場',
    description: '投資の利益が非課税になるNISA制度の基本を学びます。',
};

export default function NisaPage() {
    return (
        <LearningTopicPage
            category="制度を知る"
            title="NISA"
            tags={['初心者', '制度', '税制', '資産形成', 'リスク']}
            introduction="NISAは、NISA口座で得た対象の投資利益が非課税になる制度です。"
            sections={[
                {
                    heading: '投資の利益が非課税に',
                    body: '通常、投資で得た利益には税金がかかります。NISA口座では対象となる利益が非課税になりますが、投資した金額が保証される制度ではありません。',
                },
                {
                    heading: '2つの投資枠を併用できる',
                    body: 'つみたて投資枠は、長期・積立・分散投資に適した一定の投資信託などが対象です。成長投資枠は、上場株式や一定の投資信託などが対象で、選べる商品が異なります。2つの枠は同じNISA口座で併用できます。',
                },
                {
                    heading: '年間投資枠と生涯の上限',
                    body: '年間投資枠は、つみたて投資枠が120万円、成長投資枠が240万円で、合計360万円です。生涯の非課税保有限度額は合計1,800万円（取得金額ベース）で、そのうち成長投資枠は1,200万円までです。商品を売却した場合、取得金額分の枠は翌年以降に再利用できます。',
                },
                {
                    heading: '始める前に確認しよう',
                    body: '投資には価格変動などのリスクがあります。2つの枠を上限まで使う必要はありません。対象商品や制度の条件は変更されることがあるため、金融庁などの公的機関で最新情報を確認し、自分の目的や家計に合うか考えましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/compound-interest', title: '複利'}}
            relatedTopicLabel="関連記事"
            references={[
                {
                    label: '金融庁「NISAを知る」',
                    href: 'https://www.fsa.go.jp/policy/nisa2/know/index.html',
                },
            ]}
            contentReviewedOn="2026年11月28日"
            roadmapHref="/asset-building-roadmap"
            roadmapProgress={{
                step: 2,
                nextHref: '/learn/index-investing',
                nextTitle: '投資信託とインデックス投資を知る',
            }}
        >
            <NisaQuotaDiagram/>
        </LearningTopicPage>
    );
}
