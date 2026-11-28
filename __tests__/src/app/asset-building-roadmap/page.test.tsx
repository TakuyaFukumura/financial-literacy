import {render, screen, within} from '@testing-library/react';
import AssetBuildingRoadmapPage from '../../../../src/app/asset-building-roadmap/page';

describe('AssetBuildingRoadmapPage', () => {
    it('8つの学習地点を順番に表示し、口座開設を任意の行動として分ける', () => {
        render(<AssetBuildingRoadmapPage/>);

        expect(screen.getByRole('heading', {name: '資産形成ロードマップ'})).toBeInTheDocument();
        expect(screen.getByText(/特定の商品を買うことを勧めるものではありません/)).toBeInTheDocument();

        const roadmap = screen.getByRole('list', {name: '8つの学習地点'});
        const stopTitles = [
            '投資目的を確認する',
            '投資目標を設定する',
            '家計の現状を把握する',
            '家計の収支を改善する',
            '高金利負債への対応を考える',
            '生活防衛資金の考え方を知る',
            '投資の基礎を知る',
            'NISAの仕組みを知る',
        ];

        for (const title of stopTitles) {
            expect(within(roadmap).getByRole('heading', {name: title, level: 4})).toBeInTheDocument();
        }

        const areaTitles = [
            '目的と目標を整理する',
            '家計の土台を整える',
            '投資の基礎を知る',
            '制度を知る',
        ];
        expect(within(roadmap).getAllByRole('heading', {level: 3})).toHaveLength(4);
        for (const title of areaTitles) {
            expect(within(roadmap).getByRole('heading', {name: title, level: 3})).toBeInTheDocument();
        }

        expect(within(roadmap).getByRole('link', {name: '家計の現状を把握する'})).toHaveAttribute(
            'href',
            '/learn/pre-investment-household#household-status'
        );
        expect(within(roadmap).getByRole('link', {name: '固定費などを見直す'})).toHaveAttribute(
            'href',
            '/learn/pre-investment-household#fixed-costs'
        );
        expect(within(roadmap).getByRole('link', {name: '負債と相談先を確認する'})).toHaveAttribute(
            'href',
            '/learn/pre-investment-household#debts'
        );
        expect(within(roadmap).getByRole('link', {name: '生活防衛資金について学ぶ'})).toHaveAttribute(
            'href',
            '/learn/emergency-fund'
        );
        expect(within(roadmap).getByRole('link', {name: '先に読む：長期・積立・分散'})).toHaveAttribute(
            'href',
            '/learn/long-term-installment-diversified'
        );
        expect(within(roadmap).getByRole('link', {name: '続けて読む：インデックス投資'})).toHaveAttribute(
            'href',
            '/learn/index-investing'
        );
        expect(within(roadmap).getByRole('link', {name: 'NISAの基本を読む'})).toHaveAttribute(
            'href',
            '/learn/nisa'
        );
        expect(within(roadmap).getByRole('link', {name: '任意の補足：ドル・コスト平均法'})).toHaveAttribute(
            'href',
            '/learn/dollar-cost-averaging'
        );
        expect(within(roadmap).queryByRole('checkbox')).not.toBeInTheDocument();
        expect(within(roadmap).getAllByRole('listitem')).toHaveLength(13);

        expect(screen.getByRole('heading', {name: '主ルートの後：証券口座の開設を検討する'})).toBeInTheDocument();
    });
});
