import { SortType } from '../const';
import { CardItem } from '../types';

export class CardListService {

	private cards: CardItem[];

	constructor(cards: CardItem[]) {
		this.cards = cards;
	}

	public getTargetCards(category: string, sortType: string, searchText: string) {
		const sortedCards = this.sortCards(this.cards, sortType) as CardItem[];
		const categoryCards = this.getCategoryCards(sortedCards, category);
		const targetCards = this.searchCards(categoryCards, searchText);

		return targetCards;
	}

	public sortCards(cards: CardItem[], sortType: string) {
		if (sortType === SortType.Expensive) {
			return cards.slice().sort((a, b) => b.price - a.price);
		} else if (sortType === SortType.Cheap) {
			return cards.slice().sort((a, b) => a.price - b.price);
		}
	}

	public getCategoryCards(cards: CardItem[], category: string) {
		if (category === '') {
			return cards;
		} else {
			return cards.filter(card => card.category.includes(category));
		}
	}

	public searchCards(cards: CardItem[], searchText: string) {
		if (searchText === '') {
			return cards;
		} else {
			return cards.filter(card => (card.title + ' ' + card.desc).toLowerCase().includes(searchText));
		}
	}
}