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

export function SelectWeakness({ pokemons, setWeaknesses }) {
	const classes = useStyles();
	const arrOfWeaknesses = pokemons.flatMap((pokemon) => pokemon.weaknesses);
	const pokemonWeaknesses = Array.from(new Set(arrOfWeaknesses)).sort();

	const handleChange = (e) => {
		// let value = Array.from(e.target.selectedOptions, (option) => option.value);
		setWeaknesses(
			Array.from(e.target.selectedOptions, (option) => option.value)
		);
	};

	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor='weaknesses'>
				Select Weaknesses
			</label>
			<select
				name='weaknesses'
				className={classes.select}
				onChange={handleChange}
				multiple
			>
				{pokemonWeaknesses.map((weakness) => (
					<option className={classes.option} key={weakness} value={weakness}>
						{weakness}
					</option>
				))}
			</select>
		</div>
	);
}
