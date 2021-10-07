import React from 'react';
import PropTypes from 'prop-types';
import styles from './SidebarContent.module.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route , Switch , Link , useRouteMatch } from 'react-router-dom';
import 'bootstrap';
import './SidebarContent.css';


const SidebarContent = () => {
  let match = useRouteMatch();

  console.log(match);

  return (
    <Router>
      <Fragment>
        <h2>داشبورد مدیریتی</h2>
        <ul className="unstyled-list d-block">
          <li className="d-block unstyled-link "><Link to="/dashboard/add-product">اضافه کردن کالا</Link></li>
          <li className="d-block unstyled-link "><Link to="/dashboard/delete-product">حذف کالا</Link></li>
          <li className="d-block unstyled-link "><Link to="/dashboard/user-account-info">تنظیمات حساب کاربری</Link></li>
          <li className="d-block unstyled-link "><Link to="/">خروج</Link></li>
        </ul>
      </Fragment>
    </Router>
  );
};

SidebarContent.propTypes = {};

SidebarContent.defaultProps = {};

export default SidebarContent;
