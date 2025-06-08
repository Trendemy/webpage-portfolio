import { isEmpty, isEmail, isMobilePhone } from 'validator';
import { schedules } from '@data';
/**
 * Validates user input fields.
 *
 * @param {Object} data - The input data to validate.
 * @param {string} [data.fullname] - The user's full name (required, cannot be empty).
 * @param {string} [data.phone] - The user's phone number (must be a valid Vietnamese number).
 * @param {string} [data.email] - The user's email (must be a valid email address).
 * @param {string} [data.content] - Additional content (required, cannot be empty).
 * @param {string} [data.information] - User's profession (required, cannot be empty).
 * @param {string} [data.schedule] - Selected schedule (must be valid based on predefined schedules).
 * @returns {string|null} An error message if validation fails, otherwise `null`.
 *
 * @example
 * const error = validator({ fullname: '', email: 'test@example.com' });
 * console.log(error); // "Họ và tên không được để trống."
 */
const validator = ({
	fullname,
	phone,
	email,
	content,
	information,
	schedule
}) => {
	if (fullname !== undefined && isEmpty(fullname)) {
		return 'Họ và tên không được để trống.';
	}
	if (email !== undefined && !isEmail(email)) {
		return 'Email không hợp lệ.';
	}
	if (phone !== undefined && !isMobilePhone(phone, 'vi-VN')) {
		return 'Số điện thoại không hợp lệ.';
	}
	if (content !== undefined && isEmpty(content)) {
		return 'Nội dung không được để trống.';
	}
	if (information !== undefined && isEmpty(information)) {
		return 'Nghề nghiệp không được để trống.';
	}
	if (schedule !== undefined) {
		const isValidSchedule = schedules.some((item) => item.value === schedule);
		if (!isValidSchedule) {
			return 'Lịch học không hợp lệ.';
		}
	}
	return null;
};

export default validator;
