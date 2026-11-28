import {render, screen} from '@testing-library/react';
import InflationPage from '../../../../../src/app/learn/inflation/page';

describe('InflationPage', () => {
    it('インフレと購買力の関係を図解し、影響やリスクを説明する', () => {
        render(<InflationPage/>);

        expect(screen.getByRole('heading', {name: 'インフレ'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '同じ1,000円で買える量の変化'})).toBeInTheDocument();
        expect(screen.getByText('1個 200円')).toBeInTheDocument();
        expect(screen.getByText('1個 250円')).toBeInTheDocument();
        expect(screen.getByText('5個')).toBeInTheDocument();
        expect(screen.getByText('4個')).toBeInTheDocument();
        expect(screen.getByText(/説明のための仮の例です/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '家計への影響は一様ではない'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '次に読む：為替'})).toHaveAttribute(
            'href',
            '/learn/exchange-rate'
        );
    });
});
