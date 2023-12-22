import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { AppDispatch } from '../../store/store';
import { cardsActions } from '../../store/cards.slice';
import { useState } from 'react';

export const Search = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [focus, setFocus] = useState(false);

	const onInputChange = debounce(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(cardsActions.changeSearchText(e.target.value.trim().toLowerCase()));
		}
		, 1000);
	
	return (
		<div className={focus ? 'search active' : 'search'}>
			<input type="text" onChange={onInputChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder="Название блюда" />
			<img src="img/Search.svg" alt="Search" width="20" height="20" />
		</div>
	);
};