import { useParams } from 'react-router-dom';
import { bookList } from '../datas/bookList';
import { Link } from 'react-router-dom';

// Page individuelle pour chaque livre //

function BookPage() {
    const { name } = useParams(); // Récupère le nom du livre depuis les paramètres d'URL

    // Recherche du livre dans la liste de plantes en fonction du nom
    const book = bookList.find(bookes => bookes.name === name);

    // gestion d'erreur //
    if (!book) {
        return <div>Livre non trouvé</div>;
    }

    // gestion du style d'affichage //
    return (
        <div style={{ textAlign: 'center' }}>
            <Link to="/" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'white', backgroundColor: '#172c8b', padding: '5px 10px', borderRadius: '5px' }}>Retour au menu</Link>
            <img src={book.cover} alt={book.name} style={{ height: '40vh', width: 'auto', maxWidth: '100%' }} />
            <h1 style={{ fontWeight: 'bold' }}>{book.name}</h1>
            <h3 style={{ display: 'inline-block', marginRight: '10px' }}>{book.author}</h3>
            <h3>{book.price}€</h3>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Résumé : {book.resume}</p>
        </div>
    );
}

export default BookPage;
