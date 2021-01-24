// helper function with initial inspiration from https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
export const typeWeaknessFilter = (array, types, weaknesses) => {
	let returnedPokemons = array.filter((pokemon) => {
		let responseTypes = types.every((item) => pokemon.type.includes(item));
		let responseWeaknesses = weaknesses.every((weakness) =>
			pokemon.weaknesses.includes(weakness)
		);

		// dynamic filter on the fly did not return combined results of type/weakness and expanded search, so had to combine returned results using conditionals below.
		let allPokemons = true;
		if (types.length) {
			allPokemons = allPokemons && responseTypes;
		}
		if (weaknesses.length) {
			allPokemons = allPokemons && responseWeaknesses;
			return allPokemons;
		}
		if (types.length && weaknesses.length)
			allPokemons = allPokemons && responseTypes && responseWeaknesses;
		return allPokemons;
	});

	return returnedPokemons;
};
