import { selectIsLoggin, selectUser } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';
export default function HomePage() {
	const user = useSelector(selectUser);
	const isLogged = useSelector(selectIsLoggin);
	return isLogged ? (
		<h2>Welcome, {user.name}</h2>
	) : (
		<h2>Welcome to the Contact List</h2>
	);
}
