import { create } from 'zustand';
import { StateCreator } from 'zustand';
import { StoreState } from '../store';

export type THEME = 'yellow' | 'dark' | 'b&w' | 'light';

export type ThemeState = {
	currentTheme: THEME;
	isDayNightCycle: boolean;
	setTheme: (theme: THEME) => void;
	setIsDayNightCycle: (isDayNightCycle: boolean) => void;

	lightRef: any;
	setLightRef: (ref: any) => void;
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

	lightRef: null,
	setLightRef: (ref: any) => {
		set({ lightRef: ref });
	},
});
