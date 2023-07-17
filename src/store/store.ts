import { create } from 'zustand';

import { TimeState, createTimeSlice } from './slices/timeSlice';
import { ThemeState, createThemeSlice } from './slices/themeSlice';

export type StoreState = TimeState & ThemeState;

const useStore = create<StoreState>()((...a) => ({
	...createTimeSlice(...a),
	...createThemeSlice(...a),
}));

export default useStore;
