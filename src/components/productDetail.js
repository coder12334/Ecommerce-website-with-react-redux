import React, { Component } from 'react'
import { addToWhistlist } from './actions/cartActions'
import { connect } from 'react-redux'
import {Button} from 'antd'

import {Link } from 'react-router-dom'
import Navbar from './navbar'

class productDetail extends Component {
    constructor(){
        super()
        
    }
    handleClick  = (id)=>{
        this.props.addToWhistlist(id)
        console.log(this.props.items)

    }
    render() {
        console.log(this.props.location.state.item)
        const item = this.props.location.state.item
        return (
            <div>
                <Navbar/>
                <div style={{ margin: 8 }}>
                    <img style={{ height: 200, float: 'left', marginLeft: '10%' }} className="card-img-right" src={item.img} alt="Card image cap" />
                    <div style={{ marginLeft: '30%' }} className='container'>
                        <h1>{item.title}</h1>
                        <p><b>Price: {item.price}$</b></p>
                        <br></br>

                        <p style={{ fontSize: '15px' }} className="badge badge-pill badge-dark">Newly</p>
                        <ul>
                            <li><span className="material-icons">
done</span>Bank OfferFlat ₹30 discount on first prepaid transaction using RuPay debit card, minimum order value ₹750/T&C</li>

                            <li> <span className="material-icons">
                                done
</span>Bank Offer₹30 Off on first prepaid transaction using UPI. Minimum order value ₹750/-T&C</li>
                            <li><span className="material-icons">
                                done
</span>Bank OfferFlat ₹75/- off on RuPay debit card purchase above ₹7,500/-T&C</li>
                            <li> <span className="material-icons">
                                done
</span>Bank OfferFlat ₹75 discount on UPI transaction above ₹10,000/-T&C</li>
                        </ul>
                        <Button  danger type="button" >Add To Cart</Button>
                        
                       <span to = "/"> <Button danger  style = {{marginLeft:30}} type="button" onClick={() => { this.handleClick(item.id) }} >Add To WhistList</Button></span>
{/* 
                       <Button type="primary">Primary Button</Button>

                       <Button danger>Default</Button> */}
                    </div>
    


                </div>
            </div>



        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedWhistlist
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToWhistlist: (id) => { dispatch(addToWhistlist(id)) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(productDetail)
