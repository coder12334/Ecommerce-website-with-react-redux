import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './navbar'
import { Empty } from 'antd'
class GetSearch extends Component {
    constructor() {
        super()

    }

    render() {
        const data = this.props.items.filter((item) => {
            if (this.props.location.state.search == null)
                return item
            else if (item.title.toLowerCase().includes(this.props.location.state.search.toLowerCase())) {
                return item
            }

        })
        console.log(data)
        let show = data.length ?

            (data.map(item => {
                return (
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title} />
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                    </div>)
            })

            ) :
            (
                // <p>Nothing.</p>
                (<Empty />)
            )




        return (
            <div>
                <Navbar/>

                {show}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(GetSearch)