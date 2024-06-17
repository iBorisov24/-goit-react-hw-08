import { NavLink } from 'react-router-dom';

export default function AuthNav() {
	return (
		<div>
			<NavLink to={'/Register'}>Register</NavLink>
			<NavLink to={'/Login'}>Login</NavLink>
		</div>
	);
}
