import React from 'react';

export const TopFilterComponent = ({sortingValue,filterValue,handleSorting, handleFiltering}) =>  {
    return (
        <div className="flex-sb-m flex-w p-b-35">
						<div className="flex-w">
							<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select value={sortingValue} onChange={handleSorting} className="selection-2" name="sorting">
									<option value="default">Default Sorting</option>
									<option value="popularity">Popularity</option>
									<option value="priceLowToHigh">Price: low to high</option>
									<option value="priceHighToLow">Price: high to low</option>
								</select>
							</div>

							<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select value={filterValue} onChange={handleFiltering}className="selection-2" name="sorting">
									<option value="Price">Price</option>
									<option value="0-50">$0.00 - $50.00</option>
									<option value="50-100">$50.00 - $100.00</option>
									<option value="100-150">$100.00 - $150.00</option>
									<option value="150-200">$150.00 - $200.00</option>
									<option value="200">$200.00+</option>
								</select>
							</div>
						</div>

						<span className="s-text8 p-t-5 p-b-5">
							Showing 1–12 of 16 results
						</span>
		</div>
    );
}