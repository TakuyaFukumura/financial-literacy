import {render, screen} from '@testing-library/react';
import PrivateFundsPage from '../../../../../src/app/learn/private-funds/page';

describe('PrivateFundsPage', () => {
    it('私募と詐欺を区別し、投資前の確認点を説明する', () => {
        render(<PrivateFundsPage/>);

        expect(screen.getByRole('heading', {name: '私募ファンドの注意点'})).toBeInTheDocument();
        expect(screen.getByText(/「私募」は募集方法を表す言葉で、それだけで安全とも詐欺とも判断できません/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'ポンジスキームと私募ファンドは同じではない'})).toBeInTheDocument();
        expect(screen.getByText(/新しい出資者から集めた資金を既存の出資者への配当に回し/)).toBeInTheDocument();
        expect(screen.getByText(/登録や届出がある場合も、それだけで事業者の信用力や元本が保証されるわけではない/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '無登録のファンド勧誘が公表された事例'})).toBeInTheDocument();
        expect(screen.getByText(/延べ5,824人が合計約66億円を出資したとされています/)).toBeInTheDocument();
        expect(screen.getByText(/詐欺罪の有罪判決を示すものではありません/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '金融庁「いわゆるファンド形態での販売・勧誘等業務について」'})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/ordinary/fund/'
        );
        expect(screen.getByRole('link', {name: /申立て（2026年3月31日）/})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/sesc/news/c_2026/2026/20260331-2.html'
        );
    });
});
