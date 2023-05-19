import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar({ text }) {
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link> &nbsp;
            <Link to='/cocktails'>{ text }</Link>
        </nav>
    );
}