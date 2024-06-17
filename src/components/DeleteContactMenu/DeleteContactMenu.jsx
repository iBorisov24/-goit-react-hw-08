import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import toast from 'react-hot-toast';
export default function DeleteContactMenu({ id, setIsOpen }) {
	const dispatch = useDispatch();
	const handleClickYes = () => {
		dispatch(deleteContact(id));
		toast.success('This contact has been deleted!', {
			position: 'top-right',
		});
	};
	const handleClickNo = () => {
		setIsOpen(false);
	};
	return (
		<div>
			<p>You confirm delete this contact?</p>
			<button type="button" onClick={handleClickYes}>
				Yes
			</button>
			<button type="button" onClick={handleClickNo}>
				No, go back
			</button>
		</div>
	);
}
