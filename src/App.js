import React from 'react';
import WebcamCapture from './Components/WebcamCapture';
import Container from 'react-bootstrap/Container';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const API_URL = '127.0.0.1';

const App = () => {

    return(
        <Container fluid id="app">
            <WebcamCapture></WebcamCapture>
        </Container>
    );
}

export default App;
