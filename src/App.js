import { Provider } from 'react-redux'
import Header from "./components/Header";
import CurrentImage from "./containers/CurrentImage";
import ReviewedImage from "./containers/ReviewedImages";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header data={"Image Approval Application"}/>
      <ReviewedImage/>
      <CurrentImage/>
    </Provider>
  );
}

export default App;
