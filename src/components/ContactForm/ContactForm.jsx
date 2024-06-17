import { Field, Formik, Form } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/Contacts/contactsOps';
import toast from 'react-hot-toast';

export default function ContactForm() {
	const formSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, 'Too short name')
			.max(16, 'Too long name')
			.required(),
		number: Yup.string('Please, enter number format')
			.min(3, 'Too short number')
			.max(16, 'Too long number')
			.required(),
	});
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={{ name: '', number: '' }}
			onSubmit={(values, actions) => {
				dispatch(addContact(values));
				actions.resetForm();
				toast.success('This contact has been added!', {
					position: 'top-right',
				});
			}}
			validationSchema={formSchema}
		>
			<Form className={css.form}>
				<Field className={css.input} type="text" name="name" />
				<ErrorMessage name="name" component="span" />
				<Field className={css.input} type="number" name="number" />
				<ErrorMessage name="number" component="span" />
				<button className={css.btn} name="submitBtn" type="submit">
					AddContact
				</button>
			</Form>
		</Formik>
	);
}
