import {render, screen} from '@testing-library/react';
import RGreaterThanGPage from '../../../../../src/app/learn/r-g/page';

describe('RGreaterThanGPage', () => {
    it('rとgの意味や格差との関係、概念の限界を説明する', () => {
        render(<RGreaterThanGPage/>);

        expect(screen.getByRole('heading', {name: 'r＞g'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'rとgが表すもの'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '格差との関係'})).toBeInTheDocument();
        expect(screen.getByText(/あらゆる国や時代で常に成り立つ決まりではありません/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '次に読む：複利'})).toHaveAttribute(
            'href',
            '/learn/compound-interest'
        );
    });
});
