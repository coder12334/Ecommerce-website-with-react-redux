import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Avatar } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

import { Input } from 'antd';
import { AudioOutlined, ShoppingOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';


export default class Navbar extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            search: null,
            setSearch: false
        }


        const token = localStorage.getItem("token")
        console.log(token)
        var loggedIn = true
        if(token == null){
          loggedIn = false
        }
        this.state={
          loggedIn
        }
        this.setState({loggedIn})
    
    console.log(this.state.loggedIn)

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.search)
    }

    handleSubmit = () => {
        this.setState({ setSearch: true })

    }



    render() {
        if (this.state.setSearch) {
            return <Redirect to={{ pathname: "/GetSearch", state: { search: this.state.search } }} />
        }
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  1st menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  2nd menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  3rd menu item
                </a>
              </Menu.Item>
            </Menu>
          );
          const button = {marginRight:20}
        return (
            <div>


                <nav className="nav-wrapper">

                    <div className="container">

                        <ShoppingOutlined style={{ marginRight: 10, fontSize: '32px' }} />
                        <Link to="/" className="brand-logo">Shopping</Link>

                        <ul className="right">
                            {/* <li  className="text-decoration-none" ><Link to="/">Shop</Link></li> */}
                            {/* <li><Link to="/cart">My cart</Link></li> */}
                            {/* <li>  <Link to="/Billing"> <Avatar  size="small" icon={<UserOutlined />} /></Link></li> */}

                            {/* <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li> */}
                            <li><Link to="/cart"><ShoppingCartOutlined style={{ marginRight: 10, fontSize: '32px' }} /></Link></li>


                            {this.state.loggedIn ?
                                <button type="button" style={{ marginRight: 70, backgroundColor: '#ee6e73' }} className="btn btn-outline-danger"><Link to="/logout">Logout</Link></button>


                                : <button type="button" style={{ marginRight: 70, backgroundColor: '#ee6e73' }} className="btn btn-outline-danger"><Link to="/login">Login</Link></button>
                            }
                            {/* <li><Link to="/whisList"><i className="material-icons">label</i></Link></li> */}
                            <li><Link to="/whisList"><HeartFilled style={{ marginRight: 10, fontSize: '32px' }} /></Link></li>

                        </ul>
                    </div>
                </nav>



                <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" value={this.state.search} name="search" onChange={this.handleChange} type="search" placeholder="Search" style={{ marginLeft: '30%', width: '30%', ariaLabel: "Search" }} />
                    <button style = {{backgroundColor:"#ee6e73"}} className="btn btn-outline-success my-2 my-sm-0" type="submit"> <SearchOutlined /></button>
                </form>

                <div style = {{marginLeft:'30%'}}> 
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button style = {button} > shoes</Button>
      
    </Dropdown><Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button style = {button} >mobile phone</Button>

    </Dropdown><Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button style = {button} >masks</Button>

    </Dropdown><Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button style = {button}>laptop</Button>
    </Dropdown>
   <br/><br/>
   </div>



            </div>

        )

    }
}
