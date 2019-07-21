import App, { Container } from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>
            Portfolio | Front End Developer | JavaScript | ReactJS | NodeJS
          </title>
          <meta
            name="description"
            content="Hello! My name is Vadim Saroka. 
            The main area of my experience is front end development.
            HTML, CSS, SCSS, JS, building small web apps using React, Redux, responsive design, animations."
          />
          <meta
            name="keywords"
            content="I have serious passion for building sites & web apps using HTML, CSS, SCSS, JS, ReactJs, NodeJs "
          />
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
