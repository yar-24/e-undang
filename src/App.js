import store from "./config/redux/store";
import { Provider } from "react-redux";
import RouterScreen from "./RouterScreen";
import { Layout } from "./componentsApp";

function App() {
  return (
    <Layout>
        <Provider store={store}>
          <RouterScreen />
        </Provider>
    </Layout>
  );
}

export default App;
