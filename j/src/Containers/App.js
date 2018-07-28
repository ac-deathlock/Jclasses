import React, { Component } from 'react';
import logo from '../logo.svg';
import Navbar from '../Components/navbar';
import CarouselComponent from '../Components/carousel';
import Cards from '../Components/Card';
import SimpleList from '../Components/list';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sitefooter from '../Components/Sitefooter';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import Pricing from "../Components/Pricing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

          <CarouselComponent/>
          <div className="container">
              <Cards />
              <Pricing/>

          </div>
          <Sitefooter/>
        
      </div>
    );
  }
}

export default App;
