import axios from "axios"
const watchingurl = 'http://localhost:1234/watching'
const carturl = 'http://localhost:1234/cart'

export const watching = () => {
    const output = axios.get(watchingurl).then(res => res.data)
    return {
        type: 'types',
        payload: output
    }
}

export const watchlist_cart = () => {
    const output = axios.get(carturl).then(res => res.data)
    return {
        type: 'watchlist_cart',
        payload: output
    }
}