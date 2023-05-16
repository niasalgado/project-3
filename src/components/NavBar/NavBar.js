import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to='/'>Home</Link> &nbsp;
            <Link to='/cocktails'>Back to Cocktail List</Link>
        </nav>
    );
}