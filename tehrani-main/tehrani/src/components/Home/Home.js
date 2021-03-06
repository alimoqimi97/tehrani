import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BillBoard from "../BillBoard/BillBoard.js";
import ShopGuide from "../ShopGuide/ShopGuide.js";
import Vitrin from "../Vitrin/Vitrin.js";
import Introduction from "../Introduction/Introduction.js";
import Advert from "../Advert/Advert.js";
import Categories from "../Categories/Categories";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
// import mario from "../Advert/images/mario.png";
import blogImage from '../Advert/images/blog10.jpg';
import Articles from "../Vitrin/ProductsDetails.js";
import ToolBar from "../ToolBar/ToolBar";
import 'bootstrap';

function importAll(r){
  return r.keys().map(r);
}

// const imgs = importAll(require.context("./products-images",false,/\.(png|jpe?g|svg)$/));
const imgs = importAll(require.context("../AllArticles/allproducts",false,/\.(png|jpe?g|svg)$/));

class Home extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !(this.state.modalIsOpen)
    });
  }

  render(){

    let products = [];
    let articles = Articles;

    for(let i = 0 ; i < imgs.length ; i++){
      products.push({
        prdcSrc: imgs[i],
        prdcName: articles[i].productName,
        prdcDesc: articles[i].prdcDescription,
        prdcPrice: articles[i].prdcPrice,
        prdcId: articles[i].prdcId,
        prdcColors: articles[i].prdcColors,
        prdcSizes: articles[i].prdcSizes
      });
    }

    // let products = imgs.map((elem, indx) => {
    //   return ({
    //     prdcSrc: elem,
    //     prdcName: indx + "نام محصول " ,
    //     prdcDesc: "توضیحات مخصول " + indx
    //   });
    // });

    let columns = [ {
      title: "ارتباط با ما",
      url: "#",
      description: "description",
      openExternal: true
    },
    {
      title: "همه ی کالاها",
      url: "#",
      description: "description 2",
      openExternal: true
    },
    {
      title: "سفارش",
      url: "#",
      description: "order",
      openExternal: true
    }

  ];

    return (
      <div style={{width: "100%" , height: "100%" , backgroundColor: "white"}}>
        {/* <ToolBar /> */}
        <BillBoard />
        <Categories />
        <Vitrin flag="newest" allarticlesfnc={this.toggleModal} bgColor="bg-warning" />
        <Vitrin flag="popular" allarticlesfnc={this.toggleModal} bgColor="bg-success"/>
        <Vitrin flag="mostview" allarticlesfnc={this.toggleModal} bgColor="bg-info" />
        {/* <Vitrin products={products} allarticlesfnc={this.toggleModal} /> */}
        <ShopGuide show={this.state.modalIsOpen} changeModalStatus={this.toggleModal} />
        <Introduction />
        <Advert backgroundPic={blogImage} />
        <Footer columns={columns} bottom="Made by Ali Moghimi" />
      </div>
    );
  }
}

export default Home;
