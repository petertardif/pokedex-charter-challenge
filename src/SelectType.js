export function SelectType({ pokemons, filters, setFilters }) {
	const arrOfPokemonTypes = pokemons.flatMap((pokemon) => pokemon.type);
	const pokemonTypes = Array.from(new Set(arrOfPokemonTypes)).sort();

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
			{pokemonTypes.map((type) => (
				<option key={type} value={type}>
					{type}
				</option>
			))}
		</select>
	);
}
