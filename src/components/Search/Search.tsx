import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { cardsActions } from '../../store/cards.slice';
import { useState } from 'react';

export const Search = () => {
	const dispatch = useDispatch<AppDispatch>();
	const searchText = useSelector((state: RootState) => state.cards.search);
	const [focus, setFocus] = useState(false);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(cardsActions.changeSearchText(e.target.value.trim().toLowerCase()));
	};

	return (
		<div className={focus ? 'search active' : 'search'}>
			<input type="text" value={searchText} onChange={onInputChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder="Название блюда" />
			<img src="img/Search.svg" alt="Search" width="20" height="20" />
		</div>
	);
};