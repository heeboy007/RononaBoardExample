import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Alert } from 'react-bootstrap';

function AlertPage(){
    return (
        <Container className="pt-3">
            <Alert variant="primary">primary</Alert>
            <Alert variant="secondary">secondary</Alert>
            <Alert variant="success">success</Alert>
            <Alert variant="danger">danger</Alert>
            <Alert variant="warning">warning</Alert>
            <Alert variant="info">info</Alert>
        </Container>
    );
}

export default AlertPage;