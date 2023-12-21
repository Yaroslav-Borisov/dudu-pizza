import { useState } from 'react';
import { CardItem, PizzaDoughOption, PizzaSizeOption } from '../../types';
import { DoughMap, SizesMap } from '../../const';
import Options from '../Options/Options';
import { PizzaInfoService } from '../../services/pizzaInfoService';

type PizzaInfoParams = {
	card: CardItem
}

export const PizzaInfo = ({card}: PizzaInfoParams) => {
	const [size, setSize] = useState(SizesMap.MIDDLE);
	const [dough, setDough] = useState(DoughMap.TRADITIONAL);
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	const service = new PizzaInfoService(card);

	const onOptionChange = (setState: any) => {
		return (state: PizzaDoughOption | PizzaSizeOption) => {
			setState(state);
			setIsAddedToCart(false);
		};
	};

	const addToCart = () => {
		const fullPizzaCard = {
			...card,
			price: service.getTotalPrice(size, dough),
			size: size.diameter,
			dough: dough.name
		};

		setIsAddedToCart(true);
		console.log(fullPizzaCard);
	};

	return (
		<main className="page-main">
			<div className="pizza-info">
				<img
					src={card.imageUrl}
					width="430"
				/>
				<div className="pizza-info__left-column">
					<div>
						<h1 className="pizza-info__title">{card.title}</h1>
						<p className="pizza-info__params">{service.getParamsText(size, dough)}</p>
						<p className="pizza-info__composition">
							{card.desc}
						</p>
					</div>
					<div className="pizza-info__settings">
						<div className="pizza-info__row">
							<Options map={SizesMap} state={size} onClick={onOptionChange(setSize)} />
						</div>
						<div className="pizza-info__row">
							<Options map={DoughMap} state={dough} onClick={onOptionChange(setDough)} />
						</div>
					</div>
					{isAddedToCart ?
						<button className="button --big --filled --success" disabled>Добавлено в корзину</button>
						:
						<button className="button --big --filled" onClick={addToCart}>Добавить в корзину за {service.getTotalPrice(size, dough)} ₽</button>
					}
				</div>
			</div>
		</main>
	);
};