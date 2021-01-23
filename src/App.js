import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PokemonList } from './components/pokemon/PokemonList';
import { PokemonDetail } from './components/pokemon/PokemonDetail';
import { Search } from './components/pokemon/Search';
import { SelectType } from './components/pokemon/SelectType';
import { SelectWeakness } from './components/pokemon/SelectWeakness';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Navbar } from './components/Navbar';
import { filteredPokemons } from './utils/filter';

const API_URL =
	'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [pokemons, setPokemons] = useState([]);
	const [renderedPokemons, setRenderedPokemons] = [];
	const [filters, setFilters] = useState({
		type: ['Grass'],
		weaknesses: ['Ice'],
	});
	const [types, setTypes] = useState([]);
	const [weaknesses, setWeaknesses] = useState([]);

	const getPokemons = async () => {
		try {
			const response = await fetch(API_URL);
			const pokemons = await response.json();
			setPokemons(pokemons.pokemon);
			setRenderedPokemons(pokemons.pokemon);

			// grab a dynamic list of available types to set in state
			const arrOfPokemonTypes = pokemons.pokemon.flatMap(
				(pokemon) => pokemon.type
			);
			const pokemonTypes = Array.from(new Set(arrOfPokemonTypes)).sort();
			setTypes(pokemonTypes);

			// grab the dynamic list of available weaknesses to set in state
			const arrOfWeaknesses = pokemons.pokemon.flatMap(
				(pokemon) => pokemon.weaknesses
			);
			const pokemonWeaknesses = Array.from(new Set(arrOfWeaknesses)).sort();
			setWeaknesses(pokemonWeaknesses);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getPokemons();
	}, []);

	let finalPokemons = filteredPokemons(pokemons, filters, searchTerm);
	console.log(finalPokemons);
	// useEffect(() => {
	// 	setRenderedPokemons(finalPokemons);
	// }, [
	// 	pokemons,
	// 	filters,
	// 	searchTerm,
	// 	renderedPokemons,
	// 	finalPokemons,
	// 	setRenderedPokemons,
	// ]);

	const handleReset = () => {
		setFilters({ type: [], weaknesses: [] });
		setSearchTerm('');
	};

	return (
		<Container maxWidth='xl' className='App'>
			<Router>
				<Switch>
					<Route path='/pokemon/:id'>
						<PokemonDetail pokemons={pokemons} />
					</Route>
					<Route exact path='/'>
						<Navbar className='App-header' />
						<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
						<SelectType
							pokemons={pokemons}
							filters={filters}
							setFilters={setFilters}
							types={types}
						/>
						<SelectWeakness
							pokemons={pokemons}
							filters={filters}
							setFilters={setFilters}
							weaknesses={weaknesses}
						/>
						<Button onClick={handleReset}>Reset</Button>
						<PokemonList
							pokemons={pokemons}
							searchTerm={searchTerm}
							filters={filters}
							renderedPokemons={renderedPokemons}
						/>
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
