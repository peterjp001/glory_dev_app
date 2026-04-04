import { Sidebar } from '../../components/dashboard/Sidebar';
import { AppNavbar } from '../../components/dashboard/AppNavbar';
import { DrawerToggle } from '../../components/dashboard/DrawerToggle';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className='drawer lg:drawer-open'>
    {/* <input id='sidebar-toggle' type='checkbox' className='drawer-toggle' /> */}
    <DrawerToggle />
    <div className='drawer-content flex flex-col'>
      <AppNavbar />
      <main className='p-6 flex-1'>{children}</main>
    </div>
    <Sidebar />
  </div>
);

export default Layout;
