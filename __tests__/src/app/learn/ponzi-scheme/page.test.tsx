import {render, screen} from '@testing-library/react';
import PonziSchemePage from '../../../../../src/app/learn/ponzi-scheme/page';

describe('PonziSchemePage', () => {
    it('手口や注意点、勧誘を受けた場合の対応を説明する', () => {
        render(<PonziSchemePage/>);

        expect(screen.getByRole('heading', {name: 'ポンジスキーム'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '新しい出資金が「配当」に見える流れ'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '新たな出資者'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '運営者'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '先に出資した人'})).toBeInTheDocument();
        expect(screen.getByText(/新たな出資が減ると、配当や返金が滞り/)).toBeInTheDocument();
        expect(screen.getByText(/新たな出資者から集めた資金/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '勧誘を受けたときの対応'})).toBeInTheDocument();
        expect(screen.getByText(/追加の手数料や保証金/)).toBeInTheDocument();
    });
});
