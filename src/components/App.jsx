import React from "react";
//import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";
import Splash from "./Splash";
import BeerList from "./BeerList";
import NewBeerForm from "./NewBeerForm";
import Error404 from "./Error404";
import Navigation from "./Navigation";
import EditBeer from "./EditBeer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyEditingBeer: null,
      currrentlyEditingIndex: null,
      currentlyEditingStatus: false,
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
    this.handleDeletingBeer = this.handleDeletingBeer.bind(this);
    this.handleEditingABeer = this.handleEditingABeer.bind(this);
    this.handleFinishEditingBeer = this.handleFinishEditingBeer.bind(this);

    this.editFormView = null;
  }

  handleAddingNewBeerToList(newTicket) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newTicket);
    this.setState({ masterKegList: newMasterKegList });
  }

  handleEditingABeer(index) {
    let foundBeer = this.state.masterKegList[index];
    this.setState({
      currentlyEditingBeer: foundBeer,
      currentlyEditingStatus: true,
      currrentlyEditingIndex: index
    });
  }

  handleFinishEditingBeer(editedBeer) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList[this.state.currrentlyEditingIndex] = editedBeer;
    this.setState({
      masterKegList: newMasterKegList,
      currentlyEditingStatus: false,
      currentlyEditingBeer: null,
      currrentlyEditingIndex: null
    });
  }

  handleSellingABeer(index) {
    let newMasterKegList = this.state.masterKegList.slice();
    let foundBeer = this.state.masterKegList[index];
    if (foundBeer.remaining > 0) {
      foundBeer.remaining--;
      newMasterKegList[index] = foundBeer;
      this.setState({ masterKegList: newMasterKegList });
    } else {
      foundBeer.remaining;
    }
  }

  handleDeletingBeer(index) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.splice(index, 1);
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    if (this.state.currentlyEditingStatus) {
      this.editFormView = (
        <EditBeer
          handleFinishEditingBeer={this.handleFinishEditingBeer}
          keg={this.state.currentlyEditingBeer}
        />
      );
    } else {
      this.editFormView = null;
    }

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
                deleteBeer={this.handleDeletingBeer}
                sellPint={this.handleSellingABeer}
                beerList={this.state.masterKegList}
                onEditingBeer={this.handleEditingABeer}
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
        {this.editFormView}
      </div>
    );
  }
}

export default App;
