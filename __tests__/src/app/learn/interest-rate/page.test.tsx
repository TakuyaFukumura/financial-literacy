import {render, screen} from '@testing-library/react';
import InterestRatePage from '../../../../../src/app/learn/interest-rate/page';

describe('InterestRatePage', () => {
    it('金利と利息の違いや金利の影響を図解付きで説明する', () => {
        render(<InterestRatePage/>);

        expect(screen.getByRole('heading', {name: '金利'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '金利が変わると利息はどう変わる？'})).toBeInTheDocument();
        expect(screen.getByText('利息 1万円')).toBeInTheDocument();
        expect(screen.getByText('利息 3万円')).toBeInTheDocument();
        expect(screen.getByText(/税金や手数料は考慮していません/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '物価の変化もあわせて考える'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '次に読む：インフレ'})).toHaveAttribute(
            'href',
            '/learn/inflation'
        );
    });
});
