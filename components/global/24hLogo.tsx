import Link from 'next/link';
import logo24H from '../../public/img/24hbible-layer-2.png';
import Image from 'next/image';

const Logo24h = () => {
  return (
    <Link href='/'>
      <Image
        src={logo24H}
        alt='24h Bible Logo'
        style={{ width: '150px', height: 'auto' }}
        className='inline-block mr-2'
        loading='eager'
      />
    </Link>
  );
};

export default Logo24h;
