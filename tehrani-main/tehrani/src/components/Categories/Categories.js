import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';
import './Categories.css';
import boy from './images/boy.jpeg';
import girl from './images/girl.jpeg';

const Categories = () => {
  return (
  <React.Fragment>
    <div className="vazir-font">
      <h1 className="text-center bg-success categories-head ">دسته بندی ها</h1>
      <div className="row row-border-style">
        <div className="col col-sm-6 center-element p-1 boy-bgcolor col-border-style">
          <img src={boy} alt="boy" className="image-border" />
        </div>
        <div className="col col-sm-6 center-element p-1 girl-bgcolor col-border-style">
          <img src={girl} alt="girl" className="image-border" />
        </div>
      </div>
    </div>
  </React.Fragment>);
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
