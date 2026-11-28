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

        const tags = screen.getByRole('list', {name: 'タグ'});
        expect(within(tags).getByText('資産形成')).toBeInTheDocument();
        expect(within(tags).getByText('リスク')).toBeInTheDocument();
    });

    it('ロードマップの位置・戻り先・次の地点と参考情報を表示する', () => {
        render(
            <LearningTopicPage
                category="投資信託の基礎"
                title="テスト記事"
                tags={['初心者']}
                introduction="記事の概要"
                sections={[]}
                relatedTopic={{href: '/learn/extra', title: '補足記事'}}
                relatedTopicLabel="任意の補足"
                roadmapHref="/asset-building-roadmap"
                roadmapProgress={{
                    step: 3,
                    nextHref: '/asset-building-roadmap#step-4',
                    nextTitle: '長期・積立・分散を考える',
                }}
                references={[{label: '金融庁の資料', href: 'https://example.com/reference'}]}
                contentReviewedOn="2026年11月28日"
            />
        );

        expect(screen.getByRole('link', {name: '← 資産形成ロードマップへ戻る'})).toHaveAttribute(
            'href',
            '/asset-building-roadmap'
        );
        expect(screen.getByText('資産形成ロードマップ 3 / 5')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /次の地点：長期・積立・分散を考える/})).toHaveAttribute(
            'href',
            '/asset-building-roadmap#step-4'
        );
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
});
