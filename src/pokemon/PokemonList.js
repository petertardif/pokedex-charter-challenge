import { Pokemon } from './Pokemon';
import { filterArray } from '../utils/filter';

export function PokemonList({ pokemons, searchTerm, filters }) {
	const searchedPokemon = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const filteredSearch = filterArray(searchedPokemon, filters);

	return (
		<div>
			<ul>
				{filteredSearch.map((pokemon) => (
					<Pokemon key={pokemon.id} pokemons={pokemon} />
				))}
			</ul>
		</div>
	);
}
