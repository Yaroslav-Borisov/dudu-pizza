export type CardItem = {
    id: string;
	title: string;
	desc: string;
	imageUrl: string;
	price: number;
	category: string[];
}

export type FullPizzaCard = {
    id: string;
	title: string;
	desc: string;
	imageUrl: string;
	price: number;
	category: string[];
	diameter: number;
	size: string;
	dough: string;
	amount: number;
}

export type PizzaSizeOption = {
	name: string;
	diameter: number;
	ratio: number;
}

export type PizzaDoughOption = {
	name: string;
	ratio: number;
}
