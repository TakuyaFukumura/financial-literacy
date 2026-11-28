import {render, screen, within} from '@testing-library/react';
import Home from '../../../src/app/page';

describe('Home', () => {
    it('学習テーマを表示し、それぞれの記事へ移動できる', () => {
        render(<Home/>);

        const topics = screen.getByRole('region', {name: 'テーマから学ぶ'});
        expect(within(topics).getByRole('link', {name: /単利/})).toHaveAttribute(
            'href',
            '/learn/simple-interest'
        );
        expect(within(topics).getByRole('link', {name: /複利/})).toHaveAttribute(
            'href',
            '/learn/compound-interest'
        );
        expect(within(topics).getByRole('link', {name: /r＞g/})).toHaveAttribute(
            'href',
            '/learn/r-g'
        );
        expect(within(topics).getByRole('link', {name: /インフレ/})).toHaveAttribute(
            'href',
            '/learn/inflation'
        );
        expect(within(topics).queryByRole('link', {name: /インフレリスク/})).not.toBeInTheDocument();
        expect(within(topics).getByRole('link', {name: /金利/})).toHaveAttribute(
            'href',
            '/learn/interest-rate'
        );
        expect(within(topics).getByRole('link', {name: /債券/})).toHaveAttribute(
            'href',
            '/learn/bonds'
        );
        expect(within(topics).getByRole('link', {name: /株主の権利や株価/})).toHaveAttribute(
            'href',
            '/learn/stocks'
        );
        expect(within(topics).getByRole('link', {name: /NISA/})).toHaveAttribute(
            'href',
            '/learn/nisa'
        );
        expect(within(topics).getByRole('link', {name: /タコ足配当/})).toHaveAttribute(
            'href',
            '/learn/distribution-from-principal'
        );
        expect(within(topics).getByRole('link', {name: /インデックス投資/})).toHaveAttribute(
            'href',
            '/learn/index-investing'
        );
        expect(within(topics).getByRole('link', {name: /ドル・コスト平均法/})).toHaveAttribute(
            'href',
            '/learn/dollar-cost-averaging'
        );
        expect(within(topics).getByRole('link', {name: /長期・積立・分散投資/})).toHaveAttribute(
            'href',
            '/learn/long-term-installment-diversified'
        );
        expect(within(topics).getByRole('link', {name: /ポンジスキーム/})).toHaveAttribute(
            'href',
            '/learn/ponzi-scheme'
        );
        expect(within(topics).getByRole('link', {name: /為替/})).toHaveAttribute(
            'href',
            '/learn/exchange-rate'
        );
        expect(within(topics).queryByRole('link', {name: /為替リスク/})).not.toBeInTheDocument();
        expect(within(topics).queryByRole('link', {name: /リスクと落とし穴/})).not.toBeInTheDocument();
        expect(within(topics).getByRole('link', {name: /iDeCo/})).toHaveAttribute(
            'href',
            '/learn/ideco'
        );
        expect(within(topics).getByRole('link', {name: /増配/})).toHaveAttribute(
            'href',
            '/learn/dividend-growth'
        );
    });
});
