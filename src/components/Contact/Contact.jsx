import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ id, name, number }) {
	const dispatch = useDispatch();
	return (
		<div className={css.card}>
			<p>{name}</p>
			<p>{number}</p>
			<button type="button" onClick={() => dispatch(deleteContact(id))}>
				Delete
			</button>
		</div>
	);
}
