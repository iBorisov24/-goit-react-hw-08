import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
	const onSubmit = values => {
		console.log(values);
	};
	return (
		<div>
			<Link to={'/'}>Go home</Link>
			<Formik initialValues={{}} onSubmit={values => onSubmit(values)}>
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
