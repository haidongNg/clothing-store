import { FC, lazy, Suspense } from 'react';
import { Header, Footer } from './layouts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// lazyload page
const HomePage = lazy(() => import('./pages/home/Home'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const BlogPage = lazy(() => import('./pages/blog/Blog'));
const ContactPage = lazy(() => import('./pages/contact/Contact'));
const NotFoundPage = lazy(() => import('./pages/not-found/NotFound'));
const SigninPage = lazy(() => import('./pages/signin/Signin'));
const SignupPage = lazy(() => import('./pages/signup/Signup'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" children={<HomePage />} exact />
            <Route path="/shop" children={<ShopPage />} />
            <Route path="/contact" children={<ContactPage />} />
            <Route path="/blog" children={<BlogPage />} />
            <Route path="/signin" children={<SigninPage />} />
            <Route path="/signup" children={<SignupPage />} />
            <Route path="*" children={<NotFoundPage />} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>

  );
};

export default App;
