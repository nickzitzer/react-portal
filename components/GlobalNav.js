import React from 'react'
import Form from 'react-bootstrap/Form'

class GlobalNav extends React.Component {
    constructor(props) {
        super(props);

        this.links = [{
            label: 'Hello World',
            href: 'HelloWorld'
        }, {
            label: 'Custom Component Builder',
            href: 'CustomComponentBuilder'
        }];

        this.filter = '';
    }

    render() {
        return (
            <nav id="global-nav">
                <Form>
                    <Form.Group>
                        <Form.Control type={'text'} placeholder={'Filter'} value={this.filter}/>
                    </Form.Group>
                </Form>
                {this.links.map((row, i) =>
                    <a href={row.href} key={i}>{row.label}</a>
                )}
            </nav>
        )
    }
}

export default GlobalNav