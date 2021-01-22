export function Search({ searchTerm, setSearchTerm }) {
	return (
		<input
			onChange={(e) => setSearchTerm(e.target.value)}
			value={searchTerm}
			placeholder='Search'
		/>
	);
}
