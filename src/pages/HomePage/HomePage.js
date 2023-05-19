import { Link } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {
    return (
    <div id='home-container'>
        <h1>Taste Test</h1>
        <Link to='/cocktails' id='index-link'>Cocktail Index</Link>
    </div>
    )
}