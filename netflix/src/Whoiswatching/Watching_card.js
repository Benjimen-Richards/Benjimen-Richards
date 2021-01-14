import { Link } from 'react-router-dom'
import './Watchingcard.css'
const Watchingcard = (props) => {
    const Setprofile = () => {
        sessionStorage.setItem('profile_name', props.img.name)
        sessionStorage.setItem('profile_image', props.img.imge)
    }
    return (
        <div className='Card_container'>
            <Link onClick={Setprofile} to='/profile'>
                <div className='card_img'>
                    <img src={props.img.imge} alt='/' />
                </div>
                <div className='card_name' style={{ textDecoration: 'none' }} >
                    <h4>{props.img.name}</h4>
                </div>
            </Link>
        </div>
    )
}
export default Watchingcard