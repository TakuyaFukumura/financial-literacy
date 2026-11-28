import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'NISAの基本 | お金の学び場',
    description: '投資の利益が非課税になるNISA制度の基本を学びます。',
};

export default function NisaPage() {
    return (
        <LearningTopicPage
            category="制度を知る"
            title="NISA"
            introduction="NISAは、NISA口座で得た対象の投資利益が非課税になる制度です。"
            sections={[
                {
                    heading: '投資の利益が非課税に',
                    body: '通常、投資で得た利益には税金がかかります。NISA口座では対象となる利益が非課税になりますが、投資した金額が保証される制度ではありません。',
                },
                {
                    heading: '始める前に確認しよう',
                    body: '投資には価格変動などのリスクがあります。制度の対象や最新の利用条件を確認し、自分の目的や家計に合うか考えることが大切です。',
                },
            ]}
            relatedTopic={{href: '/learn/compound-interest', title: '複利'}}
        />
    );
}
