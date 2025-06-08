import { getEnv } from '@utils';

const APP_NAME = getEnv('VITE_APP_NAME', 'Trendemy');
const NODE_ENV = getEnv('VITE_NODE_ENV', 'production');

// sheet
const SHEET_DB_CONTACT = getEnv('VITE_SHEET_DB_CONTACT');
const SHEET_DB_REGISTER = getEnv('VITE_SHEET_DB_REGISTER');

// firebase
const API_KEY = getEnv('VITE_API_KEY');
const PROJECT_ID = getEnv('VITE_PROJECT_ID');

// cloudinary
const CLOUDINARY_NAME = getEnv('VITE_CLOUDINARY_NAME');

export {
	APP_NAME,
	NODE_ENV,
	SHEET_DB_CONTACT,
	SHEET_DB_REGISTER,
	API_KEY,
	PROJECT_ID,
	CLOUDINARY_NAME,
};
