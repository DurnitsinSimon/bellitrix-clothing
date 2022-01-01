import type { AppProps } from 'next/app';
import '../styles/NullStyles.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
