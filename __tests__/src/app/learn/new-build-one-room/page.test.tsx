import {render, screen} from '@testing-library/react';
import NewBuildOneRoomPage from '../../../../../src/app/learn/new-build-one-room/page';

describe('NewBuildOneRoomPage', () => {
    it('収支・サブリース・売却・ローンの主な注意点を説明する', () => {
        render(<NewBuildOneRoomPage/>);

        expect(screen.getByRole('heading', {name: '新築ワンルームマンション投資の注意点'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '家賃収入だけでなく、毎月の収支を確かめる'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'サブリースの「家賃保証」は条件と見直しを確認する'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '売却価格が購入価格を下回ることもある'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '住宅ローンを投資用物件に使えるとは限らない'})).toBeInTheDocument();
        expect(screen.getByText(/住宅ローンは、本人や親族が住む住宅を対象とするなど/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '住宅金融支援機構「【フラット３５】ご利用条件」'})).toHaveAttribute(
            'href',
            'https://www.flat35.com/loan/lineup/flat35/conditions/index.html'
        );
    });
});
