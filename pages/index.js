import GlobalLayout from '../components/GlobalLayout.js'
import { withRouter } from 'next/router'
import RenderPage from '../components/RenderPage.js'

const index = (props) => (
    <GlobalLayout>
        <RenderPage name={props.router.query.page} query={props.router.query}/>
    </GlobalLayout>
)

export default withRouter(index)