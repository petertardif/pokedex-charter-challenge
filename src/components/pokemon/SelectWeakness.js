export function SelectWeakness({ pokemons, filters, setFilters }) {
	const arrOfWeaknesses = pokemons.flatMap((pokemon) => pokemon.weaknesses);
	const pokemonWeaknesses = Array.from(new Set(arrOfWeaknesses)).sort();

	const handleChange = (e) => {
		// let value = Array.from(e.target.selectedOptions, (option) => option.value);
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
			{pokemonWeaknesses.map((weakness) => (
				<option key={weakness} value={weakness}>
					{weakness}
				</option>
			))}
		</select>
	);
}
