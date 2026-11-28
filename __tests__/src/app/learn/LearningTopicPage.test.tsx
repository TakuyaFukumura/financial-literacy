import {render, screen, within} from '@testing-library/react';
import LearningTopicPage from '../../../../src/app/learn/LearningTopicPage';

describe('LearningTopicPage', () => {
    it('記事に設定されたタグを一覧で表示する', () => {
        render(
            <LearningTopicPage
                category="資産形成の基本"
                title="テスト記事"
                tags={['資産形成', 'リスク']}
                introduction="記事の概要"
                sections={[]}
                relatedTopic={{href: '/learn/compound-interest', title: '複利'}}
            />
        );

        expect(screen.getByRole('link', {name: '← テーマ一覧へ戻る'})).toHaveAttribute('href', '/');
        const tags = screen.getByRole('list', {name: 'タグ'});
        expect(within(tags).getByText('資産形成')).toBeInTheDocument();
        expect(within(tags).getByText('リスク')).toBeInTheDocument();
    });

    it('必要に応じて記事一覧への戻り先を変更できる', () => {
        render(
            <LearningTopicPage
                category="投資トラブル・商品の注意点"
                title="テスト記事"
                backHref="/risks-and-pitfalls"
                backLabel="リスクと落とし穴へ戻る"
                tags={['投資トラブル']}
                introduction="記事の概要"
                sections={[]}
                relatedTopic={{href: '/learn/extra', title: '補足記事'}}
            />
        );

        expect(screen.getByRole('link', {name: '← リスクと落とし穴へ戻る'})).toHaveAttribute(
            'href',
            '/risks-and-pitfalls'
        );
    });

    it('ロードマップの位置・戻り先・次の地点と参考情報を表示する', () => {
        render(
            <LearningTopicPage
                category="投資信託の基礎"
                title="テスト記事"
                tags={['初心者']}
                introduction="記事の概要"
                sections={[{id: 'sample-section', heading: 'セクション', body: '本文'}]}
                relatedTopic={{href: '/learn/extra', title: '補足記事'}}
                relatedTopicLabel="任意の補足"
                roadmapHref="/asset-building-roadmap"
                roadmapProgress={{
                    step: 3,
                    totalSteps: 8,
                    nextHref: '/asset-building-roadmap#step-4',
                    nextTitle: '家計の収支を改善する',
                }}
                references={[{label: '金融庁の資料', href: 'https://example.com/reference'}]}
                contentReviewedOn="2026年11月28日"
            />
        );

        expect(screen.getByRole('link', {name: '← 資産形成ロードマップへ戻る'})).toHaveAttribute(
            'href',
            '/asset-building-roadmap'
        );
        expect(screen.getByText('資産形成ロードマップ 3 / 8')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /次の地点：家計の収支を改善する/})).toHaveAttribute(
            'href',
            '/asset-building-roadmap#step-4'
        );
        expect(document.getElementById('sample-section')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '任意の補足：補足記事'})).toHaveAttribute(
            'href',
            '/learn/extra'
        );
        expect(screen.getByRole('link', {name: '金融庁の資料'})).toHaveAttribute(
            'rel',
            'noopener noreferrer'
        );
        expect(screen.getByText('最終確認日：2026年11月28日')).toBeInTheDocument();
    });

    it('主ルートの最終地点では完了メッセージを表示し、次の地点リンクを出さない', () => {
        render(
            <LearningTopicPage
                category="制度を知る"
                title="NISA"
                tags={['初心者']}
                introduction="記事の概要"
                sections={[]}
                relatedTopic={{href: '/learn/compound-interest', title: '複利'}}
                roadmapProgress={{
                    step: 8,
                    totalSteps: 8,
                    completionMessage: '主ルートはここまでです。口座開設は任意です。',
                }}
            />
        );

        expect(screen.getByText('資産形成ロードマップ 8 / 8')).toBeInTheDocument();
        expect(screen.getByText('主ルートはここまでです。口座開設は任意です。')).toBeInTheDocument();
        expect(screen.queryByRole('link', {name: /次の地点/})).not.toBeInTheDocument();
    });
});
