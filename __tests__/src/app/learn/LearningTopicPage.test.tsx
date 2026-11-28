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
});
