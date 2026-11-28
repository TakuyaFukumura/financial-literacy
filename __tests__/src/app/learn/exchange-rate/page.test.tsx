import {render, screen} from '@testing-library/react';
import ExchangeRatePage from '../../../../../src/app/learn/exchange-rate/page';

describe('ExchangeRatePage', () => {
    it('為替レートの読み方と円高・円安の影響を説明する', () => {
        render(<ExchangeRatePage/>);

        expect(screen.getByRole('heading', {name: '為替'})).toBeInTheDocument();
        expect(screen.getByText(/1米ドル＝150円/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '円高・円安が暮らしに与える影響'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '外貨建て資産には為替変動の影響もある'})).toBeInTheDocument();
    });
});
