import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from 'components/Navigator';

const Layout = () => {
  return (
    <div>
      <Navigator />
      <Suspense fallback={<p>LOADING...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
