import { useSelector } from 'react-redux';
import { selectIsLoggin } from '../redux/Auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component, redirectTo }) {
	const isLogin = useSelector(selectIsLoggin);
	return isLogin ? component : <Navigate to={redirectTo} />;
}
