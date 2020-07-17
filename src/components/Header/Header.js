import React from 'react';
import logo from '../../logo--en.svg';
import {Navbar, Icon, Tab, Tabs} from 'react-materialize'
import 'materialize-css/dist/css/materialize.min.css'
import './HeaderStyle.css'
import 'materialize-css';

export default () => (
    <Navbar
        className={"App-header"}
        alignLinks="right"
        brand={<img src={logo} className="App-logo" alt="logo" />}
        id="mobile-nav"
        menuIcon={<Icon className={"header__menu"}>menu</Icon>}
        options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
            fixed: true
        }}
    >
        <Tabs className="header__menu-buttons">
            <Tab
                active
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: true
                }}
                title="Рекомендации"
            />
            <Tab
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: true
                }}
                title="История"
            />
        </Tabs>
    </Navbar>
)