import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
export default function () {
	const isLogged = useSelector(selectIsLoggedIn);
	return (
		<header>
			<Navigation />
			{isLogged ? <UserMenu /> : <AuthNav />}
		</header>
	);
}
