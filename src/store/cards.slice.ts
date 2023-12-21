import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardItem } from '../types';
import mockCards from '/Users/Ярослав/Desktop/Нужности/react/dudu-pizza/mock/mockCards';
import { SortType } from '../const';

interface CardState {
    cards: CardItem[]
	sortType: string
	search: string
}

const initialState: CardState = {
	cards: mockCards,
	sortType: SortType.Expensive,
	search: ''
};

export const cardsSlice = createSlice({
	name: 'cards',
	initialState: initialState,
	reducers: {
		changeSortType: (state, action: PayloadAction<string>) => {
			state.sortType = action.payload;
		},
		changeSearchText: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		}
	}
});

export default cardsSlice.reducer;
export const cardsActions = cardsSlice.actions;