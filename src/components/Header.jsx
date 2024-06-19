import React from 'react';
import styles from '../css/modules/Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} bg-primary text-white py-4`}>
      <div className="container">
        <h1 className="text-center">Blog Volleyball</h1>
      </div>
    </header>
  );
};

export default Header;
