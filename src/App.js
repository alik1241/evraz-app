import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Col, Row} from "react-materialize";
import Table from "./components/Table/Table";
import InfoBlock from "./components/Info/InfoBlock";
import MessageBlock from "./components/Message/MessageBlock";
import Chart from "./components/Chart/Chart";
import MainTable from "./components/MainTable/MainTable";

function App() {
  return (
    <div className="App">
        <Header />
        <div className={"app__content"}>
            <Row>
                <Col s={12} m={12} l={12} xl={12}>
                    <MainTable />
                </Col>
            </Row>
            <Row>
                <Col s={12} m={12} l={6} xl={6}>
                    <Chart/>
                </Col>
                <Col s={12} m={12} l={6} xl={3}>
                    <Table/>
                </Col>
                <Col s={12} m={12} l={6} xl={3}>
                    <InfoBlock />
                    <MessageBlock />
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default App;