import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


function App() {
  return (
   <Router>
    <>
    <Navigation />
    <Switch>
    
    </Switch>
<Footer />
    </>
   </Router>
  );
}

export default App;
