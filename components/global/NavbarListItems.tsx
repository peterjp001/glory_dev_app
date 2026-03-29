import Link from 'next/link';
import MenuItem from './MenuItem';

const NavbarListItems = () => {
  return (
    <>
      <MenuItem href='/' label='Accueil' />
      <MenuItem href='/bible' label='La Bible' />
      <MenuItem href='/plan' label='Mes Plans' />
      <MenuItem href='/about' label='À Propos' />
      {/* <MenuItem href='/' label='Settings' />  */}
      <div className='flex items-center ml-4  gap-2'>
        <Link href='/login' className='btn btn-sm btn-primary text-white'>
          Se Connecter
        </Link>
      </div>
    </>
  );
};

export default NavbarListItems;
