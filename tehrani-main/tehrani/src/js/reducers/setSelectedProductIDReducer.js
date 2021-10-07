import SET_SELECTED_PRODUCT_ID from '../constants/ActionTypes';

const initialState = {
    selectedProductId: -1
}

const setSelectedProductID = (state = initialState, action) => {

    const { type , payload } = action;

    if( type === SET_SELECTED_PRODUCT_ID){
        return Object.assign({},state,{
            selectedProductId: payload
        });
    }

    return state;
}

export default setSelectedProductID;
