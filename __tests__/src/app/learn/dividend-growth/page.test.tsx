import {render, screen} from '@testing-library/react';
import DividendGrowthPage from '../../../../../src/app/learn/dividend-growth/page';

describe('DividendGrowthPage', () => {
    it('増配と配当利回りの違いや配当の持続性を説明する', () => {
        render(<DividendGrowthPage/>);

        expect(screen.getByRole('heading', {name: '増配'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '増配と配当利回りは別の指標'})).toBeInTheDocument();
        expect(screen.getByText(/配当金は減ったり、支払われなくなったり/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '配当を支える業績や資金を確認する'})).toBeInTheDocument();
    });
});
