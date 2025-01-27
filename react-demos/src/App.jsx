import BasicEffect from "./components/BasicEffect";
import Card from "./components/Card";
import Counter from "./components/Counter";
import CounterEffect from "./components/CounterEffect";
import EventDemo from "./components/EventDemo";
import FetchDataEffect from "./components/FetchDataEffect";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import IconComponent from "./components/IconComponent";
import MainContent from "./components/MainContent";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import Profile from "./components/Profile";
import ProfileCard from "./components/ProfileCard";
import ShoppingList from "./components/ShoppingList";
import StyleCard from "./components/StyleCard";
import TodoList from "./components/TodoList";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const GreetingBasedOnTime = ({ timeOfDay }) => {
  return (
    <>
      <div>{timeOfDay == "morning" ? "Good Morning" : "Good Afternoon"}</div>
    </>
  );
};
function App() {
  return (
    <>
      <Header />
      <Greeting />
      <MainContent />
      <ProductInfo />
      <Product name="Laptop" price={1200} />
      <Person name="abc" age={25} />
      <Card>
        <h1>This card heading</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          doloremque?
        </div>
      </Card>
      <Card>
        <h1>This card heading</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          doloremque?
        </div>
      </Card>
      <Card>
        <h1>This card heading</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          doloremque?
        </div>
      </Card>
      <Weather temperature={24} />
      <UserStatus loggedIn isAdmin />
      <UserStatus loggedIn />
      <GreetingBasedOnTime timeOfDay="morning" />
      <StyleCard />
      <ProfileCard />
      <IconComponent />
      <EventDemo />
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
      <Footer />
    </>
  );
}

export default App;
