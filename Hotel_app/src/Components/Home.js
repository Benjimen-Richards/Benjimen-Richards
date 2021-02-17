import Header from "./Header";
import QuickBooking from "./QuickBooking";
import Quicksearch from "./QuickSearch";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Quicksearch />
        <QuickBooking />
      </div>
    </div>
  );
};
export default Home;
