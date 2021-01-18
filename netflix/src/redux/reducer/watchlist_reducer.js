const watchlist_reducer = (state = {}, action) => {
    switch (action.type) {
        case 'watchlist_cart':
            return { ...state, data: action.payload }

        default:
            return state
    }
}
export default watchlist_reducer