import { CardItem } from '../../types';
import { Card } from '../Card/Card';

type CardListProps = {
    cards: CardItem[]
}

export const CardList = ({cards}: CardListProps) => {
	return (
		<div className="card-list">
			{cards.map(card => <Card card={card} key={card.id}/>)}
		</div>
	);
};