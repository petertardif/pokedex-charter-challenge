import { useState, useEffect } from 'react';
import { Pokemon } from './Pokemon';
import { Search } from '../Search';
import { SelectType } from '../SelectType';
import { SelectWeakness } from '../SelectWeakness';

const API_URL =
	'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

export function PokemonList() {
	const [searchTerm, setSearchTerm] = useState('');
	const [pokemons, setPokemons] = useState([]);
	const [filters, setFilters] = useState({ type: [], weaknesses: [] });

	const getPokemons = async () => {
		try {
			const response = await fetch(API_URL);
			const pokemons = await response.json();
			setPokemons(pokemons.pokemon);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getPokemons();
	}, []);

	const searchedPokemon = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// helper function from https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
	function filterArray(array, filters) {
		const filterKeys = Object.keys(filters);
		return array.filter((item) => {
			// validates all filter criteria
			return filterKeys.every((key) => {
				// ignores non-function predicates
				if (typeof filters[key] !== 'function') return true;
				return filters[key](item[key]);
			});
		});
	}

	const filteredSearch = filterArray(searchedPokemon, filters);
	console.log(filteredSearch);
	console.log(filters);

	const handleReset = () => {
		setFilters({ type: [], weaknesses: [] });
		setSearchTerm('');
	};

	return (
		<div>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<SelectType
				pokemons={pokemons}
				filters={filters}
				setFilters={setFilters}
			/>
			<SelectWeakness
				pokemons={pokemons}
				filters={filters}
				setFilters={setFilters}
			/>
			<button onClick={handleReset}>Reset</button>
			<ul>
				{filteredSearch.map((pokemon) => (
					<Pokemon key={pokemon.id} pokemons={pokemon} />
				))}
			</ul>
		</div>
	);
}
