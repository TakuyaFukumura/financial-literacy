import {render, screen} from '@testing-library/react';
import StatusQuoBiasPage from '../../../../../src/app/learn/status-quo-bias/page';

describe('StatusQuoBiasPage', () => {
    it('現状維持の傾向と、変更しない選択も比較する方法を説明する', () => {
        render(<StatusQuoBiasPage/>);

        expect(screen.getByRole('heading', {name: '現状維持バイアスと投資判断'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '長く保有すること自体がバイアスとは限らない'})).toBeInTheDocument();
        expect(screen.getByText(/今の方針を続ける理由があり、費用やリスクも理解しているか/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '← リスクと落とし穴へ戻る'})).toHaveAttribute(
            'href',
            '/risks-and-pitfalls'
        );
    });
});
