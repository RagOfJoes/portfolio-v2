import React from 'react';
import Head from 'next/head';
import theme from 'lib/theme';
import PropTypes from 'prop-types';
import 'public/stylesheets/reset.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const Index = (props) => {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Victor Ragojos | Portfolio</title>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
};

Index.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default Index;