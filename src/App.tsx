import { FC, lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentMember, logout } from './store/actions';
import './App.css';
import { Footer } from './layouts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './core/components';
import jwtDecode from 'jwt-decode';
import { MemberInfo } from './core/models/member-info.model';
import { RootState } from './store/store';
import GuardRoute from './core/guard/GuardRoute';

// lazyload page
const HomePage = lazy(() => import('./pages/home/Home'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const BlogPage = lazy(() => import('./pages/blog/Blog'));
const ContactPage = lazy(() => import('./pages/contact/Contact'));
const NotFoundPage = lazy(() => import('./pages/not-found/NotFound'));
const SigninPage = lazy(() => import('./pages/signin/Signin'));
const SignupPage = lazy(() => import('./pages/signup/Signup'));
const ShopDetailPage = lazy(() => import('./pages/shop-detail/ShopDetail'));
const CheckoutPage = lazy(() => import('./pages/checkout/Checkout'));

type AppProps = {
  logout: () => void;
  setCurrentMember: (data: MemberInfo) => void;
  currentMember: MemberInfo,
};
const App: FC<AppProps> = ({ setCurrentMember, logout, currentMember }) => {
  useEffect(() => {
    const token = localStorage.getItem('STORE');
    if (!token) {
      return;
    }

    const decode: MemberInfo = jwtDecode(token);

    if (!decode) {
      return;
    }

    setCurrentMember(decode);
    if (Date.now() >= decode.exp * 1000) {
      logout();
    }
    // eslint-disable-next-line
  }, [setCurrentMember, logout]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/contact" component={ContactPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/shop" component={ShopPage} exact />
            <Route path="/shop/:id" component={ShopDetailPage} />
            <GuardRoute component={SigninPage} currentMember={currentMember} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentMember: state.member.currentMember,
});

const conector = connect(mapStateToProps, { setCurrentMember, logout });
export default conector(App);
