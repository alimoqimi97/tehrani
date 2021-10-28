import React from 'react';
import ProductAdder from '../ProductAdder/ProductAdder';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import 'bootstrap';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';
import './dashboard.css';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashBoard = () => {

  const notify = (msg) => {toast.success(msg);};

  notify("شما با موفقیت وارد شدید!");

  
  return (
    <div className="container vazir-font">
      <DashboardSidebar />
      <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      {/* <ProductAdder /> */}
    </div>
  );
};

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
