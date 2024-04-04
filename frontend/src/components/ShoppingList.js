import { bookList } from '../datas/bookList'
import BookItem from './BookItem'
import '../styles/ShoppingList.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function ShoppingList({ cart, updateCart}) {
	
	function addToCart(name, price) {
		const currentBookSaved = cart.find((book) => book.name === name)
		if (currentBookSaved) {
			const cartFilteredCurrentBook = cart.filter(
				(book) => book.name !== name
			)
			updateCart([
				...cartFilteredCurrentBook,
				{ name, price, amount: currentBookSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='librairie-shopping-list'>
			<ul className='librairie-book-list'>
				{bookList.map(({ id, cover, name, author, price }) => (
					
						<div key={id}>
							<Link to={`/book/${name}`}>
								<BookItem
									cover={cover}
									name={name}
									author={author}
									price={price}
								/>
							</Link>
							<button className='bouton-ajouter'onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
