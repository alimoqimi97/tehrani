# Tehrani
This project is an online Children's clothing store that has been implemented by order of one of my relatives. Butو it was not completed due to their lack of follow-up.
I used reactjs and bootstrap(reactstrap library) for implementing it.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot or gif](#demo)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge
- in this website, products must show in main page and any of them has buttons attached to them for opening detail page of it(product info like size,color,price and etc) and buy.
- by clicking on buy button, sailer info(name , phone, social links,...) will show on a modal to contact him.
- implementing a dashboard with a simple login form to adding, removing ,show all ,... products. therefore, a form for entering product info with **image upload**(to server) implemented in it.
- implementing cart is not necessary(according to customer order). 



### demo

![tehrani-website-overview](https://github.com/alimoqimi97/tehrani/blob/main/tehrani-main/70ba92342f98df3b170dd05810580177.gif)


### Links

- Live Site URL: [video of demo](https://www.aparat.com/v/bJSPx)

## My process

### Built with

- HTML
- CSS 
- Javascript
- react-redux
- axios
- react-router
- bootstrap
- [React](https://reactjs.org/) - JS library
- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page) - reactjs framework.

### What I learned

- api call with axios:
```js
 componentDidMount(){
      if(this.state.products.length < 1){
        axios.get(`/api/clothes/with-flag/${this.props.flag}`).then(response =>{
          this.setState({products: response.data});
        }).catch(error => {
          console.error('error: ',error);
        });
      }
  }
```

- uploading a file to server:
```js
let imageFile_formData = new FormData();
imageFile_formData.append('file',this.state.selectedFiles);
this.imageUpload(imageFile_formData);
```
```js
imageUpload = (imgFd) => {
    axios.post('/api/clothes/upload',imgFd).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }
```

- working with redux:
```js
import { createSlice } from "@reduxjs/toolkit";

export const pIdSlice = createSlice({
    name: "Product Id Slice",
    initialState: {
        selectedProductId: 0
    },
    reducers: {
        setSelectedProductId: (state,action) => {
            state.selectedProductId = action.payload;
        }
    }
});

export const { setSelectedProductId } = pIdSlice.actions;

export default pIdSlice.reducer;
```
```js
let mapStateToProps = (state) => {
  const { setSelectedProductID } = state;

  return {
    chosenProduct: state.select.selectedProductId
  };
}
```
- working with react-router:
```jsx
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
          </Route>
  </Switch>
```

- working with react hooks:
```js
const [productId , setProductId] = useState(props.chosenProduct);

useEffect(() => {
    let enable = true;

    if(enable){
      axios.get(`/api/clothes/${productId}`).then((response) => {
        setProductInfo(response.data[0]);
        enable = false;
      }).catch((err) => {
        console.log(err);
      });
    }
  });
```

### Continued development

I will focus on working with react hooks and functional components in future projects. also, implementing shopping cart and online payment for such projects.

### Useful resources

- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page) - This helped me for implementing app with react and bootstrap framework. 
- [react-redux](https://react-redux.js.org/tutorials/quick-start) - This is an amazing article which helped me finally understand react-redux. I'd recommend it to anyone still learning this concept.

## Author

- Resume - [Ali Moghimi](https://cvbuilder.me/Resume/fa/6479e813-4612-4b05-830d-4b23f77d9502?template=template26)
- GitHub - [ali moghimi](https://github.com/alimoqimi97)
- LinkedIn - [alimoqimi97](https://www.linkedin.com/in/ali-moghimi-842464174)
