import {render, screen} from '@testing-library/react';
import NisaPage from '../../../../../src/app/learn/nisa/page';

describe('NisaPage', () => {
    it('つみたて投資枠と成長投資枠の特徴や上限を説明する', () => {
        render(<NisaPage/>);

        expect(screen.getByRole('heading', {name: '2つの投資枠を併用できる'})).toBeInTheDocument();
        expect(screen.getByText(/つみたて投資枠が120万円、成長投資枠が240万円/)).toBeInTheDocument();
        expect(screen.getByText(/非課税保有限度額は合計1,800万円/)).toBeInTheDocument();
        expect(screen.getByRole('figure', {name: 'NISAの2つの投資枠'})).toBeInTheDocument();
        expect(screen.getByText('年間投資枠の合計')).toBeInTheDocument();
        expect(screen.getByText('成長投資枠は内数で1,200万円まで')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '金融庁「NISAを知る」'})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/policy/nisa2/know/index.html'
        );
        expect(screen.getByRole('link', {name: '← 資産形成ロードマップへ戻る'})).toHaveAttribute(
            'href',
            '/asset-building-roadmap'
        );
        expect(screen.getByRole('link', {name: /次の地点：投資信託とインデックス投資を知る/})).toHaveAttribute(
            'href',
            '/learn/index-investing'
        );
        expect(screen.getByRole('link', {name: '関連記事：複利'})).toHaveAttribute(
            'href',
            '/learn/compound-interest'
        );
    });
});
