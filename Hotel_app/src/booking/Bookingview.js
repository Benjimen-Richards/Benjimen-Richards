import Header from "../Components/Header"

const Bookingview = (props) => {
    const datahandler = (data) => {
        if (data) {
            return (
                data.map((item, index) =>
                (
                    <tr>
                        <th scope="row">{item.Orderid}</th>
                        <td>{item.hotelname}</td>
                        <td>{item.name}</td>
                        <td>{item.phoneNumber}</td>

                    </tr>
                ))
            )
        }
    }
    // console.log(props)
    return (
        <div>
            <Header />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Orderid</th>
                        <th scope="col">hotelname</th>
                        <th scope="col">name</th>
                        <th scope="col">phoneNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {datahandler(props.hotel)}
                </tbody>
            </table>

        </div>
    )
}
export default Bookingview