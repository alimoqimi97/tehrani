import React from 'react';
import Sidebar from "react-sidebar";
import PropTypes from 'prop-types';
import styles from './DashboardSidebar.module.css';
import SidebarContent from '../SidebarContent/SidebarContent';
import { BrowserRouter as Router, Route, Switch, matchPath, withRouter } from 'react-router-dom';
import 'bootstrap';
import './DashboardSidebar.css';
import ProductAdder from '../ProductAdder/ProductAdder';
import FormGroup from 'reactstrap/lib/FormGroup';
import UserInfoEditor from '../UserInfoEditor/UserInfoEditor';

// const DashboardSidebar = () => (
//   <div className={styles.DashboardSidebar}>
//     DashboardSidebar Component
//   </div>
// );







// const mql = window.matchMedia(`(min-width: 800px)`);

// class DashboardSidebar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarDocked: mql.matches,
//       sidebarOpen: false
//     };

//     this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   componentWillMount() {
//     mql.addListener(this.mediaQueryChanged);
//   }

//   componentWillUnmount() {
//     mql.removeListener(this.mediaQueryChanged);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   mediaQueryChanged() {
//     this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
//   }

//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>داشبورد مدیریتی اجناس</b>}
//         open={this.state.sidebarOpen}
//         docked={this.state.sidebarDocked}
//         onSetOpen={this.onSetSidebarOpen}
//       >
//         <br />
//         <b>Main content</b>
//       </Sidebar>
//     );
//   }
// }



class DashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };



    console.log(this.props.match);

    this.openButtonIcon = '>';
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
    this.changeButtonIcon();
  }

  changeButtonIcon = () => {
    if (this.state.sidebarOpen) {
      this.openButtonIcon = '<';
    } else {
      this.openButtonIcon = '>';
    }

  }

  render() {
    // let windowHeight = window.innerHeight;

    // console.log(this.match);
    let match = this.props.match;

    return (
      <Router>

        <Sidebar
          sidebar={<SidebarContent />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >

          <button type="button" className="btn btn-info btn-sm open-btn-position" onClick={() => this.onSetSidebarOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </button>
        </Sidebar>

        <Switch>
          <Route path={`${match.path}/add-product`}>
            <ProductAdder />
          </Route>
          <Route path={`${match.path}/delete-product`}>
            <h1>delete product</h1>
            <p>Under construction...</p>
          </Route>
          <Route path={`${match.path}/user-account-info`}>
            <UserInfoEditor />
          </Route>
          <Route path={`${match.path}`}>
            <ProductAdder />
            {/* <h3>Please select a topic.</h3> */}
          </Route>
        </Switch>

      </Router>
    );
  }
}


DashboardSidebar.propTypes = {};

DashboardSidebar.defaultProps = {};

export default withRouter(DashboardSidebar);
