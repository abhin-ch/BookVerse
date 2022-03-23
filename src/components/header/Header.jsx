import {Link} from 'react-router-dom';
import MegaMenu from './Menu/MegaMenu';
import MobileMenu from './Menu/MobileMenu';
import React from 'react';
import { useState } from 'react';

const HomesMenu = [
  // {
  //   icon: 'home-smile-2',
  //   title: ' Home page 1',
  //   link: '/home-1',
  // },
  // {
  //   icon: 'home-2',
  //   title: ' Home page 2',
  //   link: '/home-2',
  // },
  // {
  //   icon: 'home-5',
  //   title: ' Home page 3',
  //   link: '/home-3',
  // },
];
const PagesMenu = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'Write',
    link: '/collections',
  },

  {
    title: 'Explore',
    link: '/creators',
  },
    {
    title: ' Profile',
    link: '/profile',
  },
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>

      <header className="header__1">
        <div className="container">
          <div className="wrapper js-header-wrapper">
            <div className="header__logo">
              <Link to="/">
                <img
                  className="header__logo"
                  id="logo_js"
                  src="img/logos/logo.svg"
                  //src={require('/img/logos/logo.png')}
                  alt="logo"
                />
              </Link>
            </div>
     
            {/* =======Search========== */}
            <div className="header__search">
              <input type="text" placeholder="Search" />
              <Link to="no-results" className="header__result">
                <i className="ri-search-line" />
              </Link>
            </div>

  

          {/* =======Tabs===========  */}
            <div className="header__menu">
              <ul className="d-flex space-x-20">
                {PagesMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" to={val.link}>
                      {val.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
            </div>
             {/* ========Wallet==========  */}
             <div className="header__btns">
              <Link className="btn btn-primary" to="connect-wallet">
                <i className="ri-wallet-3-line" />
                   <a> Wallet</a>
              </Link>
            </div>
            
 
            
            <div className="header__burger js-header-burger" onClick={toggleClass}/>
            <div className={` header__mobile js-header-mobile  ${isActive ? 'visible': null} `}>
            <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
