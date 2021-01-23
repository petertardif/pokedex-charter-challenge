export function SelectType({ pokemons, filters, setFilters, types }) {
	const handleChange = (e) => {
		setFilters({
			...filters,
			type: (type) =>
				type.every((x) =>
					Array.from(
						e.target.selectedOptions,
						(option) => option.value
					).includes(x)
				),
		});
	};

	return (
		<select onChange={handleChange} multiple>
			{types.map((type) => (
				<option key={type} value={type}>
					{type}
				</option>
			))}
		</select>
	);
}
