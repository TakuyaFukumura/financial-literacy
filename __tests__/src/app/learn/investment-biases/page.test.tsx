import {render, screen} from '@testing-library/react';
import InvestmentBiasesPage from '../../../../../src/app/learn/investment-biases/page';

describe('InvestmentBiasesPage', () => {
    it('投資判断に影響するバイアスと対策を説明する', () => {
        render(<InvestmentBiasesPage/>);

        expect(screen.getByRole('heading', {name: '投資判断に影響する認知バイアス'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '確証バイアス：自分の考えに合う情報ばかり集める'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'アンカリング：買値や過去の高値に引きずられる'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '損失回避：損を確定したくなくて判断を先送りする'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '周囲につられる：人気や話題性を根拠に買ってしまう'})).toBeInTheDocument();
        expect(screen.getByText(/反対の根拠やリスクも確認しましょう/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'CFA Institute “The Behavioral Biases of Individuals”'})).toHaveAttribute(
            'href',
            'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/the-behavioral-biases-of-individuals'
        );
    });
});
