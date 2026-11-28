import {render, screen} from '@testing-library/react';
import HerdBehaviorPage from '../../../../../src/app/learn/herd-behavior/page';

describe('HerdBehaviorPage', () => {
    it('人気や成功談に影響されるリスクと投資前の確認点を説明する', () => {
        render(<HerdBehaviorPage/>);

        expect(screen.getByRole('heading', {name: '同調・群集心理と投資判断'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: '人気や話題性は、投資の根拠とは限らない'})).toBeInTheDocument();
        expect(screen.getByText(/成功談が実際の取引を示すか/)).toBeInTheDocument();
    });
});
