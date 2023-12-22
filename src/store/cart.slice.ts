import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FullPizzaCard } from '../types';

interface CartState {
    cartCards: FullPizzaCard[]
}

const initialState: CartState = {
	cartCards: []
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<FullPizzaCard>) => {
			if (state.cartCards.length !== 0) {
				const index = state.cartCards.findIndex(card => card.price === action.payload.price && card.title === action.payload.title);
				if (state.cartCards[index] !== undefined) {
					state.cartCards = [
						...state.cartCards.slice(0, index),
						{...state.cartCards[index], amount: state.cartCards[index].amount + 1} ,
						...state.cartCards.slice(index + 1)
					];
				} else {
					state.cartCards = [...state.cartCards, action.payload];
				}
			} else {
				state.cartCards = [...state.cartCards, action.payload];
			}
		},
		removeFromCart: (state, action: PayloadAction<FullPizzaCard>) => {
			const index = state.cartCards.findIndex(card => card.price === action.payload.price && card.title === action.payload.title);
			if (state.cartCards[index].amount === 1) {
				state.cartCards = [
					...state.cartCards.slice(0, index),
					...state.cartCards.slice(index + 1)
				];
			} else {
				state.cartCards = [
					...state.cartCards.slice(0, index),
					{...state.cartCards[index], amount: state.cartCards[index].amount - 1},
					...state.cartCards.slice(index + 1)
				];
			}
		},
		removeCartPosition: (state, action: PayloadAction<FullPizzaCard>) => {
			const index = state.cartCards.findIndex(card => card.price === action.payload.price && card.title === action.payload.title);
			state.cartCards = [
				...state.cartCards.slice(0, index),
				...state.cartCards.slice(index + 1)
			];
		},
		clearCart: (state) => {
			state.cartCards = [];
		}
	}
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;