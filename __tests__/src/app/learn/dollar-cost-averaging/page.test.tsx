import {render, screen} from '@testing-library/react';
import DollarCostAveragingPage from '../../../../../src/app/learn/dollar-cost-averaging/page';

describe('DollarCostAveragingPage', () => {
    it('定額購入の仕組みと利益が保証されない点を説明する', () => {
        render(<DollarCostAveragingPage/>);

        expect(screen.getByRole('heading', {name: 'ドル・コスト平均法'})).toBeInTheDocument();
        expect(screen.getByText(/価格が1,000円なら10口、500円なら20口/)).toBeInTheDocument();
        expect(screen.getByText(/利益が出ることを保証する方法でもありません/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '次に読む：インデックス投資'})).toHaveAttribute(
            'href',
            '/learn/index-investing'
        );
    });
});
