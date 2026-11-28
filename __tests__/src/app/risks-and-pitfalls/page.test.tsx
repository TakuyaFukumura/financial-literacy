import {render, screen, within} from '@testing-library/react';
import RisksAndPitfallsPage from '../../../../src/app/risks-and-pitfalls/page';

describe('RisksAndPitfallsPage', () => {
    it('投資トラブル・リスク・認知バイアスを分けて記事へ案内する', () => {
        render(<RisksAndPitfallsPage/>);

        expect(screen.getByRole('heading', {name: 'リスクと落とし穴'})).toBeInTheDocument();

        const pitfalls = screen.getByRole('region', {name: '投資トラブル・商品の注意点'});
        expect(within(pitfalls).getByRole('link', {name: /タコ足配当/})).toHaveAttribute(
            'href',
            '/learn/distribution-from-principal'
        );
        expect(within(pitfalls).getByRole('link', {name: /^ポンジスキーム/})).toHaveAttribute(
            'href',
            '/learn/ponzi-scheme'
        );
        expect(within(pitfalls).getByRole('link', {name: /投資を装うマルチ商法（MLM）/})).toHaveAttribute(
            'href',
            '/learn/investment-mlm'
        );
        expect(within(pitfalls).getByRole('link', {name: /ねずみ講（無限連鎖講）/})).toHaveAttribute(
            'href',
            '/learn/pyramid-scheme'
        );
        expect(within(pitfalls).getByRole('link', {name: /バイナリーオプション/})).toHaveAttribute(
            'href',
            '/learn/binary-options'
        );
        expect(within(pitfalls).getByRole('link', {name: /私募ファンドの注意点/})).toHaveAttribute(
            'href',
            '/learn/private-funds'
        );
        expect(within(pitfalls).getByRole('link', {name: /新築ワンルームマンション投資の注意点/})).toHaveAttribute(
            'href',
            '/learn/new-build-one-room'
        );
        expect(within(pitfalls).getByRole('link', {name: /自動売買ツールの注意点/})).toHaveAttribute(
            'href',
            '/learn/automated-trading-tools'
        );

        const risks = screen.getByRole('region', {name: '資産形成で知っておきたいリスク'});
        expect(within(risks).getByRole('link', {name: /減配リスク/})).toHaveAttribute(
            'href',
            '/learn/dividend-cut-risk'
        );
        expect(within(risks).getByRole('link', {name: /価格変動リスク/})).toHaveAttribute(
            'href',
            '/learn/price-volatility-risk'
        );
        expect(within(risks).getByRole('link', {name: /レバレッジと追証/})).toHaveAttribute(
            'href',
            '/learn/leverage-and-margin-call'
        );
        expect(within(risks).getByRole('link', {name: /為替リスク/})).toHaveAttribute(
            'href',
            '/learn/exchange-rate-risk'
        );
        expect(within(risks).getByRole('link', {name: /インフレリスク/})).toHaveAttribute(
            'href',
            '/learn/inflation-risk'
        );

        const biases = screen.getByRole('region', {name: '投資判断に影響する認知バイアス'});
        expect(within(biases).getByRole('link', {name: /確証バイアス/})).toHaveAttribute(
            'href',
            '/learn/confirmation-bias'
        );
        expect(within(biases).getByRole('link', {name: /アンカリング/})).toHaveAttribute(
            'href',
            '/learn/anchoring-bias'
        );
        expect(within(biases).getByRole('link', {name: /損失回避/})).toHaveAttribute(
            'href',
            '/learn/loss-aversion'
        );
        expect(within(biases).getByRole('link', {name: /同調・群集心理/})).toHaveAttribute(
            'href',
            '/learn/herd-behavior'
        );
        expect(screen.getByText(/為替やインフレは避けるべきものではなく/)).toBeInTheDocument();
    });
});
