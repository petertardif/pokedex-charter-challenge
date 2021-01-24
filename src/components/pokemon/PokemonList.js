import { Pokemon } from './Pokemon';
import { makeStyles } from '@material-ui/core/styles';
import { typeWeaknessFilter } from '../../utils/filter';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: 50,
	},
	container: {
		marginTop: 25,
	},
	card: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export function PokemonList({ pokemons, searchTerm, types, weaknesses }) {
	const classes = useStyles();

	const searchedPokemon = pokemons.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const filteredSearch = typeWeaknessFilter(searchedPokemon, types, weaknesses);

	return (
		<div className={classes.container}>
			<Grid
				container
				spacing={6}
				direction='row'
				justify='center'
				alignItems='center'
			>
				{filteredSearch.map((pokemon) => (
					<Grid item key={pokemon.id}>
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
