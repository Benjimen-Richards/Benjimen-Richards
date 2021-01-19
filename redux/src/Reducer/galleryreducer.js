const galleryreducer = (state = {}, action) => {
    switch (action.type) {
        case 'gallerylist':
            return {
                ...state, gallerylist: action.payload
            }
        default:
            return state
    }
}
export default galleryreducer