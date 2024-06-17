import { useSelector } from 'react-redux';
import { selectIsLoggin } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
export default function () {
	const isLogged = useSelector(selectIsLoggin);
	return (
		<header>
			<Navigation />
			{isLogged ? <UserMenu /> : <AuthNav />}
		</header>
	);
}
