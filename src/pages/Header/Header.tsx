import './Header.scss';
import '../../components/OrderingPage/OrderingPart';
import { Link } from 'react-router-dom';
import { LogInUserPayload, logInUser, logOutUser } from '../../app/currentUserSlice';
import { RootState } from '../../app/store';
import { UserResponse } from '../../models/UserResponse';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import logo from './logo.png';
import logout from './logout.svg';
import navClose from './nav-close.svg';
import navOpen from './nav-open.svg';
import noPhoto from './nophoto.jpg';
import phone from './phone.svg';

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  const currentUserState = useSelector((state: RootState) => state.currentUser);
  const dispatch = useDispatch();
  const user: UserResponse = {
    avatar: '',
    email: '',
    firstName: 'Kerim',
    lastName: 'Alekberov',
    id: 5,
  };
  const payload: LogInUserPayload = { user: user };
  const emulateLogIn = () => dispatch(logInUser(payload));
  const emulateLogOut = () => dispatch(logOutUser(undefined));

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="header header-inside">
      <div className="topHeader">
        <div className="container">
          <div className="header-top-inside">
            <div className="headerTopLeft">
              <select className="langOpt desktop-only" id="lang">
                <option value="AZ">AZ</option>
                <option value="RU">RU</option>
                <option value="ENG">ENG</option>
              </select>
              <div className="header-phone">
                <div>
                  <img src={phone} alt="" className="header-phone-img" />
                </div>
                <a href="tel:+994 12 525 9001" title="">
                  +994 12 525 9001
                </a>
                <a href="tel:+994 50 833 9010" title="">
                  +994 50 833 9010
                </a>
                <a href="tel:+994 99 833 9010" title="">
                  +994 99 833 9010
                </a>
              </div>
            </div>
            <div className="header-top-right">
              {currentUserState.currentUser ? (
                <div className="header-right-logedIn">
                  <div>
                    <Link to="account-page" className="header-account">
                      <div>
                        <img src={noPhoto} alt="" className="header-account-img" />
                      </div>
                      {currentUserState.currentUser.firstName} &nbsp;
                      {currentUserState.currentUser.lastName}
                    </Link>
                  </div>
                  <div className="logOut-div">
                    <Link to="/" onClick={emulateLogOut}>
                      <img src={logout} alt="" />
                      Çıxış
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="account-page" className="inline cboxElement no-wrap" onClick={emulateLogIn}>
                    Daxil ol
                  </Link>
                  <span className="random">/</span>
                  <a href="/az/signup.html" title="">
                    Qeydiyyat
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bottomHeader">
        <div className="container">
          <div className="header-btm-inside">
            <div className="header-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="headerMenu desktop-only">
              <div className="headerList ">
                <li>
                  <Link to={'tarifler'}>Tariflər</Link>
                </li>
                <li>
                  <Link to={'Magazalar'}>Mağazalar</Link>
                </li>
                <li>
                  <Link to={'Faq'}>Faq</Link>
                </li>
                <li>
                  <Link to={'Əlaqə'}>Əlaqə</Link>
                </li>
                <li>
                  <Link to={'Mexfilik'}>Məxfilik</Link>
                </li>
              </div>
            </div>
            {currentUserState.currentUser && (
              <div className="header-cart">
                <Link to="account-page" className="cart-icon">
                  {/* <img src={cart} alt="" /> */}
                  <span className="basket-count">{cartCount}</span>
                </Link>
                <Link to="account-page" className="btn btn-beyan desktop-only">
                  Bəyan Et
                </Link>
                <Link to="account-page" className="btn btn-sifarish desktop-only">
                  <span className="no-wrap">+ Sifariş</span> Et
                </Link>
                {/* nav bar */}
              </div>
            )}
            <nav className="navBar mobile-only">
              <button onClick={handleToggle}>
                {navbarOpen ? <img src={navClose} alt=""></img> : <img src={navOpen} alt=""></img>}
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to={'tarifler'}>Tariflər</Link>
            </li>
            <li>
              <Link to={'Magazalar'}>Mağazalar</Link>
            </li>
            <li>
              <Link to={'Faq'}>Faq</Link>
            </li>
            <li>
              <Link to={'Əlaqə'}>Əlaqə</Link>
            </li>
            <li>
              <Link to={'Mexfilik'}>Məxfilik</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu-bottom">
          <div className="currency">1 USD = 1.70 AZN</div>
          <div className="mobile-lang">
            <ul>
              <li>AZE</li>
              <li>ENG</li>
              <li>RUS</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
