import { render } from '@testing-library/react'
import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Watchingcard.css'
class Watchingcard extends Component {

    Setprofile = () => {
        sessionStorage.setItem('profile_name', this.props.img.name)
        sessionStorage.setItem('profile_image', this.props.img.imge)
        sessionStorage.setItem('movie_image', 'https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Cuties_Netflix_1200.jpg?itok=GZSv5CHx')
    }


    render() {
        // console.log(this.props)
        if (sessionStorage.getItem('logintoken') === null) {
            this.props.history.push('/signin')
        }
        return (

            <div className='Card_container'>
                <Link onClick={this.Setprofile} to='/profile' style={{ textDecoration: 'none' }}>
                    <div className='card_img'>
                        <img src={this.props.img.imge} alt='/' />
                    </div>
                    <div className='card_name'  >
                        <h4>{this.props.img.name}</h4>
                    </div>
                </Link>
            </div>
        )
    }
}
export default withRouter(Watchingcard)