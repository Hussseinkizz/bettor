import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import AppBar from '../components/AppBar';

const Home: NextPage = () => {
  return (
    <div
      id="App"
      className="flex flex-col justify-center items-center px-2 min-h-screen md:px-4"
    >
      <Head>
        <title>Bettor App</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      {/* The app header */}
      <AppBar />
      <main className="flex flex-col flex-1 justify-center items-center px-20 w-full text-center">
        <h1 className="font-bold">Show Data</h1>
      </main>
      <footer className="flex justify-center items-center py-2 w-full border-t text-small">
        &copy; 2022 Bettor.io
      </footer>
    </div>
  );
};

export default Home;
