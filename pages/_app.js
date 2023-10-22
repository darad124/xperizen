import Footer from '@/components/footer';
import './globals.css'
import Navbar from "@/components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black bg-repeat bg-pattern bg-size">
       <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;


