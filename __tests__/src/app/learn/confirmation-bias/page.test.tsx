import {render, screen} from '@testing-library/react';
import ConfirmationBiasPage from '../../../../../src/app/learn/confirmation-bias/page';

describe('ConfirmationBiasPage', () => {
    it('確証バイアスの投資例と反対の根拠を確認する方法を説明する', () => {
        render(<ConfirmationBiasPage/>);

        expect(screen.getByRole('heading', {name: '確証バイアスと投資判断'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '好材料ばかりを探してしまう'})).toBeInTheDocument();
        expect(screen.getByText(/反対の根拠があるかを意識して探す/)).toBeInTheDocument();
    });
});
