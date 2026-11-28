import {render, screen} from '@testing-library/react';
import AltcoinRisksPage from '../../../../../src/app/learn/altcoin-risks/page';

describe('AltcoinRisksPage', () => {
    it('草コイン特有のリスクと購入前の確認点を案内する', () => {
        render(<AltcoinRisksPage/>);

        expect(screen.getByRole('heading', {name: '草コインの注意点'})).toBeInTheDocument();
        expect(screen.getByText(/法律上の定義ではありません/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '売りたいときに売れるとは限らない'})).toBeInTheDocument();
        expect(screen.getByText(/運営者・関係者の保有割合/)).toBeInTheDocument();
        expect(screen.getByText(/秘密鍵やシードフレーズを他人に教えたり/)).toBeInTheDocument();
        expect(screen.getByText(/日本で暗号資産交換業の登録を受けているか/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '金融庁「暗号資産の利用者のみなさまへ」'})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/policy/virtual_currency/index.html'
        );
        expect(screen.getByRole('link', {name: /リスクと落とし穴へ戻る/})).toHaveAttribute(
            'href',
            '/risks-and-pitfalls'
        );
    });
});
