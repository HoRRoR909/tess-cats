import { Provider } from "react-redux";
import { store } from "./redux";
import CardContainer from "./components/cardContainer/CardContainer";

function App() {
  return (
    <Provider store={store}>
        <CardContainer />
    </Provider>
  );
}

export default App;
