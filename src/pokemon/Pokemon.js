export function Pokemon({ pokemons }) {
	return (
		<li>
			{pokemons.name} - {pokemons.num}
			Type: {pokemons.type}
			Weaknesses: {pokemons.weaknesses}
		</li>
	);
}
