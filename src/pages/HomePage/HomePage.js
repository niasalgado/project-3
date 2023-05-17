import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
    <>
        <h1>Taste Test</h1>
        <Link to='/cocktails'>Cocktail Index</Link>
        
        {/* // TODO: Render an inviting, styled Home Page with nav links to cocktail list and a feature(random) cocktail */}
    </>
    )
}