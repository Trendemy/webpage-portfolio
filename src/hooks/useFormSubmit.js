import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { validator, logger } from '@utils';

/**
 * Custom hook for handling form submissions.
 *
 * - Validates input fields using `validator()`.
 * - Sends a POST request using Axios.
 * - Displays success/error notifications using `react-hot-toast`.
 *
 * @param {Object} fields - The form data fields.
 * @param {string} endpoint - API endpoint for form submission.
 * @param {string} textLoading - Loading message.
 * @param {string} success - Success message.
 * @param {string} error - Error message.
 *
 * @returns {Object} - Returns an object with:
 *   - `loading` (boolean): Indicates if submission is in progress.
 *   - `handleSubmit` (Function): Form submission handler.
 */
const useFormSubmit = (
	fields,
	endpoint,
	textLoading = 'Đang gửi...',
	success = 'Thành công.',
	error = 'Thất bại.'
) => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (loading) return;

		const err = validator(fields);
		if (err) {
			toast.error(err);
			return;
		}

		try {
			setLoading(true);
			await toast.promise(axios.post(endpoint, fields), {
				loading: textLoading,
				success: success,
				error: error
			});
		} catch (error) {
			toast.error('Có lỗi!');
			logger('submit error', error);
		} finally {
			setLoading(false);
		}
	};
	return { loading, handleSubmit };
};

export default useFormSubmit;
