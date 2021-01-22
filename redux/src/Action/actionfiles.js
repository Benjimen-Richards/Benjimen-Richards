import axios from "axios"
const article = 'http://localhost:1234/articles'
const gallerylist = 'http://localhost:1234/galleries'
export const movies = () => {
    const output = axios.get(article).then(res => res.data)
    return {
        type: 'types',
        payload: output
    }
}
export const gallery = () => {
    const output = fetch(gallerylist, { method: 'GET' }).then(res => res.json())
    return {
        type: 'gallerylist',
        payload: output
    }
}
