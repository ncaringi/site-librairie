import '../styles/BookItem.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Items à afficher dans le site //

function BookItem({ cover, name, author, price }) {

	return (
		<li className='librairie-item'>
			<div className='librairie-item-div'>
			<span className='librairie-item-price'>{price}€</span>
			<img className='librairie-item-cover' src={cover} alt={`${name} cover`} />
			<p>{name}</p>
			<p className='librairie-item-author'>{author}</p>
			</div>
		</li>
	)
}

export default BookItem
