import React from 'react';
import ProductAdder from '../ProductAdder/ProductAdder';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import 'bootstrap';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';
import './dashboard.css';

const DashBoard = () => (
  <div className="container vazir-font">
    <DashboardSidebar />
    {/* <ProductAdder /> */}
  </div>
);

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
