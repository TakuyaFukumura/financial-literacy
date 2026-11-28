import {render, screen} from '@testing-library/react';
import InflationRiskPage from '../../../../../src/app/learn/inflation-risk/page';

describe('InflationRiskPage', () => {
    it('物価上昇で購買力が変化するリスクと注意点を説明する', () => {
        render(<InflationRiskPage/>);

        expect(screen.getByRole('heading', {name: 'インフレリスク'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '預貯金の額面と購買力は別'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'インフレに強い資産が必ずあるわけではない'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '基礎を読む：インフレの基本'})).toHaveAttribute(
            'href',
            '/learn/inflation'
        );
    });
});
