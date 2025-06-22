import { useRouteError } from 'react-router';
import { logger } from '~/utils';

const ErrorPage = () => {
    const error = useRouteError();
    logger('router error', error);
    return (
        <div className='h-screen flex justify-center items-center'>
            <h3 className='text-3xl font-black'>404 | NOT FOUND</h3>
        </div>
    );
};

export default ErrorPage;
