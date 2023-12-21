export type CardItem = {
    id: string;
	title: string;
	desc: string;
	imageUrl: string;
	price: number;
	category: string[];
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