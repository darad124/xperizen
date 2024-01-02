import Footer from '@/components/footer';
import './globals.css'
import Navbar from "@/components/navbar";
import Head from 'next/head'; // <-- import this

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black bg-repeat bg-pattern bg-size">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar  />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
//why!!!!
