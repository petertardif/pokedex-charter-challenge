import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PokemonList } from './components/pokemon/PokemonList';
import { PokemonDetail } from './components/pokemon/PokemonDetail';
import { Search } from './components/Search';
import { SelectType } from './components/SelectType';
import { SelectWeakness } from './components/SelectWeakness';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Navbar } from './components/Navbar';

const API_URL =
	'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [pokemons, setPokemons] = useState([]);
	const [types, setTypes] = useState([]);
	const [weaknesses, setWeaknesses] = useState([]);

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
		setTypes([]);
		setWeaknesses([]);
		setSearchTerm('');
	};

	return (
		<Container maxWidth='xl' className='App'>
			<Navbar className='App-header' />
			<Router>
				<Switch>
					<Route path='/pokemon/:id'>
						<PokemonDetail pokemons={pokemons} />
					</Route>
					<Route exact path='/'>
						<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
						<div className='App-container'>
							<SelectType pokemons={pokemons} setTypes={setTypes} />
							<SelectWeakness
								pokemons={pokemons}
								setWeaknesses={setWeaknesses}
							/>
						</div>
						<Button
							onClick={handleReset}
							variant='contained'
							color='secondary'
							styles={{ padding: '20px' }}
						>
							Reset Filters
						</Button>
						<PokemonList
							pokemons={pokemons}
							searchTerm={searchTerm}
							types={types}
							weaknesses={weaknesses}
						/>
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
