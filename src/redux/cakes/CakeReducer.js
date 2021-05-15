const { BUY_CAKE } = require("./CakeConstants")

const initialCakeState = {
    numberOfCakes: 20
}

const cakeReducer = (state = initialCakeState, action) => {


    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default: return { ...state }

    }


}

export default cakeReducer;