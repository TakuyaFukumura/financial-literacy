import {render, screen} from '@testing-library/react';
import LossAversionPage from '../../../../../src/app/learn/loss-aversion/page';

describe('LossAversionPage', () => {
    it('損失回避が保有判断に与える影響と事前の見直し基準を説明する', () => {
        render(<LossAversionPage/>);

        expect(screen.getByRole('heading', {name: '損失回避と投資判断'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '損失を認めたくなくて保有を続ける'})).toBeInTheDocument();
        expect(screen.getByText(/特定の損切り幅などが、すべての人や商品に適するわけではありません/)).toBeInTheDocument();
    });
});
