import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import cart from '../assets/cart.png'

// Caddie du site //

function Cart({ cart, updateCart }) {
	
	const [isOpen, setIsOpen] = useState(true)

	// Calcul du total du panier //
	const total = cart.reduce(
		(acc, bookType) => acc + bookType.amount * bookType.price,0)
	
	
	
	return isOpen ? ( // Si le panier est ouvert //
		<div className='librairie-cart'>
			<button
				className='librairie-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : ( // Si le panier est fermé //
		<div className='librairie-cart-closed'>
			<button
				className='librairie-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
