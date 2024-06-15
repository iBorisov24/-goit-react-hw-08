export default function UserMenu() {
	return (
		<div>
			<h2>User menu</h2>
			<Link to="/contacts">Go contacts</Link>
			<button type="button" onClick={handleClick}>
				LogOut
			</button>
		</div>
	);
}
