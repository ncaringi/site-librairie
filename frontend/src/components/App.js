import { useState } from 'react'
import { useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { bookList } from '../datas/bookList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookPage from './BookPage'

function App() {

	// sauvegarde du Cart en local //
	const savedCart = localStorage.getItem('caddie')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect (() => {
		localStorage.setItem('caddie', JSON.stringify(cart))
	},[cart])


	// application //
	return (
		<Router>
		<div>
			<Banner>
				<img src={logo} alt='Librairie en ligne' className='librairie-logo' />
				<h1 className='librairie-title'>Les Editions de Minuit </h1>
			</Banner>
			<div className='librairie-layout-inner'>
					<Routes>
						<Route path='/' element={
							<div style={{ display: 'flex' }}>
								<Cart cart={cart} updateCart={updateCart} />
								<ShoppingList cart={cart} updateCart={updateCart} />
							</div>} 
						/>
                        <Route path='/book/:name' element={<BookPage/>} />
					</Routes>
			</div>
			<Footer />
		</div>
		</Router>
	)
}

export default App
