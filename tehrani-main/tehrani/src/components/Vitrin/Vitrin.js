import React from "react";
import Slider from "react-slick";
import Product from "../Product/Product.js";
import PropTypes from "prop-types";
import axios from 'axios';
import "./Vitrin.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { response } from "express";


function importAll(r){
  return r.keys().map(r);
}

const imgs = importAll(require.context("./Vtrimgs",false,/\.(png|jpe?g|svg)$/));


class Vitrin extends React.Component{
  constructor(props){
    super(props);

    this.state = {

      // products: this.props.products,
      // products: Products,
      products: [],
      productsImage: [],

      settings: {
        dots: true,
        arrows: true,
        infinitive: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // autoplay: true,

        responsive:[
          {
            breakpoint:1024,
            settings:{
              slidesToShow: 3,
              slidesToScroll: 3,
              infinitive: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings:{
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],

      }
    }
  }

  readProductsInfo(){
    // let fs = require("fs");

    // console.log("fs.readFile = " + fs.readFile);
    // fs.readFile("products-details.json",function(err,data){
	  //        if(err){throw err;}
	  //        let obj = JSON.parse(data);
    //        	console.log(obj);
    //         this.setState({products: obj});
    // });

  }
  componentDidMount(){
      if(this.state.products.length < 1){
        axios.get(`/api/clothes/with-flag/${this.props.flag}`).then(response =>{

          console.log("vitrin fetch data");
          this.setState({products: response.data});
        }).catch(error => {
          console.error('error: ',error);
        });
      }

      
  }


  render(){
    let settings = this.state.settings;
    let articles = this.state.products;
    let title = '';
    let flg = this.props.flag;
    let vitrinStyle = "vitrin-container vitrin-border " + this.props.bgColor;

    if(flg === 'newest'){
      title = 'جدیدترین ها';
    }else if(flg === 'mostview'){
      title = 'پر بازدیدترین ها';
    }else if(flg === 'popular'){
      title = 'محبوب ترین ها';
    }
    console.log(articles);

    return(
      <div className={vitrinStyle}>
        <h2 className="vazir-font vitrin-header">{title}</h2>
        <div className="vitrin">
            <Slider {...settings}>
                {
                  articles.map((elem) => {
                        return (
                              <Product
                                  productSrc={elem.filename}
                                  prdcName={elem.Name}
                                  prdcPrice={elem.Price}
                                  prdcId={elem.Id}
                                  prdcSizes={elem.Sizes}
                                  prdcColors={elem.Colors}
                                  prdcDescription={elem.Description}
                                  setCurrent={this.props.allarticlesfnc}
                                  status={this.props.mode}
                                  />
                            );
                          }
                        )
                }
            </Slider>
        </div>
      </div>
    );
  }
}

Vitrin.propTypes ={
  allarticlesfnc: PropTypes.func,
  mode: PropTypes.string
}


export default Vitrin;
