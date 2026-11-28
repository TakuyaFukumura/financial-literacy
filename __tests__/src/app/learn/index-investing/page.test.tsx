import {render, screen} from '@testing-library/react';
import IndexInvestingPage from '../../../../../src/app/learn/index-investing/page';

describe('IndexInvestingPage', () => {
    it('インデックス投資の仕組みや分散効果、リスクを説明する', () => {
        render(<IndexInvestingPage/>);

        expect(screen.getByRole('heading', {name: 'インデックス投資'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '指数に連動することを目指す'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '全世界株式インデックスファンドを確認する'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '市場全体の値下がりは避けられない'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '指数と費用を確認する'})).toBeInTheDocument();
        expect(screen.getByText('資産形成ロードマップ 7 / 8')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /次の地点：NISAの仕組みを知る/})).toHaveAttribute(
            'href',
            '/learn/nisa'
        );
        expect(screen.queryByRole('link', {name: '関連記事：NISA'})).not.toBeInTheDocument();
        expect(screen.getByRole('link', {name: '金融庁「NISA特設ウェブサイト 資料コーナー」'})).toBeInTheDocument();
    });
});
