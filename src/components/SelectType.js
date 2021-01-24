import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingBottom: 25,
	},
	select: {
		font: 'inherit',
		border: 0,
		padding: '0.8rem',
		height: 150,
		borderRadius: 7,
		boxShadow: '0.5px 0.25px 4px lightgrey',
	},
	label: {
		color: '#5D5D5D',
		padding: '3px',
	},
	option: {
		padding: 1,
		color: '#5D5D5D',
	},
}));

export function SelectType({ pokemons, setTypes }) {
	const classes = useStyles();
	const arrOfPokemonTypes = pokemons.flatMap((pokemon) => pokemon.type);
	const pokemonTypes = Array.from(new Set(arrOfPokemonTypes)).sort();

	const handleChange = (e) => {
		setTypes(Array.from(e.target.selectedOptions, (option) => option.value));
	};

	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor='types'>
				Select types
			</label>
			<select
				name='types'
				className={classes.select}
				onChange={handleChange}
				multiple
			>
				{pokemonTypes.map((type) => (
					<option className={classes.option} key={type} value={type}>
						{type}
					</option>
				))}
			</select>
		</div>
	);
}
