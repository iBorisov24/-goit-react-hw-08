import { NavLink } from 'react-router-dom';

export default function AuthNav() {
	return (
		<header>
			<NavLink to={'/Register'}>Register</NavLink>
			<NavLink to={'/Login'}>Login</NavLink>
		</header>
	);
}
