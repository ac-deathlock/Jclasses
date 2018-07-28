import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./navbar";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

class Pricing extends React.Component {

    render() {
        return(

            <PricingTable  highlightColor='#1976D2'>
                <PricingSlot  onClick={this.submit} buttonText='REGULAR PROGRAM' title='FREE' priceText='$0/month'>
                    <PricingDetail> <b>15</b> projects</PricingDetail>
                    <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>5</b> users</PricingDetail>
                    <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                </PricingSlot>
                <PricingSlot highlighted onClick={this.submit} buttonText='FOUNDATION COURSE' title='BASIC' priceText='$24/month'>
                    <PricingDetail> <b>35</b> projects</PricingDetail>
                    <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                </PricingSlot>

            </PricingTable>
         );

    }
}

export default Pricing ;