import { FullPizzaCard } from '../../types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

type CartCardProps = {
    cartCard: FullPizzaCard
}

export const CartCard = ({cartCard}: CartCardProps) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className="cart-item">
			<img
				className="cart-item__image"
				src={cartCard.imageUrl}
				width="255"
				height="255"
				alt={cartCard.title}
			/>
			<div>
				<h3 className="cart-item__title">{cartCard.title}</h3>
				<p className="cart-item__desc">
					{cartCard.size} {cartCard.diameter} см, {cartCard.dough} тесто
				</p>
			</div>
			<div className="cart-item__count">
				<button className="cart-item__count-btn" onClick={() => dispatch(cartActions.removeFromCart(cartCard))}>
					<img src="/img/Minus.svg" width="36" height="36" />
				</button>
				{cartCard.amount}
				<button className="cart-item__count-btn" onClick={() => dispatch(cartActions.addToCart(cartCard))}>
					<img src="/img/Plus.svg" width="36" height="36" />
				</button>
			</div>
			<span>{cartCard.price * cartCard.amount} ₽</span>
			<button className="cart-item__remove-btn" onClick={() => dispatch(cartActions.removeCartPosition(cartCard))}>
				<img src="/img/Remove.svg" width="36" height="36" />
			</button>
		</div>
	);
};