import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RenderComponent from "../RenderComponent";
import React from 'react'


class CustomComponentBuilderPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <RenderComponent name={'CustomComponentBuilder'}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CustomComponentBuilderPage