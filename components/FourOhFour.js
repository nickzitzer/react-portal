import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'

class FourOhFour extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Alert variant="danger">
                            <Alert.Heading>Page Not Found</Alert.Heading>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FourOhFour