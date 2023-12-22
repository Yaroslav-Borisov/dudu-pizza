import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards.slice';
import cartSlice from './cart.slice';

export const store = configureStore({
	reducer: {
		cards: cardsSlice,
		cartCards: cartSlice
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch