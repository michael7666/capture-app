import AboutUs from "./pages/AboutUs"
import GlobalStyle from "./component/GlobalStyle"
import Nav from "./component/Nav"
import OurWork from "./pages/OurWork"
import ContactUs from "./pages/ContactUs"
import {Switch, Route, useLocation} from "react-router-dom"
import MovieDetails from "./pages/MovieDetail"
import {AnimatePresence} from "framer-motion"


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch Location={location} key={location.pathname}>
        <Route path="/" exact>
        <AboutUs/>
        </Route>
      <Route path="/work" exact>
      <OurWork/>
      </Route>
      <Route path="/work/:id">
        <MovieDetails/>
      </Route>
      <Route path="/contact">
      <ContactUs/>
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
