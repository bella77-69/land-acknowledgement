import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Location from "./pages/Location/Location";
import LandAcknowledgement from "./pages/LandAcknowledgement/LandAcknowledgement";
import Search from "./pages/Search/Search";
import LearnMore from "./pages/LearnMore/LearnMore";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/location" exact component={Location} />
          <Route
            path="/land-acknowledgement"
            exact
            component={LandAcknowledgement}
          />
          <Route path="/search" exact component={Search} />
          <Route path="/learn-more" exact component={LearnMore} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
