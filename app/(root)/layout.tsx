import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import ScrollToTop from '@/components/global/ScrollToTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center pt-4 relative'>
      <div className='w-11/12 lg:w-5/6 transition-all duration-300'>
        <Navbar />
        <div className='mt-5 min-h-screen pb-5 '>{children}</div>
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}
