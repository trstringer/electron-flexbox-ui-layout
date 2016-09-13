import React, { Component } from 'react';
import styles from './Home.css';
import Header from './Header';
import WorkArea from './WorkArea';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Header />
          <WorkArea />
          <Footer />
        </div>
      </div>
    );
  }
}
