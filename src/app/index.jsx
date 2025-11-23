import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';
import router from '~/routes';
import Poster from '~/components/Poster';
import '~/config/AOS';

function App() {
   const [isOpen, setOpen] = useState(true);

   return (
      <>
         <RouterProvider router={router} />
         <Toaster reverseOrder={true} />
         <Poster open={isOpen} onClose={() => setOpen(false)} />
      </>
   );
}

export default App;
