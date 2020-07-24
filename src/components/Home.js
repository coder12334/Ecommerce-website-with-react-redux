import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { Link } from 'react-router-dom'
import { DatePicker, message, Button } from 'antd';
import { Popover, Carousel } from 'antd';
import 'antd/dist/antd.css';
import './home.css'
import Navbar from './navbar';

import Loader from 'react-loader-spinner'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            isLoading: true
        }

    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
        console.log(this.state.value)
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {


        let sortItem = []
        if (this.state.value === "1") {
            sortItem = this.props.items.sort(function (a, b) { return a.price - b.price });

        }
        else if (this.state.value === "2") {
            sortItem = this.props.items.sort(function (a, b) { return b.price - a.price });
        }
        else { sortItem = this.props.items }

        console.log(sortItem)

        let itemList = sortItem.map(item => {
            return (

                <div className="card" key={item.id}>
                    <div className="card-image">

                        <img src={item.img} alt={item.title} />



                        <Popover content={(<div>
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                            <p><b>Price:{item.price}</b></p>
                        </div>)}>

                            <Button type="danger">previw</Button>

                        </Popover>

                        <span  className="card-title"><Link to={{
                            pathname: "/productDetail",
                            state: {
                                item: item
                            }
                        }}> <p style = {{color:"#ff1818"}} > {item.title} </p> </Link></span>

                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>


            )
        })
        console.log(sortItem)
        return (<div>

            {this.state.isLoading ?
                (<Loader style={{
                    marginTop: '20%',
                    marginLeft: '50%',
                }}

                    type="Circles"
                    color="#00BFFF"
                    height={80}
                    width={80}


                />) :


                <div>
                    <Navbar />
                    <Carousel >
                        <div>

                            <img style={{ width: '100%' }} src="https://rukminim1.flixcart.com/flap/844/140/image/b3d7cbde7e9ee298.jpg?q=50" />
                        </div>
                        <div>
                            <img style={{ width: '100%' }} src=" https://rukminim1.flixcart.com/flap/50/50/image/8cfb60fc3819f361.jpg?q=50" />

                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>

                    <div className="container">



                        <h3 className="center">Our items</h3>

                        <select style={{ width: '15%' }} className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.value} onChange={this.handleChange}>
                            <option selected>Choose...</option>
                            <option value="1">Low-To-High</option>
                            <option value="2">High-To-Low</option>
                        </select>
                        <div className="box">

                            {itemList}
                        </div>
                    </div>
                </div>}
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)