import { initializeApp } from 'firebase/app';
import { API_KEY, PROJECT_ID } from '~/config/env';

/**
 * Initializes a Firebase application with the given configuration.
 *
 * @constant {FirebaseApp} firebaseApp - The initialized Firebase application instance.
 * - `apiKey: API_KEY` → API key for authentication and authorization.
 * - `projectId: PROJECT_ID` → Unique identifier for the Firebase project.
 */
export default initializeApp({
    apiKey: API_KEY,
    projectId: PROJECT_ID
});
