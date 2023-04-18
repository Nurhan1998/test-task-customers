import type { AppProps } from 'next/app';

import CustomersContextProvider from '../common/hooks/useCustomersContext';
import '../styles/globals.css';

const TestTaskApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomersContextProvider>
      <Component {...pageProps} />
    </CustomersContextProvider>
  );
};

export default TestTaskApp;
