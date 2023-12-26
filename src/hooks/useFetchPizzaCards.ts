import { useEffect, useState } from 'react';
import { cardsActions } from '../store/cards.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import PizzaApi from '../api';

export const useFetchPizzaCards = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	const fetchPizzaCards = async () => {
		setIsLoading(true);
		const data = await PizzaApi.getAll();
      
		dispatch(cardsActions.setItems(data));
		setIsLoading(false);
	};

	useEffect(() => {
		fetchPizzaCards();
	}, []);

	return {
		isLoading
	};
};