

import Body from './Body';
import Download from './Download';
import Faq from './Faq';
import Footer from './Footer';
import Header from './Header';
import Watch from './Watch';
const Mainpage = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <Download />
            <Watch />
            <Faq />
            <Footer />
        </div>
    );
}

export default Mainpage;
