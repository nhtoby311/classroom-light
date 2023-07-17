import { create } from 'zustand';
import { StateCreator } from 'zustand';
import { StoreState } from '../store';

export type TimeState = {
	currentTime: number;
	factor: number;
	isPaused: boolean;
	setCurrentTime: (time: number) => void;
	incrementTime: () => void;
	resetTime: () => void;
	setFactor: (factor: number) => void;
	setIsPaused: (isPaused: boolean) => void;
};

export const createTimeSlice: StateCreator<StoreState, [], [], TimeState> = (
	set
) => ({
	currentTime: 0,
	factor: 1,
	isPaused: false,
	setCurrentTime: (time: number) => {
		set({ currentTime: time });
	},
	incrementTime: () => {
		set((state) => ({
			currentTime:
				state.currentTime >= 100 ? 0 : state.currentTime + state.factor,
		}));
	},
	resetTime: () => {
		set({ currentTime: 0 });
	},
	setFactor: (factor: number) => {
		set({ factor });
	},
	setIsPaused: (isPaused: boolean) => {
		set({ isPaused });
	},
});
