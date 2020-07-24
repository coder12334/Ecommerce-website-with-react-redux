import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Shoes from './components/Shoes'
import GetSearch from './components/GetSearch';
import Login from './components/login';
import Logout  from './components/logout';
import productDetail from './components/productDetail'
import whisList from './components/whisList'
import Billing from './components/Billing'
import Checkout from './components/checkout'
class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div  className="App">
            
        
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/shoes" component={Shoes}/>
                    <Route  path="/GetSearch" component={GetSearch}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/productDetail" component={productDetail}/>
                    <Route path="/whisList" component={whisList}/>
                    <Route path="/Billing" component={Billing}/>
                    <Route path="/checkout" component={Checkout}/>

                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
