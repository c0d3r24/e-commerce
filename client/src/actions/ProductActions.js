import axios from 'axios';
import {
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCT_DATA_SUCCESS,
    SEARCH_TERM_CHANGED,
    PRODUCT_SORT_SUCCESS,
    PRODUCT_FILTER_SUCCESS
} from './ActionsTypes';
import {sort} from './../utils/sortingResult';

const allProductURI = `/getMany`;
const singleProductURI = `/getSingle/`;

/**
 * Fetch all the products from the given end-point
 */
export const fetch_products = () => async dispatch => {
    try {
        const response = await axios.get(allProductURI);
        const productList = defaultSorting(response.data);
        if(response.status === 200){
            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: productList});
        }
    }catch(err){
        console.log(err);
    }
}

/**
 * 
 * @param {product to retrieve} id 
 */
export const  get_product_data = (id) => async dispatch => {
    try {
        const response = await axios.get(`${singleProductURI}${id}`);
        if(response.status === 200){
            dispatch({type: FETCH_PRODUCT_DATA_SUCCESS, payload: response.data});
        }
    }catch(err){
        console.log(err);
    }
}

/**
 * 
 * @param {term to search for in the list} term 
 * @param {list of currently available products} productList 
 */
export const search_term_changed = (term, productList) => dispatch => {
    try {    
        dispatch({type: SEARCH_TERM_CHANGED, payload: term});
        const filteredProductList = productList.filter(product => {
                const {name} = product;
                if (name.startsWith(term)) return product;
            }
        );
        dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: [...filteredProductList]});
    }catch(err){
        console.log(err);
    }
}

/**
 * 
 * @param {specifies how to sort} option 
 * @param {product list to sort} productList 
 */
export const sort_product = (option, productList) => dispatch => {
    try{
        let sortedProductList = [];
        switch(option){
            case 'popularity':
                sortedProductList = reverseSorting(productList);
                break; 
            case 'priceLowToHigh':
                sortedProductList = priceSortLowToHigh(productList);
                break;
            case 'priceHighToLow':
                sortedProductList = priceSortHighToLow(productList);
                break;
            default: 
                sortedProductList = [...productList];
                return;
        }
        dispatch({type: PRODUCT_SORT_SUCCESS, payload: sortedProductList});
    }catch(err){
        console.log(err);
    }
} 

/**
 * 
 * @param {filter option} option 
 * @param {list to filter from} productList 
 */
export const filter_product = (option, productList) => dispatch => {
    try{
        let filteredProductList = [];
        switch(option){
            case '0-50':
                filteredProductList = productList.filter(product => {
                    const price = parseInt(product.price);
                    if(price >= 0 && price < 50){return product};
                });
                break; 
            case '50-100':
                filteredProductList = productList.filter(product => {
                    const price = parseInt(product.price);
                    if(price >= 50 && price <100)return product;
                });
                break;
            case '100-150':
                filteredProductList = productList.filter(product => {
                    const price = parseInt(product.price);
                    if(price >= 100 && price <150)return product;
                });
                break;
            case '150-200':
                filteredProductList = productList.filter(product => {
                    const price = parseInt(product.price);
                    if(price >= 150 && price <200)return product;
                });
                break;
            case '200':
                filteredProductList = productList.filter(product => {
                    const price = parseInt(product.price);
                    if(price >=200)return product;
                });
                break;
            default: 
                filteredProductList = [...productList];
                return;
        }
        dispatch({type: PRODUCT_FILTER_SUCCESS, payload: filteredProductList});
    }catch(err){
        console.log(err);
    }
} 


// helper functions to sort the result.

const defaultSorting = (array) => {
    return array.sort(sort.compareNameAscending);
}

const reverseSorting = (array) => {
    return array.sort(sort.compareNameDescending);
}

const priceSortLowToHigh = (array) => {
    return array.sort(sort.comparePriceAscending);
}

const priceSortHighToLow = (array) => {
    return array.sort(sort.comparePriceDescending);
}




  
 
