import { useState, useEffect } from 'react';
import { Pokemon } from './Pokemon';
import { Search } from '../Search';
import { SelectType } from '../SelectType';
import { SelectWeakness } from '../SelectWeakness';

const API_URL =
	'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

export function PokemonList() {
	const [searchTerm, setSearchTerm] = useState('');
	let [pokemons, setPokemons] = useState([]);
	const [filterType, setFilterType] = useState([]);
	const [filterWeakness, setFilterWeakness] = useState([]);

	// const searchResults = !searchTerm
	// 	? pokemons
	// 	: pokemons.filter((pokemon) =>
	// 			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	// 	  );

	// const searchResults = pokemons.filter((pokemon) =>
	// 	pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	// );
	// const filteredResults = searchResults.filter((pokemon) =>
	// 	pokemon.type.includes(...filterType)
	// );

	const searchedPokemon = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	// .filter((pokemon) =>
	// 	pokemon.type.every((e) => filterType.every((ele) => ele === e))
	// );

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

	const filteredPokemon = searchedPokemon
		// .map((pokemon) => pokemon)
		.reduce((acc, pokemon) => {
			pokemon.type.forEach((type) => {
				if (filterType.includes(type) && !pokemons[pokemon]) {
					acc.push(pokemon);
				}
			});
			pokemon.weaknesses.forEach((type) => {
				if (filterWeakness.includes(type)) {
					acc.push(pokemon);
				}
			});
			return acc;
		}, []);

	let finalPokemonList;
	// if (!searchTerm) {
	// 	finalPokemonList = pokemons;
	// }
	if ((!searchTerm && !filterType) || !filterWeakness) {
		finalPokemonList = searchedPokemon;
	}
	if ((pokemons && filterType) || filterWeakness) {
		finalPokemonList = filteredPokemon;
	}

	return (
		<div>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<SelectType pokemons={pokemons} setFilterType={setFilterType} />
			<SelectWeakness
				pokemons={pokemons}
				setFilterWeakness={setFilterWeakness}
			/>
			<ul>
				{finalPokemonList.map((pokemon) => (
					<Pokemon key={pokemon.id} pokemons={pokemon} />
				))}
			</ul>
		</div>
	);
}
