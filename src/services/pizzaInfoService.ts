import { SizesMap } from '../const';
import { CardItem, PizzaDoughOption, PizzaSizeOption } from '../types';

export class PizzaInfoService {

	private card: CardItem;

	constructor(card: CardItem) {
		this.card = card;
	}

	public getTotalPrice(size: PizzaSizeOption, dough: PizzaDoughOption) {
		return Math.round(this.card.price * size.ratio * dough.ratio);
	}

	public getTotalWeight(size: PizzaSizeOption, dough: PizzaDoughOption) {
		return Math.round(400 * size.ratio * dough.ratio);
	}

	public getParamsText(size: PizzaSizeOption, dough: PizzaDoughOption) {
		return `${size.diameter} см, ${dough.name.toLowerCase()} тесто, ${this.getTotalWeight(size, dough)} г`;
	}

	public getSizeName(size: number) {
		for (const value of Object.values(SizesMap)) {
			if (value.diameter === size) {
				return value.name;
			}
		}
	}
}