import { useState } from 'react';
import { SortType } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { cardsActions } from '../../store/cards.slice';

export const Sort = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [visible, setVisible] = useState(false);
	const sortType = useSelector((state: RootState) => state.cards.sortType);

	const onSelect = (sortType: string) => {
		dispatch(cardsActions.changeSortType(sortType));
		setVisible(false);
	};

	return (
		<div className="sort">
			<button className="sort__toggle" onClick={() => setVisible(prev => !prev)}>
				<span>{sortType}</span>
				<img src="img/Arrow.svg" />
			</button>
			<ul className={visible ? 'sort__list visible' : 'sort__list'}>
				<li className={sortType === SortType.Expensive ? 'active' : ''} onClick={() => onSelect(SortType.Expensive)}>Сначала дорогие</li>
				<li className={sortType === SortType.Cheap ? 'active' : ''} onClick={() => onSelect(SortType.Cheap)}>Сначала дешевые</li>
			</ul>
		</div>
	);
};