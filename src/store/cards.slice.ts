import { createSlice } from '@reduxjs/toolkit';
import { CardItem } from '../types';
import mockCards from '/Users/Ярослав/Desktop/Нужности/react/dudu-pizza/mock/mockCards';

interface CardState {
    cards: CardItem[]
}

const initialState: CardState = {
	cards: mockCards
};

export const cardsSlice = createSlice({
	name: 'cards',
	initialState: initialState,
	reducers: {
		
	}
});

export default cardsSlice.reducer;
export const cardsActions = cardsSlice.actions;