import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Location from "./pages/Location/Location";
import LandAcknowledgement from "./pages/LandAcknowledgement/LandAcknowledgement";


function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/location' exact component={Location} />
          <Route path='/land-acknowledgement' exact component={LandAcknowledgement} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
