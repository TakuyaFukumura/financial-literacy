import {render, screen, within} from '@testing-library/react';
import RisksAndPitfallsPage from '../../../../src/app/risks-and-pitfalls/page';

describe('RisksAndPitfallsPage', () => {
    it('注意点と一般的なリスクを分け、関連記事へ案内する', () => {
        render(<RisksAndPitfallsPage/>);

        expect(screen.getByRole('heading', {name: 'リスクと落とし穴'})).toBeInTheDocument();

        const pitfalls = screen.getByRole('region', {name: '投資トラブル・商品の注意点'});
        expect(within(pitfalls).getByRole('link', {name: /タコ足配当/})).toHaveAttribute(
            'href',
            '/learn/distribution-from-principal'
        );
        expect(within(pitfalls).getByRole('link', {name: /ポンジスキーム/})).toHaveAttribute(
            'href',
            '/learn/ponzi-scheme'
        );

        const risks = screen.getByRole('region', {name: '資産形成で知っておきたいリスク'});
        expect(within(risks).getByRole('link', {name: /為替リスク/})).toHaveAttribute(
            'href',
            '/learn/exchange-rate'
        );
        expect(within(risks).getByRole('link', {name: /インフレリスク/})).toHaveAttribute(
            'href',
            '/learn/inflation'
        );
        expect(screen.getByText(/為替やインフレは避けるべきものではなく/)).toBeInTheDocument();
    });
});
