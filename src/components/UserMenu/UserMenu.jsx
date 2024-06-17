import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
export default function UserMenu() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>User menu</h2>
			<ul>
				<li>Name: {user.name}</li>
				<li>Email: {user.email}</li>
			</ul>

			<button type="button" onClick={() => dispatch(logout())}>
				Exit
			</button>
		</div>
	);
}
