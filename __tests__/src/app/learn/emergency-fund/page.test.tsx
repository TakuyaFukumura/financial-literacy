import {render, screen} from '@testing-library/react';
import EmergencyFundPage from '../../../../../src/app/learn/emergency-fund/page';

describe('EmergencyFundPage', () => {
    it('生活防衛資金の役割、目安額、管理方法を説明する', () => {
        render(<EmergencyFundPage/>);

        expect(screen.getByRole('heading', {name: '生活防衛資金'})).toBeInTheDocument();
        expect(screen.getByText(/生活費の3か月分から1年分/)).toBeInTheDocument();
        expect(screen.getByText(/18万円×6か月＝108万円/)).toBeInTheDocument();
        expect(screen.getByText(/すぐに引き出せる預貯金など/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '日本FP協会「主なライフイベントにかかる費用の目安」'})).toHaveAttribute(
            'href',
            'https://www.jafp.or.jp/know/lifeplan/indication/'
        );
        expect(screen.getByRole('link', {name: /テーマ一覧へ戻る/})).toHaveAttribute('href', '/');
    });
});
