import {
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCT_DATA_SUCCESS,
    SEARCH_TERM_CHANGED,
    PRODUCT_FILTER_SUCCESS,
    PRODUCT_SORT_SUCCESS
} from './../actions/ActionsTypes';

const INITIAL_STATE = {   
    productList: [],
    product: {},
    storedProductList: [],
    searchTerm:''
} ;

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_SUCCESS:
         return {...state, productList: [...action.payload], storedProductList: [...action.payload]};
        case FETCH_PRODUCT_DATA_SUCCESS:
            return { ...state, product: action.payload};
        case PRODUCT_SORT_SUCCESS:
        case PRODUCT_FILTER_SUCCESS:
            return { ...state, productList: [...action.payload]}
        case SEARCH_TERM_CHANGED: 
            return {...state, searchTerm: action.payload}
        default:
            return state;
    }
}

