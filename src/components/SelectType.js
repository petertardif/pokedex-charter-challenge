export function SelectType({ pokemons, setTypes }) {
	const arrOfPokemonTypes = pokemons.flatMap((pokemon) => pokemon.type);
	const pokemonTypes = Array.from(new Set(arrOfPokemonTypes)).sort();

	const handleChange = (e) => {
		setTypes(Array.from(e.target.selectedOptions, (option) => option.value));
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
