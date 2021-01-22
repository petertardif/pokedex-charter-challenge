import { Button } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';

export function PokemonDetail({ pokemons }) {
	const { id } = useParams();

	const foundPokemon = pokemons.find((pokemon) => pokemon.id.toString() === id);

	return (
		<div>
			<h1>{foundPokemon.name} </h1>
			<h3>It's time to checkout number {foundPokemon.num}.</h3>
			<h3>
				This gem of a pokemon has the following types:{' '}
				{foundPokemon.type.map((type) => `${type} `)}
			</h3>
			<h3>
				But beware, it's weaknesses are:{' '}
				{foundPokemon.weaknesses.map((weakness) => `${weakness} `)}
			</h3>
			<h3>
				Stand back, because this pokemon comes in at {foundPokemon.height} and
				weighing {foundPokemon.weight}.
			</h3>
			{/* <Button variant='contained' color='primary'>
				<Link
					to={`/pokemon/${foundPokemon.prev_evolution.map((pe) =>
						parseInt(pe.num)
					)}`}
				>
					Previous Evolution: {foundPokemon.prev_evolution.map((pe) => pe.name)}
				</Link>
			</Button> */}
			<Button variant='contained' color='secondary'>
				<Link to='/'>Back</Link>
			</Button>
		</div>
	);
}
