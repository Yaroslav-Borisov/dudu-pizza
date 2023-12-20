import { useParams } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Category, SortType } from '../../const';
import { CardItem } from '../../types';

export const Home = () => {
	const {category = ''} = useParams();
	const cards = useSelector((state: RootState) => state.cards.cards);
	const sortType = useSelector((state: RootState) => state.sort.sortType);
	console.log(sortType);

	const getSortedCards = () => {
		if (sortType === SortType.Expensive) {
			return cards.slice().sort((a, b) => b.price - a.price);
		} else if (sortType === SortType.Cheap) {
			return cards.slice().sort((a, b) => a.price - b.price);
		}
	};

	const getCategoryCards = () => {
		const sortedCards = getSortedCards() as CardItem[];

		if (category === '') {
			return sortedCards;
		} else {
			return sortedCards.filter(card => card.category.includes(category));
		}
	};


	return (
		<Layout title={Category[category as keyof typeof Category]} hasSearch={true} cards={getCategoryCards()} />
	);
};