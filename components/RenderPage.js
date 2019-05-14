import FourOhFour from '../components/FourOhFour'
import Home from '../components/Home'
import React from 'react'

class RenderPage extends React.Component {
    render() {
        if(!this.props.name || ['home', 'index', ''].indexOf(this.props.name.toLowerCase()) > -1) {
            return (
                <Home/>
            )
        } else {
            try {
                var cp = require('../components/custom-page/' + this.props.name + 'Page.js');

                var pg = new cp.default();

                return pg.render();
            } catch (e) {
                return (
                    <FourOhFour/>
                )
            }
        }
    }
}

export default RenderPage