import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortType } from '../const';

interface sortState {
    sortType: string
}

const initialState: sortState = {
	sortType: SortType.Expensive
};

export const sortSlice = createSlice({
	name: 'sort',
	initialState: initialState,
	reducers: {
		changeSortType: (state, action: PayloadAction<string>) => {
			state.sortType = action.payload;
		}
	}
});

export default sortSlice.reducer;
export const sortActions = sortSlice.actions;