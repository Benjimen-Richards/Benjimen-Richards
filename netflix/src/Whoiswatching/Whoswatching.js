import Watchingcard from './Watching_card'
import './Whoswatching.css'
const Whoswatching = () => {
    return (
        <div className='Watching_container'>
            <div className='watching_text'>
                <h2>Who's watching Netflix?</h2>
            </div>
            <div className='Watching_card'>
                <Watchingcard />
            </div>
        </div>
    )
}
export default Whoswatching