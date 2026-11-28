import {render, screen} from '@testing-library/react';
import ExchangeRateRiskPage from '../../../../../src/app/learn/exchange-rate-risk/page';

describe('ExchangeRateRiskPage', () => {
    it('為替変動が円換算額に与える影響とヘッジの注意点を説明する', () => {
        render(<ExchangeRateRiskPage/>);

        expect(screen.getByRole('heading', {name: '為替リスク'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '円換算の価値は為替レートで変わる'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '為替ヘッジにもコストや変動がある'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '基礎を読む：為替の基本'})).toHaveAttribute(
            'href',
            '/learn/exchange-rate'
        );
    });
});
