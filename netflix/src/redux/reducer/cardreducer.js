const cartreducer = (state = {}, action) => {
    switch (action.type) {
        case 'cart':
            return {
                ...state, cartdata: action.payload
            }


        default:
            return state
    }
}
export default cartreducer