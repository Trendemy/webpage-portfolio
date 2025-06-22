import { RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';
import router from '~/routes';
import '~/config/AOS';

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster reverseOrder={true} />
        </>
    );
}

export default App;
