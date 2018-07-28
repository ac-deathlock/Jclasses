
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Cards extends Component{
    render()
    {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className={"card"} style={{width: '18rem'}}>
                            <img className="card-img-top" src="https://tuitionphysics.com/wp-content/uploads/2016/09/What-you-need-to-know-before-you-opt-for-physics-tuition-for-your-child.jpg" alt="Card image cap" height="175.8"/>
                            <div className="card-body">
                                <h5 className="card-title">Physics</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="/subjects" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="https://k30.kn3.net/9/8/6/E/7/9/EF9.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Chemistry</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="/subjects" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="http://stanfordflipside.com/images/feature_math.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Maths</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="/subjects" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );

    }
}
export default Cards;