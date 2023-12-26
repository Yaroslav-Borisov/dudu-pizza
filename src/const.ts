export const Category = {
	'': 'Все пиццы',
	'new': 'Новинки',
	'hit': 'Хиты',
	'vegan': 'Без мяса',
	'hot': 'Острые'
};

export const SizesMap = {
	SMALL: {
		name: 'Маленькая',
		diameter: 25,
		ratio: 1
	},
	MIDDLE: {
		name: 'Cредняя',
		diameter: 30,
		ratio: 1.25
	},
	BIG: {
		name: 'Большая',
		diameter: 35,
		ratio: 1.35
	}
};
  
export const DoughMap = {
	TRADITIONAL: {
		name: 'Традиционное',
		ratio: 1.3
	},
	THIN: {
		name: 'Тонкое',
		ratio: 1
	}
};

export const SortType = {
	Expensive: 'expensive',
	Cheap: 'cheap'
} as const;

export const BASE_URL = 'https://62d86a78908831393590aa97.mockapi.io';

export const SortText = {
	[SortType.Expensive]: 'Сначала дорогие',
	[SortType.Cheap]: 'Сначала дешевые'
};