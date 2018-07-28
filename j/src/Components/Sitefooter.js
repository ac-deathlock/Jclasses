import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class Sitefooter extends React.Component {
    render(){
        return(
            <Footer style={{backgroundColor: '#0275d8', color: '#fff'}} className="font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col sm="12">
                            <h5 className="title">JOSHI CLASSES</h5>
                            <p>Address:54-B, Krishna Bhawan,
                                Prag Narain Road,
                                Opp. Kalyan Bhawan</p>
                        <br/>
                            <p>City:Lucknow</p>
                            <br/>
                            <p>E-mail:joshimaths@gmail.com</p>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default Sitefooter;