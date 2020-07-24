import React, { Component } from 'react'
import { removeToWhistlist} from './actions/cartActions'
import { connect } from 'react-redux'
import {Empty} from 'antd'
import Navbar from './navbar'
class whisList extends Component {
    constructor(){
        super()
    }
      //to remove the item completely
      handleRemove = (id)=>{
        this.props.removeToWhistlist(id);
        console.log(this.props.items)
    }
    render() {
        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                   
                    <li className="collection-item avatar" key={item.id}>
                                <div className="item-img"> 
                                    <img src={item.img} alt={item.img} className=""/>
                                </div>
                            
                                <div className="item-desc">
                                    <span className="title">{item.title}</span>
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price}$</b></p> 
                                    <p>
                                        <b>Quantity: {item.quantity}</b> 
                                    </p>
                            
                                    <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                </div>
                                
                            </li>
                     
                )
            })
        ):

         (
            // <p>Nothing.</p>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
         )
        return (
            <div>
                <Navbar/>
                <div className="cart">
                  
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedWhistlist
        //addedItems: state.addedItems
    
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeToWhistlist: (id)=>{dispatch(removeToWhistlist(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(whisList)
