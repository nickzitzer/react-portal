import GlobalHeader from './GlobalHeader'
import GlobalNav from './GlobalNav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../public/css/style.css"
import React from 'react'

class GlobalLayout extends React.Component {
    render() {
        return (
            <div>
                <GlobalHeader />
                <Container fluid={true}>
                    <Row>
                        <Col xl={2} md={3}>
                            <GlobalNav />
                        </Col>
                        <Col xl={10} md={9}>
                            <main>
                                {this.props.children}
                            </main>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GlobalLayout