import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const primary = blueGrey[700];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingBottom: 20,
		margin: 0,
	},
	navbar: {
		background: primary,
	},
	title: {
		flexGrow: 1,
	},
}));

export function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.navbar} position='sticky' width='100%'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Tardif's Pokedex
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
