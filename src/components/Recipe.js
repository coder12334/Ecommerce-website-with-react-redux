import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { PayPalButton } from "react-paypal-button-v2";

//import { addShipping } from './actions/cartActions'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                    <Link to="/checkout"> <button className="waves-effect waves-light btn">checkout </button></Link>
                    
                    <div style = {{textAlign: 'left',width: '38%',float:"right",marginRight: 209}}>
                    <PayPalButton
        shippingPreference="NO_SHIPPING"
        amount="0.01"
        options={{
          clientId:
            "AYNUdhobCjQXyre8GefGGI1Bg_zDXMCiMn2G4_9SqAimZXj6K-3iaMW7AdBSNFqJdTWPOHiDA-Pa3GOt"
        }}
        onSuccess={(details, data) => {
          console.log("Details---------->", details);
          console.log("Data------------->", data);
        }}
      />
      </div>
      </div>

    
                    
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
