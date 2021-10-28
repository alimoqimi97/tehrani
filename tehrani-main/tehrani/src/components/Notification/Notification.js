import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = (notif, info) => {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notifTheme: theme,
        show: this.props.open
      }

      if(this.state.show){
        this.notify(info.message,info.theme);
      }
    }

    notify = (msg,thm) => {
      toast('', { type: theme });
    }

    render() {
      return (
        <>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      );
    }
  }

};

Notification.propTypes = {};

Notification.defaultProps = {};

export default Notification;
