const App = (props) => {
    const renderlist = (data) => {
        if (data) {
            return (
                data.map(item =>
                (
                    <li>{item.title}</li>
                ))
            )
        }
    }
    // console.log('props', props.data)
    return (
        <div>
            {renderlist(props.data)}
        </div>
    )
}
export default App