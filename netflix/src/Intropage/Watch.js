import './Css/Watch.css'

const Watch = () => {
    return (
        <div className='wthcontainer'>
            <div className='wthtext'>
                <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </div>
            <div className='wthimage'>
                <img className='wthimg1'
                    src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' alt='/'></img>
                <img className='wthimg2'
                    style={{
                        width: '250px',
                        height: '130px'
                    }} src='https://media3.giphy.com/media/3ofT5Fkl3Pxr5dkkAE/giphy.gif' alt='/' />
            </div>

        </div>
    )
}
export default Watch