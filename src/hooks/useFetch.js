import { logger } from '@utils';
import { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * Reducer function to manage fetch state.
 *
 * @param {Object} state - Current state of the fetch operation.
 * @param {Object} action - Action object with type and payload/error.
 * @returns {Object} - Updated state based on the action type.
 */
const reducer = (state, action) => {
	switch (action.type) {
		case 'SUCCESS':
			return { loading: false, data: action.payload, error: null };
		case 'ERROR':
			return { loading: false, data: null, error: action.error };
		default:
			return state;
	}
};

/**
 * Custom hook to fetch data using a given service and manage state.
 *
 * - Fetches data based on the `slug` parameter in the URL.
 * - Redirects to a given path if data is not found or an error occurs.
 *
 * @param {Object} service - The service instance providing a `getOne` method to fetch data.
 * @param {string} redirect - The path to redirect when data is not found or an error occurs.
 * @returns {Object} - Fetch state containing `{ loading, data, error }`.
 */
const useFetch = (service, redirect = '/404') => {
	const { slug } = useParams();
	const navigate = useNavigate();

	const [state, dispatch] = useReducer(reducer, {
		loading: true,
		data: null,
		error: null
	});

	useEffect(() => {
		(async () => {
			try {
				const data = await service.getOne({ slug });
				if (data) {
					dispatch({ type: 'SUCCESS', payload: data });
				} else {
					dispatch({ type: 'ERROR', error: 'Data not found' });
					navigate(redirect, { replace: true });
				}
			} catch (error) {
				logger('fetch error', error);
				dispatch({ type: 'ERROR', error: error.message });
				navigate(redirect, { replace: true });
			}
		})();
	}, [navigate, redirect, service, slug]);

	return state;
};

export default useFetch;
