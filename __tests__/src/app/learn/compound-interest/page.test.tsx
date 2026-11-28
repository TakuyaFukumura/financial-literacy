import {render, screen} from '@testing-library/react';
import CompoundInterestPage from '../../../../../src/app/learn/compound-interest/page';

describe('CompoundInterestPage', () => {
    it('単利との違いと比較グラフを表示する', () => {
        render(<CompoundInterestPage/>);

        expect(screen.getByRole('heading', {name: '単利との違い'})).toBeInTheDocument();
        expect(screen.getByText(/年利5%で40年間/)).toBeInTheDocument();
        expect(screen.getByText(/単利の残高は300万円、複利では約704万円/)).toBeInTheDocument();
        expect(screen.getByText(/元本100万円、年利5%、税金・手数料なしの場合のイメージです。単利は毎年5万円ずつ増え/)).toBeInTheDocument();
        expect(screen.getByRole('img', {name: '単利と複利の残高推移'})).toBeInTheDocument();
        expect(screen.getByText('複利（利息を再投資）')).toBeInTheDocument();
        expect(screen.getByText('40')).toBeInTheDocument();
    });
});
