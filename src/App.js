import React from 'react';
import WebcamCapture from './Components/WebcamCapture';
import Container from 'react-bootstrap/Container';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const API_URL = '127.0.0.1';

const App = () => {

    return(
        <Container fluid id="app">
            <div id="webcam-capture-component">
                <WebcamCapture></WebcamCapture>
            </div>
        </Container>
    );
}

export default App;
