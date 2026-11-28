import {render, screen} from '@testing-library/react';
import AnchoringBiasPage from '../../../../../src/app/learn/anchoring-bias/page';

describe('AnchoringBiasPage', () => {
    it('買値や過去の価格に引きずられる判断と見直し方を説明する', () => {
        render(<AnchoringBiasPage/>);

        expect(screen.getByRole('heading', {name: 'アンカリングと投資判断'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '買値は、現在の価値を示す数字ではない'})).toBeInTheDocument();
        expect(screen.getByText(/買値は自分が過去に支払った価格/)).toBeInTheDocument();
    });
});
