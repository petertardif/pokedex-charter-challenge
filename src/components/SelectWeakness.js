export function SelectWeakness({ pokemons, setWeaknesses }) {
	const arrOfWeaknesses = pokemons.flatMap((pokemon) => pokemon.weaknesses);
	const pokemonWeaknesses = Array.from(new Set(arrOfWeaknesses)).sort();

	const handleChange = (e) => {
		// let value = Array.from(e.target.selectedOptions, (option) => option.value);
		setWeaknesses(
			Array.from(e.target.selectedOptions, (option) => option.value)
		);
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
