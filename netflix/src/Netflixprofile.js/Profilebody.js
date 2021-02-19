import { Component } from "react"
import axios from 'axios'
import './Css/Profilebody.css'
import { withRouter } from "react-router"
const url = 'https://login-with-jwt-richards.herokuapp.com/movies'
const carturl = 'https://login-with-jwt-richards.herokuapp.com/cart'
class Profilebody extends Component {
    constructor() {
        super()
        this.state = {
            movies: '',
            series: '',
            documentaries: '',
        }
    }
    renderseries = (data) => {
        if (data) {
            return (
                data.map(item => (< img id={item.id} src={item.imageurl} onClick={this.selecthandler} alt='netflix images' />)
                )
            )
        }
    }



    selecthandler = (e) => {
        const id = e.target.id
        if (this.state.movies) {
            const cartimage = this.state.movies.filter(item =>
            (
                parseInt(item.id) === parseInt(id)
            ))
            sessionStorage.setItem('movie_name', cartimage[0].name)
            sessionStorage.setItem('movie_image', cartimage[0].imageurl)
            sessionStorage.setItem('movie_id', cartimage[0].id)
            sessionStorage.setItem('listbutton', true)
            // console.log(cartimage[0])
            window.scrollTo({ top: 0 })
            // axios.post(carturl, cartimage)
            this.props.history.push('/profile')

        }
    }
    render() {
        if (sessionStorage.getItem('logintoken') === null) {
            this.props.history.push('/signin')
        }
        return (
            <div className='profilebody_container'>
                <h3 style={{ marginLeft: '20px', fontWeight: 'bold' }}>Trending now</h3>
                <div className='series_ccontainer' >
                    {this.renderseries(this.state.movies.slice(40, 55))}
                </div>
                <h3 style={{ marginLeft: '20px', fontWeight: 'bold' }}>Series</h3>
                <div className='series_ccontainer'>
                    {this.renderseries(this.state.series)}
                </div>
                <h3 style={{ marginLeft: '20px', fontWeight: 'bold' }}>Documentaries</h3>
                <div className='series_ccontainer'>
                    {this.renderseries(this.state.documentaries)}
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get(url).then(res => {
            this.setState({ movies: res.data })
            if (this.state.movies) {
                const output = this.state.movies.filter(item => item.genere === 'Series')
                // console.log('output', output)
                this.setState({ series: output })
                const document = this.state.movies.filter(item => item.genere === 'Documentaries')
                // console.log('output', output)
                this.setState({ documentaries: document })
            }
        }
        )

    }
}
export default withRouter(Profilebody)