import {render, screen} from '@testing-library/react';
import SunkCostEffectPage from '../../../../../src/app/learn/sunk-cost-effect/page';

describe('SunkCostEffectPage', () => {
    it('過去の費用に判断を引きずられる例と、将来を基準に考える方法を説明する', () => {
        render(<SunkCostEffectPage/>);

        expect(screen.getByRole('heading', {name: 'サンクコスト効果と投資判断'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '過去の損失を取り返そうとして追加投資する'})).toBeInTheDocument();
        expect(screen.getByText(/今後の見込みやリスクが自分の投資目的に合うなら保有を続ける選択もあります/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '← リスクと落とし穴へ戻る'})).toHaveAttribute(
            'href',
            '/risks-and-pitfalls'
        );
    });
});
