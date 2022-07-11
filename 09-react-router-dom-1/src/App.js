import { Routes, Route } from 'react-router-dom';

import Navigator from 'components/Navigator';
import { constants } from 'helpers';
import pages from 'pages';

const App = () => {
  const { home, auth, posts, id } = constants;
  const {
    HomePage,
    AuthPage,
    PostsPage,
    PageNonFound,
    OnePostPage,
  } = pages;
  return (
    <main>
      <Navigator />
      <Routes>
        <Route path={home} element={<HomePage />} />
        {/* <Route path={`/${auth}`} element={<AuthPage />} />
        <Route path={`/${posts}`} element={<PostsPage />} /> */}
        <Route path={auth} element={<AuthPage />} />
        <Route path={posts} element={<PostsPage />} />
        <Route
          // path='posts/:postID'
          path={`${posts}/${id}`}
          element={<OnePostPage />}
        />
        {/* Outlet variant
        <Route path={posts} element={<PostsPage />}>
          <Route path=':id' element={<OnePostPage />} />
        </Route> */}

        <Route path='*' element={<PageNonFound />} />
      </Routes>
    </main>
  );
};

export default App;
