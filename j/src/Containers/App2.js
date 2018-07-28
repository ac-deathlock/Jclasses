import React, { Component } from 'react';
import logo from '../logo.svg';
import Navbar from '../Components/navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sitefooter from '../Components/Sitefooter';
import Example from "../Components/Card2";
import Drawer from "../Components/Drawer";
import Example2 from "../Components/Card3";


class App2 extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>


                <div className="container-fluid" style={{paddingLeft:0, margin:0}}>
                   <Drawer>
                        <Example/>
                   </Drawer>
                </div>
                <Sitefooter/>

            </div>
        );
    }
}

export default App2;
