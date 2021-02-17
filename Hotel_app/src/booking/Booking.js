import Axios from 'axios'
import React from 'react'
import Bookingview from './Bookingview'
const bookingurl = 'http://localhost:905/Bookings'

class Booking extends React.Component {
    constructor() {
        super()
        this.state = {
            hotel: ''
        }
    }

    render() {

        return (
            <div>
                <Bookingview hotel={this.state.hotel} />
            </div>
        )
    }
    componentDidMount() {
        Axios.get(bookingurl).then(res => this.setState({ hotel: res.data }))
    }
}
export default Booking