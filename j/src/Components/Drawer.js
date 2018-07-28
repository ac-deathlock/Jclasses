import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


//specify the base color/background of the parent container if needed
const Drawer = (props) => (
    <div className={"container-fluid"} style={{paddingLeft:0, margin:0,}}>

    <div  style={{background: '#2c3e50', color: '#FFF', width: 250,  height:"200vh", }}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales' style={{display:'inline-block'}}>
            <Nav id='Physics'>

                <NavText> Physics</NavText>
            </Nav>
            <Nav id='Chemistry'>

                <NavText> Chemistry </NavText>
            </Nav>
            <Nav id='Mathematics'>

                <NavText> Mathematics</NavText>
            </Nav>
        </SideNav>
        <div style={{marginLeft: 260, color: '#000'}}>
            {props.children}
        </div>
    </div>

    </div>
)
export default Drawer;