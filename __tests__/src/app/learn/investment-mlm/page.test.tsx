import {render, screen} from '@testing-library/react';
import InvestmentMlmPage from '../../../../../src/app/learn/investment-mlm/page';

describe('InvestmentMlmPage', () => {
    it('MLMと投資詐欺を区別し、勧誘への対応と公的な参考情報を案内する', () => {
        render(<InvestmentMlmPage/>);

        expect(screen.getByRole('heading', {name: '投資を装うマルチ商法（MLM）'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '商品販売と投資勧誘を切り分けて確認'})).toBeInTheDocument();
        expect(screen.getByText('販売：事業者 → 会員・販売員 → 購入者')).toBeInTheDocument();
        expect(screen.getByText('紹介：既存会員 → 新しい会員')).toBeInTheDocument();
        expect(screen.getByText(/利益や紹介報酬はどこから支払われるのか/)).toBeInTheDocument();
        expect(screen.getByText(/MLM（連鎖販売取引）自体が直ちに違法というわけではありません/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '契約・支払いをしてしまったら'})).toBeInTheDocument();
        expect(screen.getByText(/消費者ホットライン「188」/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '消費者庁「連鎖販売取引」'})).toHaveAttribute(
            'href',
            'https://www.no-trouble.caa.go.jp/what/multilevelmarketing/'
        );
        expect(screen.getByRole('link', {name: '金融庁「無登録で金融商品取引業を行う者の名称等について」'})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/ordinary/chuui/mutouroku.html'
        );
    });
});
