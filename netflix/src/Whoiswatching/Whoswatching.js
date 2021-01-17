import Watchingcard from './Watching_card'
import './Whoswatching.css'
// import img1 from '../users/1.png'
// import img2 from '../users/2.png'
// import img3 from '../users/3.png'
// import img4 from '../users/4.png'
// import { Link } from 'react-router-dom'
const Whoswatching = () => {
    // const images1 = {
    //     imge: img1, name: 'A'
    // }
    // const images2 = {
    //     imge: img2, name: 'B'
    // }
    // const images3 = {
    //     imge: img3, name: 'C'
    // }
    // const images4 = {
    //     imge: img4, name: 'D'
    // }
    return (
        <div className='Watching_container'>
            <div className='watching_text'>
                <h2>Who's watching Netflix?</h2>
            </div>
            <div className='Watching_card'>
                <Watchingcard />
                {/* <Link to='/profile'><Watchingcard img={images2} /></Link>
                <Link to='/profile'><Watchingcard img={images3} /></Link>
                <Link to='/profile'><Watchingcard img={images4} /></Link> */}
            </div>
        </div>
    )
}
export default Whoswatching