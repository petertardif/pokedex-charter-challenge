import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		padding: 20,
	},
	media: {
		height: 275,
		width: '100%',
		objectFit: 'cover',
	},
});

export function Pokemon({ pokemons }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={pokemons.img}
					title={pokemons.name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{pokemons.name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{pokemons.num}
						<p>Type: {pokemons.type.map((type) => `${type} `)}</p>
						<p>
							Weaknesses:{' '}
							{pokemons.weaknesses.map((weakness) => `${weakness} `)}
						</p>
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
