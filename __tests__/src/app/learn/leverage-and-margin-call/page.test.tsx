import {render, screen} from '@testing-library/react';
import LeverageAndMarginCallPage from '../../../../../src/app/learn/leverage-and-margin-call/page';

describe('LeverageAndMarginCallPage', () => {
    it('レバレッジによる損益拡大や追証、取引前の確認点を説明する', () => {
        render(<LeverageAndMarginCallPage/>);

        expect(screen.getByRole('heading', {name: 'レバレッジと追証'})).toBeInTheDocument();
        expect(screen.getByText(/証拠金10万円で5倍にあたる50万円分/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '追証が発生する仕組み'})).toBeInTheDocument();
        expect(screen.getByText(/商品や業者によって異なります/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '日本取引所グループ「信用取引の目的・仕組み」'})).toHaveAttribute(
            'href',
            'https://www.jpx.co.jp/equities/trading/margin/outline/01.html'
        );
    });
});
