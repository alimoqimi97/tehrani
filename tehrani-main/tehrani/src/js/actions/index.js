import  SET_SELECTED_PRODUCT_ID  from "../constants/ActionTypes";

export const setSelectedProductId = (payload) => {

    return {
        type: SET_SELECTED_PRODUCT_ID,
        payload: payload
    };
}



