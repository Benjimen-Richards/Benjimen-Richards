import React from 'react'
import { connect } from 'react-redux'
import { gallery, movies } from '../Action/actionfiles'
import App from '../App'
class Home extends React.Component {
    componentDidMount() {
        // console.log('props--->', this.props)
        this.props.dispatch(movies())
        this.props.dispatch(gallery())
    }
    render() {
        // console.log(this.props.gallery)
        console.log('props--->', this.props)
        return (
            <div>
                <h1>Article</h1>
                <App data={this.props.movies} />
                <h1>Gallery</h1>
                <App data={this.props.gallery} />
            </div>
        )
    }
}
const mapstatetoprops = (state) => {
    // console.log('state', state)
    return {
        gallery: state.galleryreducer.gallerylist,
        movies: state.moviesreducer.data
    }

}
export default connect(mapstatetoprops)(Home)