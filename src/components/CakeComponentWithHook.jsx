import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/CakeActions';
function CakeComponentWithHook() {
    const state = useSelector(state => state.cake);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Redux with Hooks</h1>
            <h2>Number Of Cakes: {state.numberOfCakes}</h2>
            <button type="button" onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default CakeComponentWithHook
