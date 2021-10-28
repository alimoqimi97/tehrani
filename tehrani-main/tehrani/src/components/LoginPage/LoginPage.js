import React from "react";
import { Fragment } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";
import "./LoginPage.css";

import { setUsername } from "../../features/LoginSlice.js";

//  setUsername is an action creator that takes logged in user username as payload
//  and creates an action and returns it. then created action gives to dispatch function
//  for dispatching this action. also saveUsernameInStore function is a function that does
//  anything we explained above.
const mapDispatchToProps = (dispatch) => {
  return {
    saveUsernameInStore: (usrnm) => {dispatch(setUsername(usrnm));}
  };
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      value: null,
      alertContent: "hello"
    };
    this.usrInput = React.createRef();
    this.setUsrInput = (element) => {
      this.usrInput = element;
      console.log(element);
      this.setState({ value: this.usrInput.value });
    }

    this.username = '';
    this.password = '';

  }

  // setUsrInput = (element) => {
  //   this.usrInput = element;
  //   console.log("setusrinput:: usrInput = " + this.usrInput);
  // }

  setAlertContent = (cnt) => {
    debugger;
    this.setState({ alertContent: cnt });
  }

  submitHandler = () => {
    this.focusOnText();

    //  saving current user username in store for using it in
    //  dashboard component(UserEditInfo component exactly).
    this.props.saveUsernameInStore(this.username);

    // authentication operation.
    axios.get(`/api/users/${this.username}`).then((response) => {
      console.log("successfull get request");
      console.log(response.data);
      const sailerFetchedInfo = response.data;
      const inputInfo = {
        username: this.username,
        password: this.password
      }
      let altCnt = "";

      console.log(sailerFetchedInfo);
      console.log(inputInfo);

      if (inputInfo.username === sailerFetchedInfo.username &&
        inputInfo.password === sailerFetchedInfo.password) {

        altCnt = `Welcome ${sailerFetchedInfo.username}`;
        console.log(`welcome ${sailerFetchedInfo.username}`);
        this.props.setLoggedInFunc(true);

      } else {
        altCnt = "Username or Password not found!";
        console.log('user not found.');
        this.props.setLoggedInFunc(false);
      }

      // this.setState({alertContent: altCnt});

      this.setAlertContent(altCnt);

    }).catch(() => {
      console.log("get request failed");
    });

  }

  saveUsername = (e) => {
    this.username = e.target.value;
  }
  savePassword = (e) => {
    this.password = e.target.value;
  }
  focusOnText = () => {
    this.usrInput.current.focus();
  }

  render() {
    return (
      <Fragment>
        <div className="login-page">
          <Form className="login-form">
            <FormGroup row className="mb-2 mr-sm-2 frm-grp-position">
              <Label for="exampleEmail" className="mr-sm-2" >نام کاربری: </Label>
              <Col sm={10}>
                <Input type="text" onChange={this.saveUsername} name="username" id="exampleEmail" placeholder="نام کاربری" ref={this.usrInput} required />
              </Col>
            </FormGroup>
            <FormGroup row className="mb-2 mr-sm-2 frm-grp-position">
              <Label for="examplePassword" className="mr-sm-2 form-label" >رمز عبور: </Label>
              <Col sm={10}>
                <Input type="password" onChange={this.savePassword} name="password" id="examplePassword" placeholder="رمز عبور " required />
              </Col>
            </FormGroup>

            <div className="btn-form">
              {/* <input type="submit" value="enter" onClick={this.focusOnText} /> */}
              <Button color="info" onClick={this.submitHandler} block>ورود</Button>
            </div>
          </Form>

          {/* <Alert color="danger">{this.state.alertContent}</Alert> */}
        </div>
        {/* <Alert className="alert" color="danger">{this.state.alertContent}</Alert> */}
      </Fragment>
    );
  }
}


export default connect(null,mapDispatchToProps)(LoginPage);
