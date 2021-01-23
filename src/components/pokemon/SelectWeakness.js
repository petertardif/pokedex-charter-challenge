export function SelectWeakness({ pokemons, filters, setFilters, weaknesses }) {
	const handleChange = (e) => {
		setFilters({
			...filters,
			weaknesses: (weaknesses) =>
				weaknesses.some((x) =>
					Array.from(
						e.target.selectedOptions,
						(option) => option.value
					).includes(x)
				),
		});
	};

	return (
		<select onChange={handleChange} multiple>
			{weaknesses.map((weakness) => (
				<option key={weakness} value={weakness}>
					{weakness}
				</option>
			))}
		</select>
	);
}
