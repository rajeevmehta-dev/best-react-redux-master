// this example uses earlier method to connect redux to component, i.e. the connect component.
import React from 'react';
import {connect} from 'react-redux';
import { buyCake } from '../redux/cakes/CakeActions'

function CakeComponent(props) {
    return (
        <div>
            <h1>Redux with earlier method, using connect component</h1>
            <h2>Number Of Cakes:- {props.numberOfCakes}</h2>
            <button type="button" onClick={props.buyCake}>Buy Cake</button>
            <hr></hr>
        </div>
    )
}
/**
 * 
 * this method uses the state of the store, and provides it as props to the component 
 */
const mapStateToProps=(state)=>{
return{
    numberOfCakes:state.cake.numberOfCakes
}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)
