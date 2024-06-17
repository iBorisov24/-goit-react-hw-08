import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/operations';
export default function LoginMenu() {
	const dispatch = useDispatch();
	const onSubmit = values => {
		dispatch(login(values));
	};
	return (
		<div>
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
