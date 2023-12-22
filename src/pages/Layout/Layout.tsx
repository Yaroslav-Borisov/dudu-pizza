import { CardList } from '../../components/CardList/CardList';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { Sort } from '../../components/Sort/Sort';
import { CardItem } from '../../types';


type layoutProps = {
    title: string;
    hasSearch: boolean;
    cards: CardItem[]
}

export const Layout = ({title, hasSearch, cards}: layoutProps) => {
	return (
		<>
			<Header/>
			<main className="page-main">
				<section className="section">
					<div className="section__header">
						<div className="section__left-column">
							<h2 className="section__title">{title}</h2>
							<Sort/>
						</div>
						{hasSearch ? <Search/> : <></>}
					</div>
					{cards.length === 0 ? <p className="placeholder">Ничего не найдено</p> : <CardList cards={cards} />}
				</section>
			</main>
		</>
	);
};