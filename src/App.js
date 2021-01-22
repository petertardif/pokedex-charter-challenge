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

const API_URL =
	'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

function App() {
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
						/>
						<SelectWeakness
							pokemons={pokemons}
							filters={filters}
							setFilters={setFilters}
						/>
						<Button onClick={handleReset}>Reset</Button>
						<PokemonList
							pokemons={pokemons}
							searchTerm={searchTerm}
							filters={filters}
						/>
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
