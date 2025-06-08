import { useState } from 'react';

/**
 * Custom hook to manage an array of active indexes.
 *
 * - Allows toggling indexes (add/remove from state).
 * - Checks if an index exists in the state.
 *
 * @returns {Object} - Returns:
 *   - `indexes` (Array<number>): List of active indexes.
 *   - `toggle` (Function): Adds or removes an index.
 *   - `hasIndex` (Function): Checks if an index is active.
 */
const useIndexes = () => {
	const [indexes, setIndexes] = useState([]);

	const toggle = (index) => {
		setIndexes((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	const hasIndex = (index) => indexes.includes(index);

	return { indexes, toggle, hasIndex };
};

export default useIndexes;
