import { useEffect } from 'react';
import { cardsActions } from '../store/cards.slice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';

export const useFetchPizzaCards = (setIsLoading: (state: boolean) => void) => {
	const dispatch = useDispatch<AppDispatch>();

	const fetchPizzaCards = async () => {
		setIsLoading(true);
		const { data } = await axios.get(
			'https://62d86a78908831393590aa97.mockapi.io/items?'
		);
      
		dispatch(cardsActions.setItems(data));
		setIsLoading(false);
	};

	useEffect(() => {
		fetchPizzaCards();
	}, []);
};