import { Link } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {
    return (
    <div id='home-container'>
        <h1>Taste Test</h1>
        <Link to='/cocktails' id='index-link'>Cocktail Index</Link>
        
        {/* // TODO: Render an inviting, styled Home Page with nav links to cocktail list and a feature(random) cocktail */}
    </div>
    )
}