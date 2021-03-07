import Hoc from "./Hoc/Hoc";
import StockList from "./Hoc/StockList";
import UserList from "./Hoc/UserList";

const StocksData = [
    {
        id: 1,
        name: 'TCS'
          
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ];
  const UsersData = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
  ];

const Stocks = Hoc(StockList,StocksData)

const Users = Hoc(UserList,UsersData)

const App =()=>
{
    return(
       <div>
            <Stocks/>
            <Users/>
       </div>
    )
}
export default App