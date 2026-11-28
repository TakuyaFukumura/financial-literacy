import {render, screen, within} from '@testing-library/react';
import AssetBuildingRoadmapPage from '../../../../src/app/asset-building-roadmap/page';

describe('AssetBuildingRoadmapPage', () => {
    it('5つの学習地点と任意の補足リンクを表示する', () => {
        render(<AssetBuildingRoadmapPage/>);

        expect(screen.getByRole('heading', {name: '資産形成ロードマップ'})).toBeInTheDocument();
        expect(screen.getByText(/特定の商品を買うことを勧めるものではありません/)).toBeInTheDocument();

        const roadmap = screen.getByRole('list', {name: '5つの学習地点'});
        const stopTitles = [
            '家計と投資目的を確認する',
            'NISAの仕組みを知る',
            '投資信託とインデックス投資を知る',
            '長期・積立・分散を考える',
            '始める前・始めた後に備える',
        ];

        for (const title of stopTitles) {
            expect(within(roadmap).getByRole('heading', {name: title})).toBeInTheDocument();
        }

        expect(within(roadmap).getByRole('link', {name: 'NISAの基本を読む'})).toHaveAttribute(
            'href',
            '/learn/nisa'
        );
        expect(within(roadmap).getByRole('link', {name: 'インデックス投資を学ぶ'})).toHaveAttribute(
            'href',
            '/learn/index-investing'
        );
        expect(within(roadmap).getByRole('link', {name: '長期・積立・分散投資を学ぶ'})).toHaveAttribute(
            'href',
            '/learn/long-term-installment-diversified'
        );
        expect(within(roadmap).getByRole('link', {name: '任意の補足：ドル・コスト平均法'})).toHaveAttribute(
            'href',
            '/learn/dollar-cost-averaging'
        );
        expect(within(roadmap).queryByRole('checkbox')).not.toBeInTheDocument();
        expect(within(roadmap).getAllByRole('listitem')).toHaveLength(11);
    });
});
