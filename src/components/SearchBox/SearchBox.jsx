import css from './SearchBox.module.css';
import { filterContacts } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
export default function SearchBox() {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilter);
	return (
		<input
			className={css.input}
			type="text"
			name="filter"
			onChange={e => {
				dispatch(filterContacts(e.target.value.trim().toLowerCase()));
			}}
			placeholder="Type to find"
			value={filter}
		/>
	);
}
