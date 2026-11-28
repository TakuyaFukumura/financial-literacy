import {render, screen} from '@testing-library/react';
import AssetPriceBubblePage from '../../../../../src/app/learn/asset-price-bubble/page';

describe('AssetPriceBubblePage', () => {
    it('日本の資産価格バブルを主例に、見極めの難しさと参考情報を案内する', () => {
        render(<AssetPriceBubblePage/>);

        expect(screen.getByRole('heading', {name: 'バブルと資産価格の急落'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '日本の資産価格バブル'})).toBeInTheDocument();
        expect(screen.getByText(/1989年末に38,915円/)).toBeInTheDocument();
        expect(screen.getByText(/1992年8月には14,309円まで下落/)).toBeInTheDocument();
        expect(screen.getByText(/単一の原因だけで説明できるものではありません/)).toBeInTheDocument();
        expect(screen.getByText(/規模や社会的影響については後世の通説を見直す研究があります/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /日本銀行金融研究所/})).toHaveAttribute(
            'href',
            'https://www.imes.boj.or.jp/research/papers/japanese/kk19-4-9.pdf'
        );
        expect(screen.getByRole('link', {name: /リスクと落とし穴へ戻る/})).toHaveAttribute(
            'href',
            '/risks-and-pitfalls'
        );
    });
});
