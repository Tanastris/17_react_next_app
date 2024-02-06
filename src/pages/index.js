import Header from '@/components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-5xl my-4 font-semibold'>Hello next js</h1>
      </div>
    </>
  );
}
