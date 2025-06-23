import { APP_NAME } from '~/config/env';

const LoadingPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-white -mt-[130px]'>
            <span className='text-3xl font-black uppercase bg-gradient-to-r from-[#4799e9] to-[#65f4cd] bg-[length:300%_100%] bg-clip-text text-transparent animate-gradient'>
                {APP_NAME}
            </span>
        </div>
    );
};

export default LoadingPage;
