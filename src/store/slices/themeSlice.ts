import { create } from 'zustand';
import { StateCreator } from 'zustand';
import { StoreState } from '../store';

export type THEME = 'yellow' | 'dark' | 'b&w' | 'light';

export type ThemeState = {
	currentTheme: THEME;
	isDayNightCycle: boolean;
	setTheme: (theme: THEME) => void;
	setIsDayNightCycle: (isDayNightCycle: boolean) => void;
};

export const createThemeSlice: StateCreator<StoreState, [], [], ThemeState> = (
	set
) => ({
	currentTheme: 'yellow',
	isDayNightCycle: false,
	setTheme: (theme: THEME) => {
		set({ currentTheme: theme });
	},
	setIsDayNightCycle: (isDayNightCycle: boolean) => {
		set({ isDayNightCycle });
	},
});
