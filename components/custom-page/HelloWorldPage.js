import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RenderComponent from "../RenderComponent"
import React from 'react'

class HelloWorldPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RenderComponent name={'HelloWorld'}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HelloWorldPage