// helper function modified from https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
export const filterArray = (array, filters) => {
	const filterKeys = Object.keys(filters);
	return array.filter((item) => {
		// validates all filter criteria
		return filterKeys.every((key) => {
			// ignores non-function predicates
			if (typeof filters[key] !== 'function') return true;
			return filters[key](item[key]);
		});
	});
};
export const filteredPokemons = (array, filters, searchTerm) => {
	return array.filter((pokemon) => {
		let responseTypes = filters.types.every((type) => {
			return pokemon.type.includes(type);
		});

		let responseWeaknesses = filters.weaknesses.every((weakness) => {
			return pokemon.weaknesses.includes(weakness);
		});

		let searchedPokemon = searchTerm.test(
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		let allPokemons;
		if (responseTypes.length) {
			return (allPokemons = allPokemons && responseTypes);
		}
		if (responseWeaknesses.length) {
			return (allPokemons = allPokemons && responseWeaknesses);
		}
		if (searchedPokemon.length) {
			return (allPokemons = allPokemons && searchedPokemon);
		}
		return allPokemons;
	});
};
