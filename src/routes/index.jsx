import { createBrowserRouter } from 'react-router';
import BaseLayout from '@app/layouts';
import HomePage from '@app/pages/Home';
import CoursePage from '@app/pages/Course';
import LecturerPage from '@app/pages/Lecturer';
import ErrorPage from '@app/pages/Error';

/**
 * Configures the application's routing using React Router.
 *
 * @constant {Object} router - The router instance with defined routes.
 *
 * - `BaseLayout`: Main layout wrapping nested routes.
 *   - `/` → Renders `HomePage`.
 *   - `/khoa-hoc/:slug` → Renders `CoursePage` with a dynamic course slug.
 *   - `/giang-vien/:slug` → Renders `LecturerPage` with a dynamic lecturer slug.
 *   - Error handling is handled with `ErrorPage`.
 *
 * - `/404`: Explicit route for the error page.
 *
 * - `future` settings enable experimental React Router v7 features.
 */
const router = createBrowserRouter(
	[
		{
			path: '',
			element: <BaseLayout />,
			children: [
				{ path: '', element: <HomePage /> },
				{
					path: 'khoa-hoc/:slug',
					element: <CoursePage />
				},
				{ path: 'giang-vien/:slug', element: <LecturerPage /> }
			],
			errorElement: <ErrorPage />
		},
		{
			path: '404',
			element: <ErrorPage />
		}
	],
	{
		future: {
			v7_startTransition: true,
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true
		}
	}
);

export default router;
