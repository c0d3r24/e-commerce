import React,  { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent } from './components'
import { store } from './store';


const App = () => {
    
    return (
      <Provider store={store}>
          <Router>
          <Fragment>
              <HeaderComponent />
              <Route exact path="/" component={ProductListComponent} />
              <Route exact path="/:pid" component={ProductComponent} />
              <FooterComponent />
            </Fragment>
          </Router>
      </Provider>
      
    );
}

export default App;
