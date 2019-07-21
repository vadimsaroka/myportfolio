import Layout from "../components/Layout";
const me = () => {
  return <img src="../static/me.jpeg" />;
};

import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <Layout>
      <AboutContent img={me()}/>
    </Layout>
  );
};

export default About;
