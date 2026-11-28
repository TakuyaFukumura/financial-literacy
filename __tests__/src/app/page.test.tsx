import {render, screen, within} from '@testing-library/react';
import Home from '../../../src/app/page';

describe('Home', () => {
    it('学習テーマを表示し、それぞれの記事へ移動できる', () => {
        render(<Home/>);

        const topics = screen.getByRole('region', {name: 'テーマから学ぶ'});
        expect(within(topics).getByRole('link', {name: /複利/})).toHaveAttribute(
            'href',
            '/learn/compound-interest'
        );
        expect(within(topics).getByRole('link', {name: /NISA/})).toHaveAttribute(
            'href',
            '/learn/nisa'
        );
    });
});
