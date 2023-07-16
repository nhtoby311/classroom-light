import { create } from 'zustand';

type TimeState = {
	currentTime: number;
	factor: number;
	setCurrentTime: (time: number) => void;
	incrementTime: () => void;
	resetTime: () => void;
};

const useTime = create<TimeState>()((set) => ({
	currentTime: 0,
	factor: 1,
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
}));

export default useTime;
