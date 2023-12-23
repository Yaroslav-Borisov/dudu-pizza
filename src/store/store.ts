import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards.slice';
import cartSlice from './cart.slice';
import { saveCartState } from './methods';

export const store = configureStore({
	reducer: {
		cards: cardsSlice,
		cartCards: cartSlice
	}
});

store.subscribe(() => {
	saveCartState(store.getState().cartCards);
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch