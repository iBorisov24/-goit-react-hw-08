import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/Auth/AuthOps';

export default function RegisterPage() {
	const dispatch = useDispatch();
	const onSubmit = values => {
		dispatch(register(values));
	};
	return (
		<div>
			<Link to={'/'}>Go home</Link>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values, actions) => {
					onSubmit(values);
					actions.resetForm();
				}}
			>
				<Form>
					<Field type="text" name="name"></Field>
					<Field type="email" name="email"></Field>
					<Field type="password" name="password"></Field>
					<button type="submit"></button>
				</Form>
			</Formik>
		</div>
	);
}
