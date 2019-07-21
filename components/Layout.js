import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  const links = [
    { label: "home", link: "/" },
    { label: "about", link: "/about" },
    { label: "projects", link: "/projects" },
    { label: "contact", link: "/contact" }
  ];

  return (
    <React.Fragment>
      <Header links={links} />
      <section className="container">
        <div className="filter" />
        <div className="moving-clouds" />
        {props.children}
        <picture className="container__fog">
          <source
            srcSet="../static/fog-low-small.png"
            media="(max-width: 43.75em)"
          />
          <img
            srcSet="../static/fog-low.png"
            alt="fog"
            src="../static/fog-low.png"
          />
        </picture>
        <div className="bird-container bird-container--one">
          <div className="bird bird--one" />
        </div>

        <div className="bird-container bird-container--two">
          <div className="bird bird--two" />
        </div>

        <div className="bird-container bird-container--three">
          <div className="bird bird--three" />
        </div>

        <div className="bird-container bird-container--four">
          <div className="bird bird--four" />
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .container {
          background-image: url(../static/background.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          flex: 100%;
          min-height: 100vh;
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding-bottom: 5rem;
          padding-top: 15rem;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media only screen and (max-width: 120em) {
          .container {
            background-image: url(../static/background-large.jpg);
          }
        }
        @media only screen and (max-width: 75em) {
          .container {
            background-image: url(../static/background-medium.jpg);
          }
        }
        @media only screen and (max-width: 43.75em) {
          .container {
            background-image: url(../static/background-small.jpg);
          }
        }
        .filter {
          transition: all 0.15s linear;
        }
        .filter::after {
          background-color: rgba(0, 0, 0, 0.5);
          content: "";
          display: block;
          height: 100%;
          left: 0;
          top: 0;
          position: absolute;
          width: 100%;
          z-index: 1;
        }
        .moving-clouds {
          background-image: url(../static/clouds.png);
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: 300%;
          height: 100%;
          animation: clouds 80s linear infinite;
        }
        @media only screen and (max-width: 56.52em) {
          .moving-clouds {
            background-image: url(../static/clouds-small.png);
          }
        }
        .container__fog {
          position: absolute;
          left: 50%;
          top: 45%;
          /* width: 100%; */
          transform: translateX(-50%);
          opacity: 0.85;
          z-index: 1;
        }
        @keyframes clouds {
          0% {
            transform: translateZ(0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .bird {
          background-image: url(../static/bird-cells.svg);
          background-size: auto 100%;
          width: 88px;
          height: 125px;
          will-change: background-position;
          animation-name: fly-cycle;
          animation-timing-function: steps(10);
          animation-iteration-count: infinite;
        }

        .bird--one {
          animation-duration: 1s;
          animation-delay: -0.5s;
        }

        .bird--two {
          animation-duration: 0.9s;
          animation-delay: -0.75s;
        }

        .bird--three {
          animation-duration: 1.25s;
          animation-delay: -0.25s;
        }

        .bird--four {
          animation-duration: 1.1s;
          animation-delay: -0.5s;
        }

        .bird-container {
          position: absolute;
          top: 20%;
          left: -10%;
          transform: scale(0) translateX(-10vw);
          will-change: transform;

          animation-name: fly-right-one;
          animation-timing-function: linear;
          animation-iteration-count: 1;
          // animation-iteration-count: infinite;
        }

        .bird-container--one {
          animation-duration: 15s;
          animation-delay: 0;
        }

        .bird-container--two {
          animation-duration: 16s;
          animation-delay: 1s;
        }

        .bird-container--three {
          animation-duration: 14.6s;
          animation-delay: 9.5s;
        }

        .bird-container--four {
          animation-duration: 16s;
          animation-delay: 10.25s;
        }

        @keyframes fly-cycle {
          100% {
            background-position: -900px 0;
          }
        }

        @keyframes fly-right-one {
          0% {
            transform: scale(0.3) translateX(-10vw);
          }

          10% {
            transform: translateY(2vh) translateX(10vw) scale(0.4);
          }

          20% {
            transform: translateY(0vh) translateX(30vw) scale(0.5);
          }

          30% {
            transform: translateY(4vh) translateX(50vw) scale(0.6);
          }

          40% {
            transform: translateY(2vh) translateX(70vw) scale(0.6);
          }

          50% {
            transform: translateY(0vh) translateX(90vw) scale(0.6);
          }

          60% {
            transform: translateY(0vh) translateX(110vw) scale(0.6);
          }

          100% {
            transform: translateY(0vh) translateX(110vw) scale(0.6);
          }
        }

        @keyframes fly-right-two {
          0% {
            transform: translateY(-2vh) translateX(-10vw) scale(0.5);
          }

          10% {
            transform: translateY(0vh) translateX(10vw) scale(0.4);
          }

          20% {
            transform: translateY(-4vh) translateX(30vw) scale(0.6);
          }

          30% {
            transform: translateY(1vh) translateX(50vw) scale(0.45);
          }

          40% {
            transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
          }

          50% {
            transform: translateY(0vh) translateX(90vw) scale(0.45);
          }

          51% {
            transform: translateY(0vh) translateX(110vw) scale(0.45);
          }

          100% {
            transform: translateY(0vh) translateX(110vw) scale(0.45);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Layout;
