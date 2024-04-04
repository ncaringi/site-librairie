import { useState } from 'react'
import '../styles/Footer.css'

// Bas de page du site //

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	// Vérification de l'adresse mail //
	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='librairie-footer'>
			<div className='librairie-footer-elem'>
				Pour les passionné·e·s de littérature
			</div>
			<div className='librairie-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
