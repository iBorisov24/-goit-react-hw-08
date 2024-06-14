import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/selectors';

export default function ContactList() {
	const data = useSelector(selectContacts);
	return (
		<ul className={css.cardList}>
			{data.map(friend => (
				<li key={friend.id}>
					<Contact
						name={friend.name}
						number={friend.number}
						id={friend.id}
						key={friend.id}
					/>
				</li>
			))}
		</ul>
	);
}
