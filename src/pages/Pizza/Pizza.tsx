import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { PizzaInfo } from '../../components/PizzaInfo/PizzaInfo';
import { useEffect, useState } from 'react';
import { CardItem } from '../../types';
import PizzaApi from '../../api';

export const Pizza = () => {
	const {id} = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [card, setCard] = useState<CardItem>();

	useEffect(() => {
		const fetchPizza = async () => {
			setIsLoading(true);
      const data = await PizzaApi.getOne(id!)
			setCard(data);
			setIsLoading(false);
		};
	
		fetchPizza();
	}, []);

	return (
		<>
			<Header/>
			{isLoading ? <>Загружаю карточку...</> : card && <PizzaInfo card={card}/>}
		</>
	);
};