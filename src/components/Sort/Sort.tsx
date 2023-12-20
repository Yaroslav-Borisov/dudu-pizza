import { useState } from 'react';
import { SortType } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { sortActions } from '../../store/sort.slice';

export const Sort = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [visible, setVisible] = useState(false);
	const sortType = useSelector((state: RootState) => state.sort.sortType);


	return (
		<div className="sort">
			<button className="sort__toggle" onClick={() => setVisible(prev => !prev)}>
				<span>{sortType}</span>
				<img src="img/Arrow.svg" />
			</button>
			<ul className={visible ? 'sort__list visible' : 'sort__list'}>
				<li className={sortType === SortType.Expensive ? 'active' : ''} onClick={() => dispatch(sortActions.changeSortType(SortType.Expensive))}>Сначала дорогие</li>
				<li className={sortType === SortType.Cheap ? 'active' : ''} onClick={() => dispatch(sortActions.changeSortType(SortType.Cheap))}>Сначала дешевые</li>
			</ul>
		</div>
	);
};