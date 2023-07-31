/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css'

type Props = {
	children?: JSX.Element;
};


const Layout = ({ children }: Props) => {
	return (
		<React.Fragment>
			<div>
				<Header />
				<div className={'root'}>
					{children}
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Layout;
