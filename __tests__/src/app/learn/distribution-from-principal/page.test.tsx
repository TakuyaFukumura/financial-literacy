import {render, screen} from '@testing-library/react';
import DistributionFromPrincipalPage from '../../../../../src/app/learn/distribution-from-principal/page';

describe('DistributionFromPrincipalPage', () => {
    it('タコ足配当と分配金の原資・確認ポイントを説明する', () => {
        render(<DistributionFromPrincipalPage/>);

        expect(screen.getByRole('heading', {name: 'タコ足配当'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '分配金と保有資産全体の関係'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '運用益500円から分配する例'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '運用益がないのに500円分配する例'})).toBeInTheDocument();
        expect(screen.getByText('分配後：投資信託9,500円 + 現金500円 = 合計10,000円')).toBeInTheDocument();
        expect(screen.getByText(/普通分配金/)).toBeInTheDocument();
        expect(screen.getByText(/元本払戻金（特別分配金）/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '受取額ではなく全体の成果を見る'})).toBeInTheDocument();
    });
});
