import type {Metadata} from 'next';
import LearningTopicPage from '../LearningTopicPage';

export const metadata: Metadata = {
    title: 'iDeCoの基本 | お金の学び場',
    description: 'iDeCoの仕組みや税制上の特徴、引き出し制限と運用リスクを学びます。',
};

export default function IdecoPage() {
    return (
        <LearningTopicPage
            category="老後資金を準備する"
            title="iDeCo"
            tags={['制度', '老後資金', '税制', 'リスク']}
            introduction="iDeCo（個人型確定拠出年金）は、加入者が掛金を拠出し、自分で運用方法を選んで老後資金を準備する私的年金制度です。"
            sections={[
                {
                    heading: '掛金を積み立て、自分で運用する',
                    body: '掛金を定期的に拠出し、用意された預金や投資信託などの商品から運用方法を選びます。将来受け取る金額は運用結果などによって変わり、投資商品を選ぶ場合は元本割れの可能性があります。',
                },
                {
                    heading: '税制上の優遇がある',
                    body: '掛金は原則として所得控除の対象となり、運用中の利益は非課税です。受け取るときにも税制上の控除がありますが、適用条件や税額は受取方法や他の退職金などによって異なります。',
                },
                {
                    heading: '原則として途中で引き出せない',
                    body: 'iDeCoの資産は老後のためのもので、原則として60歳になるまで引き出せません。受取開始できる年齢は加入期間などによって変わる場合があります。近いうちに使う予定のあるお金とは分けて考えましょう。',
                },
                {
                    heading: '加入条件や手数料を確認する',
                    body: '加入できる人や掛金の上限は、職業や勤務先の企業年金制度などによって異なります。また、加入・運用には手数料がかかります。制度や上限は変更されることがあるため、利用前に公的機関や運営管理機関の最新情報を確認しましょう。',
                },
            ]}
            relatedTopic={{href: '/learn/nisa', title: 'NISA'}}
        />
    );
}
