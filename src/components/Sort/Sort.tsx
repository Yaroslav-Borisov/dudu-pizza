import { useState } from 'react';
import { SortText, SortType } from '../../const';
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
			<button
				className="sort__toggle"
				onClick={() => setVisible((prev) => !prev)}
			>
				<span>{SortText[sortType as keyof typeof SortText]}</span>
				<img src="img/Arrow.svg" />
			</button>
			<ul className={visible ? 'sort__list visible' : 'sort__list'}>
				{Object.values(SortType).map((sort) => {
					return (
						<li
							className={sortType === sort ? 'active' : ''}
							onClick={() => onSelect(sort)}
							key={sort}
						>
							{SortText[sort]}
						</li>
					);
				})}
			</ul>
		</div>
	);
};