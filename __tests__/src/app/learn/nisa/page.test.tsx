import {render, screen} from '@testing-library/react';
import NisaPage from '../../../../../src/app/learn/nisa/page';

describe('NisaPage', () => {
    it('つみたて投資枠と成長投資枠の特徴や上限を説明する', () => {
        render(<NisaPage/>);

        expect(screen.getByRole('heading', {name: '2つの投資枠を併用できる'})).toBeInTheDocument();
        expect(screen.getByText(/つみたて投資枠が120万円、成長投資枠が240万円/)).toBeInTheDocument();
        expect(screen.getByText(/非課税保有限度額は合計1,800万円/)).toBeInTheDocument();
        expect(screen.getByRole('figure', {name: 'NISAの2つの投資枠'})).toBeInTheDocument();
        expect(screen.getByText('年間投資枠の合計')).toBeInTheDocument();
        expect(screen.getByText('成長投資枠は内数で1,200万円まで')).toBeInTheDocument();
    });
});
