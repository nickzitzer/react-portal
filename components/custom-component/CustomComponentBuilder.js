import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class CustomComponentBuilder extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h4>Custom Component Builder</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Imports
                        <select className={'form-control'} multiple={true}>
                            <option>
                                react-bootstrap/Container
                            </option>
                            <option>
                                react-bootstrap/Row
                            </option>
                            <option>
                                react-bootstrap/Col
                            </option>
                            <option>
                                react-bootstrap/Form
                            </option>
                        </select>
                    </Col>
                    <Col>
                        Component
                        <textarea className={'form-control'}>

                        </textarea>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default CustomComponentBuilder