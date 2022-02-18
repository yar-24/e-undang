import RouterScreen from "./RouterScreen";
import store from "./config/redux/store";
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <RouterScreen/>
    </Provider>
  );
}

export default App;
