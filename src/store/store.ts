import { create } from 'zustand';

type TimeState = {
	currentTime: number;
	setCurrentTime: (time: number) => void;
	startTime: () => void;
	resetTime: () => void;
};

const useTime = create<TimeState>()((set) => ({
	currentTime: 0,
	setCurrentTime: (time: number) => set({ currentTime: time }),
	startTime: () => {
		setInterval(() => {
			set((state) => ({
				currentTime:
					state.currentTime >= 100 ? 0 : state.currentTime + 1,
			}));
		}, 1000);
	},
	resetTime: () => {
		console.log('reset');
		set({ currentTime: 0 });
	},
}));

export default useTime;
