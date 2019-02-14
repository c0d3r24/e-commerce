import React from 'react';

export const BreadCrumbComponent = ({productName}) => {
   return( 
    
	<div className="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
		<a href="index.html" className="s-text16">
			Home
			<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
		</a>

		<a href="product.html" className="s-text16">
			Women
			<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
		</a>

		<a href="#" className="s-text16">
			T-Shirt
			<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
		</a>

		<span className="s-text17">
			{productName}
		</span>
    </div>
    );
}
