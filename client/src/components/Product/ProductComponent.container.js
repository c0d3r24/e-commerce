import React from 'react';
import {connect} from 'react-redux';
import {get_product_data} from './../../actions';
import {ProductContentComponent} from './ProductComponent.component';
class ProductComponent extends React.Component {
    
    state = { 
        size:''
    }
    componentWillMount(){
        const id = this.props.location.pathname.split('/')[1];
        this.props.get_product_data(id);
    }

    _handleSizeChange = (event) => {
        this.setState({size: event.target.value});
    }
    render(){
        return (
        <ProductContentComponent 
            product={this.props.product}
            size={this.state.size}
            handleChange={this._handleSizeChange}
        />
    )
    }
}

const mapStateToProps = ({products}) => {
    const {product} = products;
    return {
        product
    }
}
export default connect (mapStateToProps, {get_product_data})(ProductComponent);