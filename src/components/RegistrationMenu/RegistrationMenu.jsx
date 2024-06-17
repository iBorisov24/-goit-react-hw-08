import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
export default function RegistrationMenu() {
	const dispatch = useDispatch();
	const onSubmit = values => {
		dispatch(register(values));
	};
	const formSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, 'Too short name')
			.max(16, 'Too long name')
			.required(),
		password: Yup.string()
			.min(8, 'Too short password')
			.max(16, 'Too long password')
			.required(),
	});
	return (
		<div>
			<Formik
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values, actions) => {
					onSubmit(values);
					actions.resetForm();
				}}
				validationSchema={formSchema}
			>
				<Form>
					<Field type="text" name="name"></Field>
					<ErrorMessage name="name" component="span" />
					<Field type="email" name="email"></Field>
					<Field type="password" name="password"></Field>
					<ErrorMessage name="password" component="span" />
					<button type="submit">Confirm</button>
				</Form>
			</Formik>
		</div>
	);
}
