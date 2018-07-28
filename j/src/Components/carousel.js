import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class CarouselComponent extends Component {
    render() {
        return (
            <div style={{marginBottom:'5%'}}>
                <Carousel axis="horizontal" showThumbs={false} autoPlay={false} showArrows={false} emulateTouch>
                    <div style={{height: '600px', width: '100%',display:'table-cell', verticalAlign:'middle', textAlign:'center'}}>
                        <img style={{height: '100%', width: '184%'}} src="https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip" />
                        <div className="legend">
                            <a className="btn btn-secondary btn-lg" style={{width: '15%'}} href="/subjects" role="button">Link</a>
                        </div>
                    </div>
                    <div style={{height: '600px', width: '100%',display:'table-cell', verticalAlign:'middle', textAlign:'center'}}>
                        <img style={{height: '100%', width: '380%'}} src="https://thumb7.shutterstock.com/display_pic_with_logo/3659060/473367427/stock-vector-big-vector-set-of-hand-drawn-doodle-chemistry-icons-isolated-on-white-background-473367427.jpg" />
                        <div className="legend">
                            <a className="btn btn-secondary btn-lg" style={{width: '15%'}} href="/subjects" role="button">Link</a>
                        </div>
                    </div>
                    <div style={{height: '600px', width: '100%',display:'table-cell', verticalAlign:'middle', textAlign:'center'}}>
                        <img style={{height: '100%', width: '250%'}} src="https://hindi.siasat.com/wp-content/uploads/2016/02/math.jpg" />
                        <div className="legend">
                            <a className="btn btn-secondary btn-lg" style={{width: '15%'}}  href="/subjects" role="button">Link</a>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarouselComponent;