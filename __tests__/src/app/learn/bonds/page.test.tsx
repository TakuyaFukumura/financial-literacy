import {render, screen} from '@testing-library/react';
import BondsPage from '../../../../../src/app/learn/bonds/page';

describe('BondsPage', () => {
    it('債券のお金の流れや価格変動、主なリスクを説明する', () => {
        render(<BondsPage/>);

        expect(screen.getByRole('heading', {name: '債券'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '債券のお金の流れ'})).toBeInTheDocument();
        expect(screen.getByText('毎年1,000円')).toBeInTheDocument();
        expect(screen.getByText('元本10万円')).toBeInTheDocument();
        expect(screen.getByText(/発行体が返済できることを前提/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '発行後の価格は変動する'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '次に読む：金利'})).toHaveAttribute(
            'href',
            '/learn/interest-rate'
        );
    });
});
