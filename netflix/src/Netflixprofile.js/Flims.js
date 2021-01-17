import axios from "axios";
import { Component } from "react";
import { BsSkipBackward } from 'react-icons/bs'
import { Link } from "react-router-dom";
import './Css/Series.css'
const url = 'http://localhost:1234/movies'
class Flims extends Component {
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
    rendermovie = (data) => {
        if (data) {
            return (
                data.map(item => (< img src={item.imageurl} alt='netflix images' />)
                )
            )
        }

    }
    redirecttoprofile = () => {
        // this.props.history.push('/profile')
        console.log('clicked')
    }
    render() {
        if (sessionStorage.getItem('logintoken') === null) {
            this.props.history.push('/signin')
        }
        return (
            <div>
                <div className='Series_container'>
                    <div className='Series_searchbar'>
                        <input placeholder='Search Flims here' onChange={this.inputhandler} />
                    </div>
                    <div className='Seriessearch_results'>
                        {this.rendermovie(this.state.filteredseries)}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get(url).then(res => {
            this.setState({ movies: res.data })
            if (this.state.movies) {
                const output = this.state.movies.filter(item => item.genere === 'Movies')
                console.log('output', output)
                this.setState({ series: output })
            }
        })
        window.scrollTo(
            {
                top: 0
            }
        )
    }
}
export default Flims