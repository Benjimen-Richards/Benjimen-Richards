import { Link } from 'react-router-dom'
import './Watchingcard.css'
const Watchingcard = (props) => {
    sessionStorage.setItem('profile_name', props.img.name)
    return (
        <div className='Card_container'>
            <Link to='/profile'>
                <div className='card_img'>
                    <img src={props.img.imge} alt='/' />
                </div>
                <div className='card_name'>
                    <h4>{props.img.name}</h4>
                </div></Link>
        </div>
    )
}
export default Watchingcard