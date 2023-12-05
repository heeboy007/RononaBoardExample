import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Accordion } from 'react-bootstrap';

function AccordionPage(){
    return (
        <Container className="pt-3">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>카드의 헤더</Accordion.Header>
                    <Accordion.Body>
                        이제 아코디언은 그냥 따로 존재합니다.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>두번째꺼</Accordion.Header>
                    <Accordion.Body>
                        카드 없이 독립적으로 만들어봅시다.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default AccordionPage;