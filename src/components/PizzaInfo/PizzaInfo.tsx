import { CardItem } from '../../types';

type PizzaInfoParams = {
	card: CardItem
}

export const PizzaInfo = ({card}: PizzaInfoParams) => {
    
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
						<p className="pizza-info__params">
                  30 см, традиционное тесто, 650 г
						</p>
						<p className="pizza-info__composition">
							{card.desc}
						</p>
					</div>
					<div className="pizza-info__settings">
						<div className="pizza-info__row">
							<button className="button --outline">Маленькая</button>
							<button className="button --outline --active" disabled>
                    Cредняя
							</button>
							<button className="button --outline">Большая</button>
						</div>
						<div className="pizza-info__row">
							<button className="button --outline --active" disabled>
                    Традиционное
							</button>
							<button className="button --outline">Тонкое</button>
						</div>
					</div>
					<button className="button --big --filled">
                Добавить в корзину за 843 ₽
					</button>
					{/* <!-- <button className="button --big --filled --success" disabled>Добавлено в корзину</button> --> */}
				</div>
			</div>
		</main>
	);
};