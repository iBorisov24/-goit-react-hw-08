import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggin } from '../../redux/Auth/selectors';
import { NavLink } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';

export default function Navigation() {
	const isLogin = useSelector(selectIsLoggin);
	return (
		<nav>
			<NavLink to={'/'}>Home</NavLink>
			{isLogin && <NavLink to={'/contacts'}>Contacts</NavLink>}
		</nav>
	);
}
