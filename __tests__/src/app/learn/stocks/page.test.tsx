import {render, screen} from '@testing-library/react';
import StocksPage from '../../../../../src/app/learn/stocks/page';

describe('StocksPage', () => {
    it('株式の仕組みや株主の権利、投資リスクを図解付きで説明する', () => {
        render(<StocksPage/>);

        expect(screen.getByRole('heading', {name: '株式'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '株式を発行・売買する流れ'})).toBeInTheDocument();
        expect(screen.getByText('資金を提供し、株式を受け取る')).toBeInTheDocument();
        expect(screen.getByText(/売買代金は、通常、会社ではなく売り手に渡ります/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '利益が得られる場合と損失の可能性'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '次に読む：債券'})).toHaveAttribute(
            'href',
            '/learn/bonds'
        );
    });
});
