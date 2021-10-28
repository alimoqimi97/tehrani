import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInfoTable.module.css';
import 'bootstrap';
import './ProductInfoTable.css';

const ProductInfoTable = (props) => {

  const productData = props.prdInfo;
  const colors = productData.Colors;

  return (
    <div className="bg-white vazir-font">
      <table className="table table-striped table-hover iranianSans-font">
        <thead>
          <tr>
            <th scope="col" >نام کالا</th>
            <th scope="col">اندازه ها</th>
            <th scope="col">رنگ بندی</th>
            <th scope="col">قیمت</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productData.Name}</td>
            <td>{productData.Sizes}</td>
            <td> <div style={{backgroundColor: `${productData.Colors}`,height: "25px"}} ></div> </td>
            {/* <td>{productData.Colors}</td> */}
            <td>{productData.Price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ProductInfoTable.propTypes = {};

ProductInfoTable.defaultProps = {};

export default ProductInfoTable;
