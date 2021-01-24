import { TextField } from '@material-ui/core';

export function Search({ searchTerm, setSearchTerm }) {
	return (
		<div>
			<TextField
				id='outlined-full-width'
				label='Search'
				style={{ margin: 8 }}
				placeholder='Search'
				helperText='Type the name of any pokemon'
				fullWidth
				margin='normal'
				InputLabelProps={{
					shrink: true,
				}}
				variant='outlined'
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
			/>
		</div>
	);
}
