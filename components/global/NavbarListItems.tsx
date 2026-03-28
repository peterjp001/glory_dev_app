import Link from 'next/link';
import MenuItem from './MenuItem';

const NavbarListItems = () => {
  return (
    <>
      <MenuItem href='/' label='Home' />
      <MenuItem href='/bible' label='The Bible' />
      <MenuItem href='/plan' label='My Plans' />
      {/* <MenuItem href='/' label='Settings' />  */}
      <div className='flex items-center ml-4  gap-2'>
        <Link href='/login' className='btn btn-sm btn-primary text-white'>
          Sign In
        </Link>
      </div>
    </>
  );
};

export default NavbarListItems;
