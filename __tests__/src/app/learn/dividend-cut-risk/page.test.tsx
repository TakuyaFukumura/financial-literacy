import {render, screen} from '@testing-library/react';
import DividendCutRiskPage from '../../../../../src/app/learn/dividend-cut-risk/page';

describe('DividendCutRiskPage', () => {
    it('減配・無配の要因と配当利回りの注意点を説明する', () => {
        render(<DividendCutRiskPage/>);

        expect(screen.getByRole('heading', {name: '減配リスク'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '減配・無配になると受取額が変わる'})).toBeInTheDocument();
        expect(screen.getByText(/配当は預貯金の利息のようにあらかじめ約束されたものではありません/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '高い配当利回りが続くとは限らない'})).toBeInTheDocument();
        expect(screen.getByText(/単独で減配を予測できるものではありません/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '野村證券「銘柄選びに役立つ2つの指標｜配当利回りと配当性向」'})).toHaveAttribute(
            'href',
            'https://www.nomura.co.jp/wealthstyle/article/0071/'
        );
    });
});
