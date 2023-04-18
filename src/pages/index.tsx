import type { NextPage } from 'next';
import Head from 'next/head';

import VerticalLine from '../components/VerticalLine';
import CustomerCreationForm from '../containers/CustomerCreationForm';
import CustomersList from '../containers/CustomersList';

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className='w-full flex'>
        <CustomerCreationForm />
        <VerticalLine />
        <CustomersList />
      </div>
    </>
  );
};

export default Home;
