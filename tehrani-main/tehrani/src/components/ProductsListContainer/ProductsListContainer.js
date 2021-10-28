import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';
import styles from './ProductsListContainer.css';


const ProductsListContainer = () => {

  let [productsData, setProductsData] = useState([]);

  const Row = ({ index, style }) => {
    return (
      <div style={style}>
        {productsData[index].Name}
      </div>
    );
  };


  useEffect(() => {
    axios.get('/api/clothes').then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.error('an error occured when fetch all clothes data in ProductListContainer component', err);
    });
  });

  return (
    <List
      className=""
      height={150}
      itemCount={productsData.length}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}

ProductsListContainer.propTypes = {};

ProductsListContainer.defaultProps = {};

export default ProductsListContainer;
