import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './ProductAdder.module.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import './ProductAdder.css';
import 'bootstrap';

class ProductAdder extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      selectedFiles: null,
      loaded: 0,
      pname: "No product name",
      price: "No price",
      sizes: "No sizes",
      colors: "No colors",
      Description: "-----",
      pId: -1,
      Category: "No Cat",
      originalFlName: ""
    }
  }

  changeHandler = (event) => {
    // console.log(event.target.files[0]);
    this.setState({
      selectedFiles: event.target.files[0],
      loaded: 0
    });
  }

  clickHandler = () => {
    let imageFile_formData = new FormData();
    let productInfo = {
      Name: this.state.pname,
      Price: this.state.price,
      Sizes: this.state.sizes,
      colors: this.state.colors,
      Description: this.state.Description,
      Category: this.state.Category,
      imgFilename: this.state.selectedFiles.name
    }
    // let productForm_formData = new FormData();

    imageFile_formData.append('file',this.state.selectedFiles);

    console.log(this.state.selectedFiles);

    // create new product (send product info to backend)
    this.createProduct(productInfo);

      // upload product image to server.
    this.imageUpload(imageFile_formData);

    // this.sendImageFilename(this.state.originalFlName,this.state.pId);



    // productForm_formData.append("",)
  }

  categoryTranslator = (persianCatName) => {

    if(persianCatName === 'پسرانه'){
      return 'boy';
    }

    return 'girl';
  }

  inputChangeHandler = (event) => {
    const name = event.target.name;
    let value = event.target.value;


    // console.log("name = " + name);
    // console.log("value = " + value);

    if(name === 'Category'){
      console.log('category translation.');
      value = this.categoryTranslator(value);
    }

    this.setState({[name] : value});
  }

  createProduct = (product) => {
    axios.post('/api/create-cloth',product).then((response) =>{
      console.log("product created successfully");
      console.log(response.data);
      this.setState({pId: response.data.Id});
    },(error) => {
      console.log(error);
    });
  }

  imageUpload = (imgFd) => {

    axios.post('/api/clothes/upload',imgFd).then((response) => {
      console.log(response.data);
      // this.setState({originalFlName: response.data.origFileName});

    }).catch((err) => {
      console.log(err);
    });

    // axios.post('/api/clothes/upload/filename',{productId: , filename: })
  }

  sendImageFilename = (origFileName,pId) => {
    let prInfo = {
      filename: origFileName,
      productId: pId
    }

    console.log(prInfo.filename + " " + prInfo.productId);
    
    axios.post('/api/clothes/upload/filename',prInfo).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.error("sending image filename failed",err);
    });
  }

  render(){
    return (
       <div className="ProductAdder vazir-font"> 
        <h2 className="mainHeader">افزودن کالا</h2>
        <Form encType="multipart/form-data">
          <FormGroup row>
            <Label for="pname" sm={2}>نام محصول :</Label>
            <Col sm={10}>
              <Input type="text" name="pname" onChange={this.inputChangeHandler} id="prdName" placeholder="نام محصول" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>قیمت :</Label>
            <Col sm={10}>
              <Input type="number" name="price" onChange={this.inputChangeHandler} id="prdPrice" placeholder="قیمت" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="sizes" sm={2}>اندازه ها :</Label>
            <Col sm={10}>
              <Input type="text" name="sizes" onChange={this.inputChangeHandler} id="prdSizes" placeholder="اندازه ها" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="colors" sm={2} >رنگ بندی :</Label>
            <Col sm={10}>
              <Input type="color" name="colors" onChange={this.inputChangeHandler} id="prdColors" placeholder="رنگ بندی" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Description" sm={2}>توضیحات محصول :</Label>
            <Col sm={10}>
              <Input type="textarea" onChange={this.inputChangeHandler} name="Description" id="dsc" />
            </Col>
          </FormGroup>
          <FormGroup row>
              <Label for="Category" >دسته بندی</Label>
              <Col sm={10}>
                  <Input type="select" name="Category" onChange={this.inputChangeHandler} id="cat">
                    <option>دخترانه</option>
                    <option>پسرانه</option>
                  </Input>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="img" sm={2}>تصویر محصول:</Label>
            <Col sm={10}>
              <Input type="file" name="img" id="prdcImage" onChange={this.changeHandler} />
            </Col>
            <FormText color="muted">
              لطفا تصویر محصول را بارگذاری نمایید.
            </FormText>
          </FormGroup>
          <FormGroup row>
            <Col sm={{size: 10, offset: 2 }}>
              <Button color="success" onClick={this.clickHandler}>ارسال</Button>
            </Col>
          </FormGroup>
        </Form>
        {/* <form encType="multipart/form-data">
          <input type="file" name="file" onChange={this.changeHandler} />
          <button type="button" className="btn btn-success btn-block" onClick={this.clickHandler}>Upload</button>
        </form> */}
      </div>
    );
  }
}
ProductAdder.propTypes = {};

ProductAdder.defaultProps = {};

export default ProductAdder;
