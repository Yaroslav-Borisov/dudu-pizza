import { useDispatch, useSelector } from 'react-redux';
import { CartList } from '../../components/CartList/CartList';
import { AppDispatch, RootState } from '../../store/store';
import { Header } from '../../components/Header/Header';
import { cartActions } from '../../store/cart.slice';

export const Cart = () => {
	const dispatch = useDispatch<AppDispatch>();
	const cartCards = useSelector((state: RootState) => state.cartCards.cartCards);
	const totalOrderPrice = cartCards.map(card => card.price * card.amount).reduce((sum, current) => sum + current, 0);

	return (
		<>
			<Header/>
			{cartCards.length === 0 ?
				<main className="page-main">
					<section className="section">
						<div className="section__header">
							<div className="section__left-column">
								<h2 className="section__title">Корзина</h2>
							</div>
						</div>
						<p className="placeholder">Корзина пустая</p>
					</section>
				</main>
				:
				<main className="page-main">
					<section className="section">
						<div className="section__header">
							<div className="section__left-column">
								<h2 className="section__title">Корзина</h2>
							</div>
							<button className="button --outline --active" onClick={() => dispatch(cartActions.clearCart())}>Очистить</button>
						</div>
						<CartList cartCards={cartCards}/>
						<div className="section__footer">
							<button className="button --big --filled" onClick={() => alert('Ваш заказ передан курьерской службе 😉')}>
									Оформить заказ за&nbsp;<b>{totalOrderPrice} ₽</b>
							</button>
						</div>
					</section>
				</main>
			}
		</>
	);
};