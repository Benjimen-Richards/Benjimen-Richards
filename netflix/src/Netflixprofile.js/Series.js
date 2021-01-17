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
            filteredseries: '',
            hoverimage: ''
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
    }
    selecthandler = (e) => {
        const value = e.target.id
        console.log(value)
        axios.get(`${url}/${value}`).then(res => this.setState({ hoverimage: res.data }))
        console.log(this.state.hoverimage)
    }
    rendermovie = (data) => {
        if (data) {
            return (
                data.map(item => {
                    return (
                        < img src={item.imageurl} id={item.id} onClick={this.selecthandler} alt='netflix images' />
                    )
                }
                ))
        }
    }


    render() {
        if (sessionStorage.getItem('logintoken') === null) {
            this.props.history.push('/signin')
        }
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
            if (this.state.movies) {
                const output = this.state.movies.filter(item => item.genere === 'Series')
                console.log('output', output)
                this.setState({ series: output })
            }

        })
    }
}
export default withRouter(Series)