import React from "react";
//import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";
import Splash from "./Splash";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";

function App() {
  var styles = {};

  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/beerlist" component={BeerList} />
        <Route exact path="/newbeer" component={NewBeerForm} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
