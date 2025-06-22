import { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from '~/app/layouts/Footer';
import Header from '~/app/layouts/Header';
import BackTopTop from '~/components/BackTopTop';

const RootLayout = () => {
    const [top, setTop] = useState(0);

    return (
        <>
            <Header onHeightChange={setTop} />
            <main style={{ marginTop: top }}>
                <Outlet />
            </main>
            <BackTopTop />
            <Footer />
        </>
    );
};

export default RootLayout;
