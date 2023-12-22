import { NavLink } from 'react-router-dom';
import { Category } from '../../const';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Header = () => {
	const cartCards = useSelector((state: RootState) => state.cartCards.cartCards);


	return (
		<header className="header">
			<NavLink className="header__logo" to='/'>
				<img src="/img/Logo.svg" width="273" height="43" alt="Logo" />
			</NavLink>
			<nav className="header__nav">
				{Object.entries(Category)
					.slice(1)
					.map(([key, value]) => (
						<NavLink to={`/${key}`} key={key}>
							{value}
						</NavLink>
					))
				}
				<NavLink className="button --filled" to="/cart">
                    Корзина
					{cartCards.length !== 0 ? <span>{cartCards.map(card => card.amount).reduce((sum, current) => sum + current)}</span> : ''}
				</NavLink>
			</nav>
		</header>
	);
};