import React from 'react';
import { useState } from 'react';
import  LoginPage   from "../LoginPage/LoginPage";
import DashBoard from '../dashboard/dashboard';
import PropTypes from 'prop-types';
import styles from './switchpage.module.css';
import { Route , Redirect } from 'react-router';

const SwitchPage = () => {

    const [loggedIn,setLoggedIn] = useState(false);

    let currentPage = null;

    console.log('loggedIn = ' + loggedIn);

    if(loggedIn){
      currentPage = <DashBoard />;
    }else{
      currentPage = <LoginPage signedIn={loggedIn} setLoggedInFunc={setLoggedIn} />;
    }

    return (
      <div className={styles.switchpage}>
        {currentPage}
      </div>
    );
  };

SwitchPage.propTypes = {};

SwitchPage.defaultProps = {};

export default SwitchPage;
