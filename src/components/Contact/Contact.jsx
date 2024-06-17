import css from './Contact.module.css';
import { useState } from 'react';
import DeleteContactMenu from '../DeleteContactMenu/DeleteContactMenu';

export default function Contact({ id, name, number }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickDelete = () => {
		setIsOpen(true);
	};
	// const handleClickConfig = () => {};
	return (
		<div className={css.card}>
			<p>{name}</p>
			<p>{number}</p>
			<button type="button" onClick={handleClickDelete}>
				Delete
			</button>
			{/* <button type="button" onClick={handleClickConfig}></button> */}
			{isOpen && <DeleteContactMenu id={id} setIsOpen={setIsOpen} />}
		</div>
	);
}
