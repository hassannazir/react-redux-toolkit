import "./App.css";
import Cake from "../src/features/cake/Cake";
import Icecream from "../src/features/icecream/Icecream";
import User from "../src/features/user/User";

function App() {
  return (
    <div className="App">
      <Cake></Cake>
      <Icecream></Icecream>
      <User></User>
    </div>
  );
}

export default App;
