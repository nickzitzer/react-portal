import Alert from 'react-bootstrap/Alert'
import React from 'react'

class RenderComponent extends React.Component {
    render() {
        try {
            var cc = require('../components/custom-component/' + this.props.name + '.js');

            var comp = new cc.default();

            return comp.render();
        } catch (e) {
            return (
                <Alert variant="danger">Component Not Found</Alert>
            )
        }
    }
}
export default RenderComponent