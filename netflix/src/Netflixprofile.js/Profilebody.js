import { Component } from "react"
import axios from 'axios'
import './Css/Profilebody.css'
const url = 'http://localhost:1234/movies'
class Profilebody extends Component {
    constructor() {
        super()
        this.state = {
            movies: '',
            series: ''
        }
    }
    renderseries = (data) => {
        if (data) {

            return (
                data.map(item => (< img src={item.imageurl} alt='netflix images' />)
                )
            )
        }
    }
    render() {
        console.log('state', this.state.series)
        return (
            <div className='profilebody_container'>
                {this.renderseries(this.state.series)}
            </div>
        )
    }
    componentDidMount() {
        axios.get(url).then(res => {
            this.setState({ movies: res.data })
            const output = this.state.movies.filter(item => item.genere === 'Series')
            console.log('output', output)
            this.setState({ series: output })
        }
        )



    }
}
export default Profilebody