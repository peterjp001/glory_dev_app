import MenuItem from './MenuItem';

const NavbarListItems = () => {
  return (
    <>
      <MenuItem href='/' label='Home' />
      <MenuItem href='/bible' label='The Bible' />
      <MenuItem href='/plan' label='My Plans' />
      {/* <MenuItem href='/' label='Settings' />  */}
      <div className='flex items-center ml-4  gap-2'>
        <button className='btn btn-sm text-base-700  border-gray-600  dark:hover:bg-gray-700'>
          Sign up
        </button>
        <button className='btn btn-sm btn-primary text-white'>Sign In</button>
      </div>
    </>
  );
};

export default NavbarListItems;
