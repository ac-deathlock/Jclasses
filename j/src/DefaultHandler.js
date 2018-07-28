import React, { Component } from "react";
import App from './Containers/App';
export default class DefaultHandler extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}