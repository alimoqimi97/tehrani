import React from "react";
import Vitrin from "../Vitrin/Vitrin.js";
import ArtDetail from "../ArtDetail/ArtDetail.js";
import Products from "../Vitrin/ProductsDetails.js";
import "./AllArticles.css";
import 'bootstrap';

function importAll(r){
  return r.keys().map(r);
}

const imgs = importAll(require.context("./allproducts",false,/\.(png|jpe?g|svg)$/));



class AllArticles extends React.Component
{
  constructor(props){
    super(props);

    this.state ={
      allProducts: Products,
      currentArtc: {
        img: "",
        name: "کالایی جهت مشاهده ی با جزییات بیشتر انتخاب نشده!",
        price: "",
        id: -1,
        sizes: [""],
        colors: [],
        description: ""
      },
    }

  }


  setCurrentProduct = (prdcInfo) => {
    this.setState({currentArtc: prdcInfo});
  }



  render(){

    let articles = this.state.allProducts;
    let prdcs = [];

    for(let i = 0 ; i < imgs.length ; i++){
      prdcs.push({
        prdcSrc: imgs[i],
        prdcName: articles[i].productName,
        prdcDesc: articles[i].prdcDescription,
        prdcPrice: articles[i].prdcPrice,
        prdcId: articles[i].prdcId,
        prdcColors: articles[i].prdcColors,
        prdcSizes: articles[i].prdcSizes
      });
    }

    // console.log(prdcs);

    // let prdcs = imgs.map((elem,indx) => {
    //
    //   return ({
    //     prdcSrc: elem,
    //     prdcName: articles[indx].productName,
    //     prdcDesc: articles[0].prdcDescription,
    //     prdcPrice: articles[0].prdcPrice,
    //     prdcId: articles[0].prdcId,
    //     prdcColors: articles[0].prdcColors,
    //     prdcSizes: articles[0].prdcSizes
    //   });
    // });

    // console.log(prdcs);

    // let prdcs = imgs.map((elem, indx) => {
    //   return ({
    //     prdcSrc: elem,
    //     // productName: " ",
    //     // prdcDesc: " "
    //     prdcName: indx + "نام محصول " ,
    //     prdcDesc: "توضیحات مخصول " + indx
    //   });
    // });



    // let prdcs = imgs.map((elem, indx) => {
    //   return ({
    //     prdcSrc: elem,
    //     prdcName: Products[indx].productName,
    //     prdcDesc: Products[indx].prdcDescription
    //   });
    // });

    // let prdcs;

    return(
      <div className="text-center">
        <h2>All Products Page</h2>
        <p>Under construction...</p>
        {/* <Vitrin products={prdcs} allarticlesfnc={this.setCurrentProduct} mode="allarticles" />
        <ArtDetail artInfo={this.state.currentArtc} /> */}
      </div>
    );
  }
}

export default AllArticles;
