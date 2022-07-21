import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from 'components/Navigator';
import Container from 'components/Container/Container';

const Layout = () => {
  return (
    <>
      <Container>
        <Navigator />
      </Container>
      <Suspense fallback={<p>LOADING...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
