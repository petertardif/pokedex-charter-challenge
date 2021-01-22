import { Pokemon } from './Pokemon';
import { makeStyles } from '@material-ui/core/styles';
import { filterArray } from '../../utils/filter';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	card: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export function PokemonList({ pokemons, searchTerm, filters }) {
	const classes = useStyles();

	const searchedPokemon = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const filteredSearch = filterArray(searchedPokemon, filters);

	return (
		<div>
			<Grid
				container
				spacing={6}
				direction='row'
				justify='center'
				alignItems='center'
			>
				{filteredSearch.map((pokemon) => (
					<Grid item>
						<Pokemon
							className={classes.card}
							key={pokemon.id}
							pokemons={pokemon}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
