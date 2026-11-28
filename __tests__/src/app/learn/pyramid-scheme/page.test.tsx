import {render, screen} from '@testing-library/react';
import PyramidSchemePage from '../../../../../src/app/learn/pyramid-scheme/page';

describe('PyramidSchemePage', () => {
    it('ねずみ講の禁止と仕組みを説明し、類似する手口との違いや相談先を案内する', () => {
        render(<PyramidSchemePage/>);

        expect(screen.getByRole('heading', {name: 'ねずみ講（無限連鎖講）'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'ねずみ講の参加者とお金の流れ'})).toBeInTheDocument();
        expect(screen.getByText('各段階で参加者が2倍になる単純化した例')).toBeInTheDocument();
        expect(screen.getByText('先順位者（1人）')).toBeInTheDocument();
        expect(screen.getByText('次の段階：2人')).toBeInTheDocument();
        expect(screen.getByText('さらに次の段階：4人')).toBeInTheDocument();
        expect(screen.getAllByText('後順位者')).toHaveLength(6);
        expect(screen.getByText(/加入・勧誘などが禁止されています/)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'MLMやポンジスキームとの違い'})).toBeInTheDocument();
        expect(screen.getByText(/消費者ホットライン「188」や警察に相談/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'e-Gov法令検索「無限連鎖講の防止に関する法律」'})).toHaveAttribute(
            'href',
            'https://laws.e-gov.go.jp/law/353AC1000000101'
        );
    });
});
