import React from 'react';
import { useSelector } from 'react-redux';
import GlobalSearch from '../../../components/GlobalSearch';
import logo from '../../../assets/img/logo.png';
import { Basket, User } from '../../../components/Icons';
import './Header.scss';

function Header() {
  const total = useSelector((state) => state.basket);
  return (
    <header className="header">
      <div className="wrapper flex flex-wrap align-items-center">
        <a className="logo" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <GlobalSearch />
        <div className="ml-auto">
          <div className="basketPrice">
            <Basket />
            <span>{total.totalPrice ? total.totalPrice : '0'} ₺</span>
          </div>
          <div className="user ml-2">
            <User />
            <span>Kerem</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
