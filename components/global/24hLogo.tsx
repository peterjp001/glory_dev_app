import Link from 'next/link';
import logo24H from '../../public/img/24hbible-layer-2.png';
import Image from 'next/image';
const Logo24h = () => {
  return (
    <>
      <Link href='/' className=''>
        <Image
          src={logo24H}
          alt='24h Bible Logo'
          width={150}
          height={150}
          className='inline-block mr-2'
        />
      </Link>
    </>
  );
};

export default Logo24h;
