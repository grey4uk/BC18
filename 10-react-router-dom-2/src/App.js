import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { constants } from 'helpers';
import pages from 'pages';

import Register from 'components/Register';
import Gallery from 'components/Gallery';
const Login = lazy(() =>
  import(
    './components/Login' /* webpackChunkName: "Login" */
  )
);

const App = () => {
  const {
    home,
    auth,
    register,
    posts,
    id,
    layout,
    gallery,
  } = constants;
  const {
    HomePage,
    AuthPage,
    PostsPage,
    PageNonFound,
    OnePostPage,
    Layout,
  } = pages;
  return (
    <main>
      <Routes>
        <Route path={layout} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={gallery} element={<Gallery />} />

          <Route path={auth} element={<AuthPage />}>
            <Route index element={<Login />} />
            <Route path={register} element={<Register />} />
          </Route>
          <Route path={posts} element={<PostsPage />} />
          <Route
            path={`${posts}/${id}`}
            element={<OnePostPage />}
          />
          <Route path='*' element={<PageNonFound />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
