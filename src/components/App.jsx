import React from "react";
//import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";
import Splash from "./Splash";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import Error404 from "./Error404";
import Navigation from "./Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Ruby Zozzle",
          brewer: "Hi-Wheel",
          description: "Sparkling Wine & Grapefruit",
          abv: "6.8%",
          price: "7",
          remaining: "20"
        },
        {
          name: "Tart N Juicy",
          brewer: "Epic",
          description: "Sour IPA",
          abv: "4.5%",
          price: "6",
          remaining: "60"
        },
        {
          name: "Hamm's",
          brewer: "Miller/Coors",
          description: "American Lager",
          abv: "4.7%",
          price: "3",
          remaining: "65"
        },
        {
          name: "Prismatic",
          brewer: "Ninkasi",
          description: "Juicy IPA",
          abv: "5.9%",
          price: "6",
          remaining: "75"
        },
        {
          name: "Juicy Haze",
          brewer: "New Belgium",
          description: "India Pale Ale",
          abv: "7.5%",
          price: "6",
          remaining: "18"
        },
        {
          name: "8 Hop",
          brewer: "New Belgium",
          description: "Pale Ale",
          abv: "5.5%",
          price: "6",
          remaining: "58"
        }
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleSellingABeer = this.handleSellingABeer.bind(this);
  }

  handleAddingNewBeerToList(newTicket) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newTicket);
    this.setState({ masterKegList: newMasterKegList });
  }

  handleSellingABeer(beer) {
    let newMasterKegList = this.state.masterKegList.slice();
    let beerIndex = this.state.masterKegList.indexOf(beer);
    newMasterKegList[beerIndex].remaining++;
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        <Navigation />

        <Switch>
          {/* <Route exact path="/" component={Splash} /> */}
          <Route
            exact
            path="/"
            render={() => (
              <BeerList
                sellPint={this.handleSellingABeer}
                beerList={this.state.masterKegList}
              />
            )}
          />

          <Route
            path="/newbeer"
            render={() => (
              <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
