import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards.slice';
import sortSlice from './sort.slice';

export const store = configureStore({
	reducer: {
		cards: cardsSlice,
		sort: sortSlice
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch