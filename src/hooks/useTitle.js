import { useEffect } from 'react';
import { APP_NAME } from '@config/env';

/**
 * Custom hook to dynamically update the document title.
 *
 * @param {string} title - The page-specific title.
 */
const useTitle = (title = '') => {
	useEffect(() => {
		if (title) {
			document.title = APP_NAME ? `${title} - ${APP_NAME}` : title;
		}
	}, [title]);
};

export default useTitle;
