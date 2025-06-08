import { useState } from 'react';

/**
 * Custom hook for managing form state in React.
 *
 * - Stores form field values in state.
 * - Provides an `onInputChange` handler to update state.
 * - Includes a `clearFields` function to reset the form.
 *
 * @param {Object} initialState - The initial form state.
 * @returns {Object} - An object containing:
 *   - `fields` (Object): Current form values.
 *   - `onInputChange` (Function): Handles input changes.
 *   - `clearFields` (Function): Resets form fields to initial state.
 */
const useFormState = (initialState) => {
	const [fields, setFields] = useState(initialState);

	/**
	 * Handles input field changes and updates state.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
	 */
	const onInputChange = (e) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};

	// Resets all form fields to their initial values.
	const clearFields = () => {
		setFields(initialState);
	};

	return { fields, onInputChange, clearFields };
};

export default useFormState;
