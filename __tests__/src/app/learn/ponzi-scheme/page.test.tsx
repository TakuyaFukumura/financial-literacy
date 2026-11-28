import {render, screen} from '@testing-library/react';
import PonziSchemePage from '../../../../../src/app/learn/ponzi-scheme/page';

describe('PonziSchemePage', () => {
    it('手口や注意点、勧誘を受けた場合の対応を説明する', () => {
        render(<PonziSchemePage/>);

        expect(screen.getByRole('heading', {name: 'ポンジスキーム'})).toBeInTheDocument();
        expect(screen.getByText(/新たな出資者から集めた資金/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '勧誘を受けたときの対応'})).toBeInTheDocument();
        expect(screen.getByText(/追加の手数料や保証金/)).toBeInTheDocument();
    });
});
