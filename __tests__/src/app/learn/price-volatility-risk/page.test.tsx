import {render, screen} from '@testing-library/react';
import PriceVolatilityRiskPage from '../../../../../src/app/learn/price-volatility-risk/page';

describe('PriceVolatilityRiskPage', () => {
    it('価格変動リスクをリーマン・ショックの日経平均とともに説明する', () => {
        render(<PriceVolatilityRiskPage/>);

        expect(screen.getByRole('heading', {name: '価格変動リスク'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'リーマン・ショック時の日経平均'})).toBeInTheDocument();
        expect(screen.getByText(/下落率は約61%です/)).toBeInTheDocument();
        expect(screen.getByText(/評価額は約39万円、評価損は約61万円/)).toBeInTheDocument();
        expect(screen.getByText(/回復するか、いつ回復するかは事前にはわかりません/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '日経平均「2000年代：911テロとリーマン・ショック」'})).toHaveAttribute(
            'href',
            'https://indexes.nikkei.co.jp/atoz/2016/06/2000s.html'
        );
    });
});
