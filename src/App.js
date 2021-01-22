import './App.css';
import { useState, useEffect } from 'react';
import { PokemonList } from './pokemon/PokemonList';
import { Search } from './Search';
import { SelectType } from './SelectType';
import { SelectWeakness } from './SelectWeakness';

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
		<div className='App'>
			<header className='App-header'>
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
				<PokemonList
					pokemons={pokemons}
					searchTerm={searchTerm}
					filters={filters}
				/>
			</header>
		</div>
	);
}

export default App;
