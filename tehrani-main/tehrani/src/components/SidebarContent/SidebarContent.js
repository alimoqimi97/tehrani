import React from 'react';
import PropTypes from 'prop-types';
import styles from './SidebarContent.module.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';
import 'bootstrap';
import './SidebarContent.css';


const SidebarContent = () => {
  let match = useRouteMatch('/dashboard');
  let history = useHistory();

  console.log(match);

  if (match !== null){

    console.log('matched');

    return (
      
      <Fragment>
        <h2>داشبورد مدیریتی</h2>
        <ul className="unstyled-list d-block">
          <li className="d-block unstyled-link "><Link to={`${match.url}/add-product`}>اضافه کردن کالا</Link></li>
          <li className="d-block unstyled-link "><Link to={`${match.url}/delete-product`}>حذف کالا</Link></li>
          <li className="d-block unstyled-link "><Link to={`${match.url}/user-account-info`}>تنظیمات حساب کاربری</Link></li>
          <li className="d-block unstyled-link "><Link to="/">خروج</Link></li>
        </ul>
      </Fragment>
      
    );
  }

  // localStorage.clear("token");
  // history.push("/");

  return (<Redirect to="/" push={true} />);
};

SidebarContent.propTypes = {};

SidebarContent.defaultProps = {};

export default SidebarContent;
