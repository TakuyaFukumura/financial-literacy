'use client';

import {useSyncExternalStore} from 'react';
import Link from 'next/link';
import {useDarkMode} from './DarkModeProvider';

const emptySubscribe = () => () => {
};

export default function Header() {
    const {theme, setTheme} = useDarkMode();
    const isHydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);
    const displayTheme = isHydrated ? theme : 'light';

    const handleThemeToggle = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const getThemeIcon = () => {
        if (displayTheme === 'light') {
            return '☀️';
        } else {
            return '🌙';
        }
    };

    return (
        <header
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b
            border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        href="/"
                        className="text-xl font-semibold text-gray-800 dark:text-gray-200"
                    >
                        お金の学び場
                    </Link>

                    <nav aria-label="メインナビゲーション" className="flex items-center gap-1 sm:gap-2">
                        <Link
                            href="/asset-building-roadmap"
                            className="rounded-lg px-2 py-2 text-xs font-medium text-emerald-700
                            hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-emerald-700 dark:text-emerald-300 dark:hover:bg-gray-700
                            dark:focus-visible:outline-emerald-400 sm:px-3 sm:text-sm"
                        >
                            ロードマップを見る
                        </Link>
                        <button
                            onClick={handleThemeToggle}
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium
                            text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700
                            rounded-lg transition-colors duration-200"
                            title={`現在: ${displayTheme === 'light' ? 'ライトモード' : 'ダークモード'}`}
                        >
                            <span className="text-lg">{getThemeIcon()}</span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
