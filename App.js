import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";


export default function App() {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
}
