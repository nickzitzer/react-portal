import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'

class GlobalHeader extends React.Component {
    constructor(props) {
        super(props);

        this.search = ''
    }
    render() {
        return (
            <Navbar id="global-header" role="banner" bg="primary">
                <a href={'/'}>
                    <Navbar.Brand>My Site</Navbar.Brand>
                </a>
                <Form inline className={'mr-auto'}>
                    <Form.Control type={'text'} placeholder={'Search'} value={this.search} className={'mr-sm-2'}/>
                </Form>
                <Nav>
                    <Nav.Link>
                        System Administrator
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default GlobalHeader