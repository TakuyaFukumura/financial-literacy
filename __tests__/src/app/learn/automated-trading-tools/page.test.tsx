import {render, screen} from '@testing-library/react';
import AutomatedTradingToolsPage from '../../../../../src/app/learn/automated-trading-tools/page';

describe('AutomatedTradingToolsPage', () => {
    it('自動売買のリスクと勧誘・取引前の確認点を説明する', () => {
        render(<AutomatedTradingToolsPage/>);

        expect(screen.getByRole('heading', {name: '自動売買ツールの注意点'})).toBeInTheDocument();
        expect(screen.getByText(/ツールを使うこと自体が詐欺というわけではありません/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '自動で注文しても、損失の可能性はなくならない'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'ツールの販売者と、実際に取引する業者を確認する'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '借金や遠隔操作アプリを求められたら応じない'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '金融庁「『FX取引・暗号資産投資の勧誘』にご注意！！」'})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/ordinary/chuui/husyouseikanyuu.html'
        );
    });
});
