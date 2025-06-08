import { RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';
import router from '@routes';
import '@config/AOS';
import '@assets/styles/index.scss';

function App() {
   return (
      <>
         <RouterProvider
            future={{
               v7_startTransition: true
            }}
            router={router}
         />
         <Toaster reverseOrder={true} />
      </>
   );
}

export default App;
