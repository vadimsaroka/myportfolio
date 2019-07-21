import Layout from "../components/Layout";
import "../scss/projects.scss";

const baywood = () => {
  return <img src="../static/baywood.jpg" />;
};
const royalfoodmarket = () => {
  return <img src="../static/royalfoodmarket.jpg" />;
};
const recipes = () => {
  return <img src="../static/recipes.jpg" />;
};
const portfolio = () => {
  return <img src="../static/vadim.jpg" />;
};

import PortfolioContent from "../components/PortfolioContent";
const Portfolio = () => {
  return (
    <Layout>
      <section className="portfolio">
        <div className="portfolio__heading">
          <h4>My Latest Work </h4>
          <p className="portfolio__text">
            Take a look at some of my recent projects.
          </p>
        </div>
        <div className="portfolio__wrapper">
          <PortfolioContent
            img={baywood()}
            title="Baywood Capital"
            description="Node.js | JavaScript | Sass"
            link="baywood"
          />
          <PortfolioContent
            img={royalfoodmarket()}
            title="Royal Food Market"
            description="Node.js | JavaScript | Sass"
            link="royalfoodmarket"
          />
          <PortfolioContent
            img={recipes()}
            title="Recipes2Fork"
            description="Node.js | React.js | CCS"
            link="recipes2fork"
          />
          <PortfolioContent
            img={portfolio()}
            title="My Portfolio"
            description="Node.js | Next.js | Sass"
            link="portfolio"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
