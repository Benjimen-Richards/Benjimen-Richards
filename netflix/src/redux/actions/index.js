import axios from "axios"
const watchingurl = 'http://localhost:1234/watching'

export const watching = () => {
    const output = axios.get(watchingurl).then(res => res.data)
    return {
        type: 'types',
        payload: output
    }
}
