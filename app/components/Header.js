import React from 'react';
import styles from './Header.css';
import HeaderRight from './HeaderRight';
import HeaderMiddle from './HeaderMiddle';
import HeaderLeft from './HeaderLeft';

const Header = () => {
  return (
    <div className={styles.container}>
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  );
};

export default Header;
