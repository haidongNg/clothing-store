import { FC, lazy, Suspense, useEffect } from 'react';
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
const ShopDetailPage = lazy(() => import('./pages/shop-detail/ShopDetail'));

const App: FC = () => {

  useEffect(() => {

  },[]);
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/contact" component={ContactPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/shop" component={ShopPage} exact />
            <Route path="/shop/:id" component={ShopDetailPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>

  );
};

export default App;
