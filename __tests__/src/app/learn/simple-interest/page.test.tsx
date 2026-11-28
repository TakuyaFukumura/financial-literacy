import {render, screen} from '@testing-library/react';
import SimpleInterestPage from '../../../../../src/app/learn/simple-interest/page';

describe('SimpleInterestPage', () => {
    it('単利の計算方法と複利への導線を表示する', () => {
        render(<SimpleInterestPage/>);

        expect(screen.getByRole('heading', {name: '単利'})).toBeInTheDocument();
        expect(screen.getByText(/元本 × 年利 × 期間/)).toBeInTheDocument();
        expect(screen.getByText(/年利5%で5年間/)).toBeInTheDocument();
        expect(screen.getByText(/2万5,000円/)).toBeInTheDocument();
        expect(screen.getByRole('img', {name: '単利の残高推移'})).toBeInTheDocument();
        expect(screen.getByText(/毎年5,000円ずつ増えます/)).toBeInTheDocument();
        expect(screen.queryByRole('heading', {name: '単利との違い'})).not.toBeInTheDocument();
        expect(screen.queryByText('複利（利息を再投資）')).not.toBeInTheDocument();
        expect(screen.getByRole('link', {name: '次に読む：複利'})).toHaveAttribute(
            'href',
            '/learn/compound-interest'
        );
    });
});
