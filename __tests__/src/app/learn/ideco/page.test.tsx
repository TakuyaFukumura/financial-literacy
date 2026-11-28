import {render, screen} from '@testing-library/react';
import IdecoPage from '../../../../../src/app/learn/ideco/page';

describe('IdecoPage', () => {
    it('iDeCoの仕組み、税制、引き出し制限を説明する', () => {
        render(<IdecoPage/>);

        expect(screen.getByRole('heading', {name: 'iDeCo'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '税制上の優遇がある'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '原則として途中で引き出せない'})).toBeInTheDocument();
        expect(screen.getByText(/掛金の上限は、職業や勤務先の企業年金制度/)).toBeInTheDocument();
    });
});
