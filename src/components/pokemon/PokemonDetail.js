import { Button } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	paper: {
		width: '60%',
		margin: 30,
	},
	button: {
		width: 150,
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
}));

export function PokemonDetail({ pokemons }) {
	const classes = useStyles();

	const { id } = useParams();

	const foundPokemon = pokemons.find((pokemon) => pokemon.id.toString() === id);

	return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				<h1>{foundPokemon.name} </h1>
				<h3>It's time to checkout number {foundPokemon.num}.</h3>
				<img src={foundPokemon.img} alt={`${foundPokemon.name}`} />
				<h4>
					This gem of a pokemon has the following types:{' '}
					{foundPokemon.type.map((type) => `${type} `)}
				</h4>
				<h4>
					But beware, it's weaknesses are:{' '}
					{foundPokemon.weaknesses.map((weakness) => `${weakness} `)}
				</h4>
				<h3>
					Stand back, because this pokemon comes in at {foundPokemon.height} and
					weighing {foundPokemon.weight}.
				</h3>
			</Paper>
			<Link className={classes.link} to='/'>
				<Button
					className={classes.button}
					variant='contained'
					color='secondary'
				>
					Back
				</Button>
			</Link>
		</div>
	);
}
