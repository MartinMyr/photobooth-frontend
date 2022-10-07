import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

const API_URL = '';

const App = () => {


    return(
        <Container id='app'>
            <Row>
                <Col>
                    <Button variant="outline-dark">Dark</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default App;