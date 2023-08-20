import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
