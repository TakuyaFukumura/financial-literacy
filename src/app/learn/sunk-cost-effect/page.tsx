import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'サンクコスト効果と投資判断 | お金の学び場',
    description: '過去に使ったお金や時間に判断を引きずられるサンクコスト効果と、投資での向き合い方を学びます。',
};

export default function SunkCostEffectPage() {
    return (
        <LearningTopicPage
            category="投資判断に影響する認知バイアス"
            title="サンクコスト効果と投資判断"
            backHref="/risks-and-pitfalls"
            backLabel="リスクと落とし穴へ戻る"
            tags={['資産形成', '投資手法', 'リスク']}
            introduction="サンクコスト（埋没費用）は、すでに支払い、今後の選択によっても回収できないお金や時間、労力です。それを惜しんで、これからの費用や見込める成果を十分に比べないまま続けてしまう傾向を、サンクコスト効果と呼びます。"
            sections={[
                {
                    heading: '過去の損失を取り返そうとして追加投資する',
                    body: 'たとえば、買った株が値下がりしたときに「ここまで損をしたのだから、追加で買って取り返そう」と考えることがあります。しかし、すでに支払った購入代金は、保有を続けるか売却するかにかかわらず戻ってきません。追加購入が妥当かどうかは、過去にいくら払ったかだけではなく、現在の情報、これからの見込みやリスク、他の選択肢と比べて判断します。',
                },
                {
                    heading: '追加投資や保有継続が必ず誤りとは限らない',
                    body: 'サンクコスト効果を避けることは、値下がりした資産を必ず売ることではありません。新しい情報を調べたうえで、今後の見込みやリスクが自分の投資目的に合うなら保有を続ける選択もあります。反対に、「すでに多くのお金を使ったから」という理由だけで続けるなら、判断を見直すきっかけになります。',
                },
                {
                    heading: '損失回避やアンカリングとの違い',
                    body: '損失回避は、損を確定する痛みを避けたい気持ちが判断に影響する傾向です。アンカリングは、買値や過去の価格などが基準として残り、判断を引きずる傾向です。サンクコスト効果は、すでに投じたお金や時間、労力を惜しみ、それを理由に追加の費用や時間をかけてしまう点に注目します。実際の判断では、これらが重なって起こることもあります。',
                },
                {
                    heading: 'これからの選択肢を比べる',
                    body: '迷ったときは、「まだ何も投資していなかったとしても、今この資産を同じ条件で買うだろうか」と自分に問いかけてみましょう。過去に支払った金額ではなく、今後必要となる費用、見込める成果、損失の可能性、別の選択肢に資金を使う場合の効果を比べます。税金や売却費用など、選択によって今後発生する費用は過去のサンクコストとは別に考慮してください。',
                },
            ]}
            relatedTopic={{href: '/learn/loss-aversion', title: '損失回避'}}
            references={[
                {
                    label: 'BehavioralEconomics.com “Sunk Cost Fallacy”',
                    href: 'https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/sunk-cost-fallacy/',
                },
                {
                    label: 'Charles Schwab “What Is the Sunk Cost Fallacy and How Does It Work?”',
                    href: 'https://www.schwab.com/learn/story/dont-look-back-how-to-avoid-sunk-cost-fallacy',
                },
            ]}
        />
    );
}
