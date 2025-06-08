import { useState } from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import BackTopTop from '@components/BackTopTop';

const BaseLayout = () => {
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

export default BaseLayout;
