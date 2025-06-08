import { useEffect } from 'react';

/**
 * useClickOutside Hook
 *
 * - Detects clicks outside of a referenced element and triggers a callback function.
 * - Useful for closing modals, dropdowns, or tooltips when clicking outside.
 *
 * @param {Object} ref - A React ref pointing to the element to monitor.
 * @param {Function} callback - Function to execute when a click outside occurs.
 */
const useClickOutside = (ref, callback) => {
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, callback]);
};

export default useClickOutside;
