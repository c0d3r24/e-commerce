import React, {Fragment} from 'react';
import {BreadCrumbComponent} from './BreadCrumbComponent.component';
import {ProductDetailComponent} from './ProductDetailComponent.component';
export const ProductContentComponent = ({product, size, handleChange}) => {
        return(
            <Fragment>
                <BreadCrumbComponent productName={product.name}/>
                <ProductDetailComponent product={product}
                    size={size}
                    handleChange={handleChange}
                ></ProductDetailComponent>
            </Fragment>
        )
}
