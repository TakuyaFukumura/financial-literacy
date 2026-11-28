import {render, screen} from '@testing-library/react';
import BinaryOptionsPage from '../../../../../src/app/learn/binary-options/page';

describe('BinaryOptionsPage', () => {
    it('取引の損益構造と業者確認の注意点を説明する', () => {
        render(<BinaryOptionsPage/>);

        expect(screen.getByRole('heading', {name: 'バイナリーオプション'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '← リスクと落とし穴へ戻る'})).toHaveAttribute(
            'href',
            '/risks-and-pitfalls'
        );
        expect(screen.getByRole('heading', {name: '損益分岐に必要な勝率は条件で変わる'})).toBeInTheDocument();
        expect(screen.getByText(/損益をプラスマイナスゼロにするには勝率60%が必要/)).toBeInTheDocument();
        expect(screen.getByText(/期待値が一律にマイナスと決まるわけではありません/)).toBeInTheDocument();
        expect(screen.getByText(/日本での金融商品取引業の登録が必要です/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '金融庁「バイナリーオプション取引にあたってご注意ください！」'})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/ordinary/chuui/binary.html'
        );
    });
});
