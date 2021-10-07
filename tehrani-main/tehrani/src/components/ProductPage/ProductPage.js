import React , {useState , useEffect} from 'react';
import ProductInfoTable from '../ProductInfoTable/ProductInfoTable';
import PropTypes from 'prop-types';
// import styles from './ProductPage.module.css';
import { connect } from 'react-redux';
import axios from "axios";
import './ProductPage.css';
import 'bootstrap';


let mapStateToProps = (state) => {
  const { setSelectedProductID } = state;

  console.log(state);
  console.log(state.setSelectedProductID);
  // console.log(state.setSelectedProductID.selectedProductId);

  return {
    chosenProduct: state.setSelectedProductID.selectedProductId
  };
}


const ProductPage = (props) => {

  let port = 4000;
  let serverName = 'http://localhost:' + port + '/';
  const [productId , setProductId] = useState(props.chosenProduct);
  const [productInfo , setProductInfo] = useState(
    {
      Colors: "",
      Description: "---",
      Id: -1,
      Name: "",
      Price: -1,
      Sizes: "",
      filename: null
    }
  );

  useEffect(() => {

    console.log("productId = " + productId);
    console.log("productInfo: ");
    console.log(productInfo.Name);

    let enable = true;

    if(enable){
      console.log("sending get request...");

      axios.get(`/api/clothes/${productId}`).then((response) => {
        console.log(response.data);
        setProductInfo(response.data[0]);
        enable = false;
      }).catch((err) => {
        console.log(err);
      });


    }
  });

  return (
  <div className="container ProductPage">
    <div className="row container-style">
      <div className="col"> 
        <ProductInfoTable prdInfo={productInfo} />
        <button className="btn btn-success btn-lg w-100 .iranianSans-font{
    font-family: Iranian Sans;
}" type="button">سفارش</button>
      </div>
      <div className="col">
        <img className="rounded" src={ serverName + 'images/' + productInfo.filename} alt='product-image' />
      </div>
    </div>
  </div>
  );
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

export default connect(mapStateToProps)(ProductPage);

// export default ProductPage;
