import { NavLink } from 'react-router-dom';
import { Category } from '../../const';

export const Header = () => {

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
					{/* <span>1</span> */}
				</NavLink>
			</nav>
		</header>
	);
};