

import Body from './Body';
import Download from './Download';
import Faq from './Faq';
import Footer from './Footer';
import Header from './Header';
import Watch from './Watch';
const Mainpage = () => {
    const moveup = () => {
        window.scrollTo(
            {
                top: 0
            }
        )
    }
    return (
        <div className="App">
            <Header />
            <Body />
            <Download />
            <Watch />
            <Faq />
            <Footer />
            <button className='moveup' onClick={moveup}><img src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png' alt='/' style={{
                width: '70px'
            }} /></button>
        </div>
    );
}

export default Mainpage;
