import axios from "axios";
import { Component } from "react";
import { withRouter } from "react-router";
import './Css/Series.css'
const url = 'http://localhost:1234/movies'
class Series extends Component {
    constructor() {
        super()
        this.state = {
            series: '',
            filteredseries: ''
        }
    }
    inputhandler = (e) => {
        const key = e.target.value
        if (this.state.series) {
            const filteredseries = this.state.series.filter(item => (
                item.name.toLowerCase().indexOf(key.toLowerCase()) > -1
            ))
            this.setState({
                filteredseries: filteredseries
            })
        }
        // console.log('filter', this.state.filteredmovie)
    }
    selecthandler = (e) => {
        console.log(e.target.value)
    }
    rendermovie = (data) => {
        if (data) {
            return (
                data.map(item => (< img src={item.imageurl} id={item.id} onClick={this.selecthandler} alt='netflix images' />)
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
                    {this.rendermovie(this.state.filteredseries)}
                </div>
            </div>
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
export default withRouter(Series)