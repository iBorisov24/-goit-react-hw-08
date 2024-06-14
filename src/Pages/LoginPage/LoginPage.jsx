import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/Auth/AuthOps';
export default function LoginPage() {
	const dispatch = useDispatch();
	const onSubmit = values => {
		dispatch(login(values));
	};
	return (
		<div>
			<Link to={'/'}>Go home</Link>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, actions) => {
					onSubmit(values);
					actions.resetForm();
				}}
			>
				<Form>
					<Field type="email" name="email"></Field>
					<Field type="password" name="password"></Field>
					<button type="submit"></button>
				</Form>
			</Formik>
		</div>
	);
}
