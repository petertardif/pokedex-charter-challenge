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
