import './Css/Download.css'
const Download = () => {
    return (
        <div className='Dncontainer'>
            <div className='dnimage'>
                <img className='dnimg1' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='/'></img>
                <img className='dnimg2'
                    style={{
                        width: '150px',
                        height: '100px'
                    }}
                    src='https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif' alt='/'></img>
            </div>
            <div className='dntext'>
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>

        </div>
    )
}
export default Download