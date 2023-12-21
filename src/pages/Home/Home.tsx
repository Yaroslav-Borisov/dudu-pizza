import { useParams } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Category } from '../../const';
import { CardListService } from '../../services/cardListService';

export const Home = () => {
	const {category = ''} = useParams();
	const cards = useSelector((state: RootState) => state.cards.cards);
	const sortType = useSelector((state: RootState) => state.cards.sortType);
	const searchText = useSelector((state: RootState) => state.cards.search);


	const service = new CardListService(cards);

	return (
		<Layout title={Category[category as keyof typeof Category]} hasSearch={true} cards={service.getTargetCards(category, sortType, searchText)} />
	);
};