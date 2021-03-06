import React from 'react'
import { connect } from 'react-redux'
import {buyCake } from '../redux'
function cakeProcessing(props) {
    return (
        <div>
            <h1>Cake Shop</h1>
            <h3>Number of cakes - {props.numOfCakes}</h3>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyCake:()=> dispatch(buyCake())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(cakeProcessing)
