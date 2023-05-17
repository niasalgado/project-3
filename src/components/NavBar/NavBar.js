import { Link } from 'react-router-dom';

export default function NavBar({ text }) {
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link> &nbsp;
            <Link to='/cocktails'>{ text }</Link>
        </nav>
    );
}