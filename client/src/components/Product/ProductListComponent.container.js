import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetch_products, search_term_changed, sort_product, filter_product} from './../../actions';
import {ProductHeader} from './ProductHeader';
import {SideSectionComponent} from './SideSectionComponent';
import { ProductListContentComponent} from './ProductListComponent.component';
class ProductListComponent extends React.Component {
    
    state = {
        sortingValue: 'default',
        filterValue: 'Price'
    }

    /**
     * componentWillMount : getting data from the server.
     */
    componentWillMount(){
        this.props.fetch_products();
    }
    /**
     * this manages sorting.
     * Based on the value in the top select control the result will be sorted 
     * Default : Ascending by name
     * Popularity : Descending by name 
     * Price Low to Hight: Ascending by price 
     * Price High to Low: Descending by price
     */
    _handleSorting = (event) => {
        this.setState({sortingValue: event.target.value});
        this.props.sort_product(event.target.value, [...this.props.productList]);
    }

    /**
     * this manages filtering.
     * Based on the value in the top select control the result will be filterd 
     * Price : Default (no changes);
     * 0-50: price between 0 and 50
     * 50-100: price between 50 and 100
     * 100-150: price between 100 and 150
     * 150-200: price between 150 and 200
     * 200: price equal to or greater than 200
     */
    _handleFiltering = (event) => {
        this.setState({filterValue: event.target.value});
        this.props.filter_product(event.target.value, [...this.props.storedProductList]);
    }  

    /**
     * this manages search.
     * Based on the value in the search box the product list is updated.
     * 
     */

    _onSearchTermChange = (event) => {
        const searchTerm = event.target.value
        this.props.search_term_changed(searchTerm, [...this.props.productList]);
        if(searchTerm === '')  this.props.fetch_products();
    }

    render() {
        return (
            <Fragment>
              <ProductHeader />
              {/* <!-- Content page --> */}
	            <section className="bgwhite p-t-55 p-b-65">
                    <div className="container">
                        <div className="row">
                            <SideSectionComponent 
                                searchTerm={this.props.searchTerm}
                                onChange={this._onSearchTermChange}
                            />
                            <ProductListContentComponent 
                                productList={this.props.productList}
                                handleSorting={this._handleSorting}
                                sortingValue={this.state.sortingValue}
                                handleFiltering={this._handleFiltering}
                                filterValue={this.state.filterValue}
                             />
                        </div>
                    </div>
                    
                </section>
            </Fragment>
        );
      }
}

const mapStateToProps = ({products}) => {
    const {productList, searchTerm, storedProductList} = products;
    return {
        productList,
        searchTerm,
        storedProductList
    }
}
export default connect (
    mapStateToProps, 
    {fetch_products, search_term_changed, sort_product, filter_product}
    )(ProductListComponent);