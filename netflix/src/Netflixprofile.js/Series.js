import axios from "axios";
import { Component } from "react";
import './Css/Series.css'
const url = 'http://localhost:1234/movies'
class Series extends Component {
    constructor() {
        super()
        this.state = {
            series: '',
            filteredmovie: ''
        }
    }
    inputhandler = (e) => {
        const key = e.target.value
        if (this.state.series) {
            const filteredseries = this.state.movies.filter(item => (
                item.name.toLowerCase().indexOf(key.toLowerCase()) > -1
            ))
            this.setState({
                series: filteredseries
            })
        }
        console.log('filter', this.state.filteredmovie)
    }
    rendermovie = (data) => {
        if (data) {
            return (
                data.map(item => (< img onClick={this.scrollhandler} src={item.imageurl} alt='netflix images' />)
                )
            )
        }

    }
    render() {
        return (
            <div className='Series_container'>
                <div className='Series_searchbar'>
                    <input placeholder='Search series here' onChange={this.inputhandler} />
                </div>
                <div className='Seriessearch_results'>
                    {this.rendermovie(this.state.series)}
                </div>
            </div >
        )
    }
    componentDidMount() {
        axios.get(url).then(res => {
            this.setState({ movies: res.data })
            const output = this.state.movies.filter(item => item.genere === 'Series')
            console.log('output', output)
            this.setState({ series: output })
        })
    }
}
export default Series