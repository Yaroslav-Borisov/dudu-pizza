import { FullPizzaCard } from '../../types';
import { CartCard } from '../CartCard/CartCard';

type CartListProps = {
    cartCards: FullPizzaCard[]
}

export const CartList = ({cartCards}: CartListProps) => {
	return (
		<div className="cart-list">
			{cartCards.map(card => <CartCard cartCard={card} key={card.id}/>)}
		</div>
	);
};
