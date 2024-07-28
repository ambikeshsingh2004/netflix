import Body from "../src/components/Body"
import {Provider} from "react-redux"
import appstore from "./utilities/store"
function App() {
  return (
  <Provider store = {appstore}>
    <Body/>
  </Provider>
  );
}

export default App;
