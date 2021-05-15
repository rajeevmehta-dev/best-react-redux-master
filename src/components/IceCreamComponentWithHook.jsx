import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';
function IceCreamComponentWithHook() {
    const state=useSelector(state=>state.iceCream);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Ice Cream Component Using Hook</h1>
            <h2>Number of Ice Creams: {state.numberOfIceCream}</h2>
            <button type="button" onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default IceCreamComponentWithHook
