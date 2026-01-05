import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div >
        <h3 className={styles.h3}>Vivek</h3>
        <button className={styles.button}>Login</button>
    </div>
  )
}

export default Header
