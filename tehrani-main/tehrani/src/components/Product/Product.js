import React from "react";
import {  Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setSelectedProductId } from "../../js/actions";
import { Button , ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";
import "./Product.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setChosenProductId: (productID) => {dispatch(setSelectedProductId(productID));}
  };
}


class Product extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      imgSrc: this.props.productSrc,
      prdcName: this.props.prdcName,
      prdcPrice: this.props.prdcPrice + " تومان",
      prdcId: this.props.prdcId,
      prdcSizes: this.props.prdcSizes,
      prdcColors: this.props.prdcColors,
      prdcDescription: this.props.prdcDescription,
    }

    // console.log(this.state);
  }

  handleClick = () => {

    let article = {
      img: this.state.imgSrc,
      name: this.state.prdcName,
      price: this.state.prdcPrice,
      id: this.state.prdcId,
      sizes: this.state.prdcSizes,
      colors: this.state.prdcColors,
      description: this.state.prdcDescription
    }

    // this.props.setCurrent(article);
  }

  linkClickHandle = () => {
        //  dispatch the selected product ID.
        console.log("prdcId = " + this.state.prdcId);
        this.props.setChosenProductId(this.state.prdcId);    
  }
  render(){

    let seeDetails = null;
    let btnTxt ;

    if(this.props.status === "home"){
        seeDetails = <Link to="/product-page" onClick={this.linkClickHandle} className="btn btn-info">مشاهده جزییات</Link>
    }

    if(this.props.status === "allarticles"){
      btnTxt = "جزییات";
    }else {
      btnTxt = "خرید";
    }

    return(

      <div className="products vazir-font">
          <img className="prdc-img" src={'http://localhost:4000/images/' + this.state.imgSrc} alt="productImage" />
            <h4>{this.state.prdcName}</h4>
            <p>{this.state.prdcPrice}</p>
            <ButtonGroup>
            <Button onClick={this.handleClick} color="info" >{btnTxt}</Button>
              {
                seeDetails
              }
            </ButtonGroup>
      </div>


    );
  }
}


Product.defaultProps = {
  status: "home"
}

// Product.propTypes = {
//   prdcName: PropTypes.string,
//   prdcPrice: PropTypes.string,
//   prdcId: PropTypes.string,
//
// }


export default connect(null,mapDispatchToProps)(Product);

// export default Product;
