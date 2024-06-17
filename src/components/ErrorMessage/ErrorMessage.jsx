import { toast } from 'react-hot-toast';
export default function ErrorMessage() {
	return (
		<div>
			<p>Sorry, pls restart the page</p>
			{toast.error('Sorry, pls restart the page', {
				position: 'top-right',
			})}
		</div>
	);
}
