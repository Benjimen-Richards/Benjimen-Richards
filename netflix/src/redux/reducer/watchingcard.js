const watching = (state = {}, action) => {
    switch (action.type) {
        case 'types':
            return { ...state, data: action.payload }

        default:
            return state
    }
}
export default watching