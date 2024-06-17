import { selectIsLoggin, selectUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
	const user = useSelector(selectUser);
	const isLogged = useSelector(selectIsLoggin);
	return (
		<section>
			{isLogged ? (
				<div>
					<NavLink to={'/contacts'}>Go to my contacts</NavLink>
					<h2>Welcome, {user.name}</h2>
				</div>
			) : (
				<h2>Welcome to the Contact List</h2>
			)}
		</section>
	);
}
