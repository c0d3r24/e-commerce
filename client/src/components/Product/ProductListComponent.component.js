import React from 'react';


import {ProductItemComponent} from './ProductItemComponent';
import {TopFilterComponent} from './TopFilterComponent';

export const ProductListContentComponent = ({
    productList, 
    handleSorting, 
    handleFiltering,
    filterValue,
    sortingValue,
  }) => {
    return (
        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <TopFilterComponent 
                handleSorting={handleSorting} 
                sortingValue={sortingValue}
                handleFiltering={handleFiltering}
                filterValue= {filterValue}    
                />
            <div className="row">
                {renderProductList(productList)}
            </div>
            
        </div>
    )
}

const renderProductList = (productList)=>{

    return productList.map((product) => {
      
      return (<ProductItemComponent  
              key={product._id} 
              product={product}
            />);
        });
  }