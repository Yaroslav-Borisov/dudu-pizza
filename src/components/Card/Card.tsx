import { Link } from 'react-router-dom';
import { CardItem } from '../../types';

type CardItemProps = {
    card: CardItem
}

export const Card = ({card}: CardItemProps) => {
	return (
		<Link className="card-item" to={`/pizza/${card.id}`}>
			<img
				className="card-item__image"
				src={card.imageUrl}
				width="255"
				height="255"
				alt={card.title}
			/>
			<h3 className="card-item__title">{card.title}</h3>
			<p className="card-item__desc">
				{card.desc}
			</p>
			<div className="card-item__footer">
				<span>от {card.price} ₽</span>
				<button className="button --light">Выбрать</button>
			</div>
		</Link>
	);
};