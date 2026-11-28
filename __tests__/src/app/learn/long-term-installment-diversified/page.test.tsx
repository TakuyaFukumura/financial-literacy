import {render, screen} from '@testing-library/react';
import LongTermInstallmentDiversifiedPage from '../../../../../src/app/learn/long-term-installment-diversified/page';

describe('LongTermInstallmentDiversifiedPage', () => {
    it('長期・積立・分散の考え方と投資リスクを説明する', () => {
        render(<LongTermInstallmentDiversifiedPage/>);

        expect(screen.getByRole('heading', {name: '長期・積立・分散投資'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '長期：時間をかけて運用する'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '積立：定期的に購入する'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '分散：投資先を分ける'})).toBeInTheDocument();
        expect(screen.getByText(/損失を防いだり利益を保証したりするものではありません/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '任意の補足：ドル・コスト平均法'})).toHaveAttribute(
            'href',
            '/learn/dollar-cost-averaging'
        );
        expect(screen.getByText('資産形成ロードマップ 7 / 8')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /次の地点：インデックス投資を学ぶ/})).toHaveAttribute(
            'href',
            '/learn/index-investing'
        );
    });
});
