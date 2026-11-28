import {render, screen} from '@testing-library/react';
import PreInvestmentHouseholdPage from '../../../../../src/app/learn/pre-investment-household/page';

describe('PreInvestmentHouseholdPage', () => {
    it('家計・固定費・負債の確認方法と相談先を案内する', () => {
        render(<PreInvestmentHouseholdPage/>);

        expect(screen.getByRole('heading', {name: '投資を考える前の家計整理'})).toBeInTheDocument();
        expect(document.getElementById('household-status')).toBeInTheDocument();
        expect(document.getElementById('fixed-costs')).toBeInTheDocument();
        expect(document.getElementById('debts')).toBeInTheDocument();
        expect(screen.getByText(/残ったお金をすべて投資に回す必要はありません/)).toBeInTheDocument();
        expect(screen.getByText(/投資を始める前にすべての負債を完済すべきとは限りません/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: '金融庁「多重債務者対策・貸金業法等について」'})).toHaveAttribute(
            'href',
            'https://www.fsa.go.jp/policy/kashikin/index.html'
        );
        expect(screen.getByRole('link', {name: '消費者庁「消費者ホットライン」'})).toHaveAttribute(
            'href',
            'https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/'
        );
        expect(screen.getByText('資産形成ロードマップ 5 / 8')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /次の地点：生活防衛資金の考え方を知る/})).toHaveAttribute(
            'href',
            '/asset-building-roadmap#step-6'
        );
    });
});
