import React, { Component } from 'react';
import Navbar from '../Components/navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sitefooter from '../Components/Sitefooter';
import Example2 from "../Components/Card3";
import {connect} from 'react-redux';
import MiddlewareActions from '../Actions/MiddlewareTypeCreators';
import Actions from '../Actions/Creators';
import _ from 'lodash';
import Drawer from "../Components/Drawer";
import Drawer2 from "../Components/Drawer2";


class App3 extends Component {

    constructor(props){
        super(props);
        let questions = this.props.getQuestions();
        console.log(this.props);
        this.state = {
            isFetching: this.props.isFetching,
            questions: []
        };
    }
    componentWillReceiveProps(newProps, nextContext){
        console.log(newProps.questions);
        console.log(newProps.isFetching);
        this.setState({isFetching: newProps.isFetching});
        if(!newProps.isFetching){
            this.setState({questions: newProps.questions.data.message});
            console.log("Forcing Update");
            this.forceUpdate();
        }
    }

    displayQuestions(q){
        return (<li>{q.question}</li>);
    }

    render() {
        const listItems = _.map(this.state.questions, this.displayQuestions);
        return (
            <div className="App">
                <Navbar/>


                <div className="container-fluid" style={{paddingLeft:0, margin:0}}>
                    <Drawer2>
                        <Example2/>
                    </Drawer2>
                </div>
                <ul>
                    {listItems}
                </ul>
                <Sitefooter/>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.QuestionsReducer.data,
        isFetching: state.QuestionsReducer.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: () => {
            dispatch(MiddlewareActions.requestMiddlewareMasterAction(Actions.fetchQuestions()))
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(App3);
