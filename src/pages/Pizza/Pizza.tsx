import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Header } from '../../components/Header/Header';
import { PizzaInfo } from '../../components/PizzaInfo/PizzaInfo';

export const Pizza = () => {
	const {id} = useParams();
	const cards = useSelector((state: RootState) => state.cards.cards);
	const card = cards.find(card => card.id === id);

	return (
		<>
			<Header/>
			{card && <PizzaInfo card={card}/>}
		</>
	);
};