import Layout from "../components/Layout";
import { withRouter } from "next/router";
import PortfolioDetails from "../components/PortfolioDetails";

const Details = withRouter(props => (
    <Layout>
        <PortfolioDetails title={props.router.query.link}/>
    </Layout>
))

export default Details;