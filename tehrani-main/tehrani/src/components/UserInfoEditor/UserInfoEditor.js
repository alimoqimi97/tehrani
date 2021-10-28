import React, { useEffect, useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import './UserInfoEditor.css';
import 'bootstrap';
import  serverName  from '../ServerConfig.js';

const UserInfoEditor = (props) => {

  const loggedInUsername = useSelector((state) => state.logIn.username);

  console.log("loggedInUsername = " + loggedInUsername);

  // let [newPassw, setNewPassw] = useState('');
  // let [usernm, setUsernm] = useState('');
  let newPass = '';

  const inputChangeHandle = (event) => {
     newPass = event.target.value;

    console.log('newPass = ' + newPass);

    // setNewPassw(newPass);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // setNewPassw(newPass);
    sendNewPasswordToServer(newPass,loggedInUsername);

  };

  const sendNewPasswordToServer = (newpw,lgu) => {

    const payload = {
      newPassword: newpw,
      username: lgu
    }

    axios.put(serverName + '/api/change-password',payload).then(response => {
      console.log(response.data);

    }).catch((error) => {
      console.error('an error occured in password changing...!',error);
    });
  };

  // useEffect(() => {

  //   const payload = {
  //     newPassword: newPassw,
  //     username: loggedInUsername
  //   }

  //   axios.put('/api/change-password',payload).then(response => {
  //     console.log(response.data);

  //   }).catch((error) => {
  //     console.error('an error occured in password changing...!',error);
  //   });
  // },[loggedInUsername]);

  return (
    <>
      <Form className="form-container form-border form-background" >
        <FormGroup row>
          <Label className="text-white" for="newpassword" sm={2}>رمز عبور جدید :</Label>
          <Col sm={10}>
            <Input type="password" name="newpassword" onChange={inputChangeHandle} id="newpassword" placeholder="رمز عبور جدید" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }} >
            <Button onClick={submitHandler} >ارسال</Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );

};

UserInfoEditor.propTypes = {
  userName: PropTypes.string
};

UserInfoEditor.defaultProps = {};

export default UserInfoEditor;
