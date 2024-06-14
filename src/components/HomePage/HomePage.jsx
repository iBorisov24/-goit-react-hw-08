import { selectUser } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';
export default function HomePage() {
	const user = useSelector(selectUser);
	return <h2>Welcome, {user.name}</h2>;
}
