import NextNProgress from 'nextjs-progressbar';
import {Toaster} from 'react-hot-toast'
import { ThemeProvider } from 'styled-components';
import Provider from '../providers';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster />
      <Provider>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
