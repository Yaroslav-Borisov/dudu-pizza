import axios from 'axios';
import { CardItem } from '../types';
import { BASE_URL } from '../const';

export default class PizzaApi {
	static async getAll(): Promise<CardItem[]> {
		const { data } = await axios.get<CardItem[]>(`${BASE_URL}/items`);

		return data;
	}

	static async getOne(id: string): Promise<CardItem> {
		const { data } = await axios.get<CardItem>(`${BASE_URL}/items/${id}`);

		return data;
	}
}