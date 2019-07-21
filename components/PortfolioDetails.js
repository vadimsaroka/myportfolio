import Link from "next/link";
import "./PortfolioDetails.scss";

class PortfolioDetails extends React.Component {
  constructor() {
    super();

    this.state = { currentLink: null, currentWidth: 0 };
  }

  componentDidMount() {
    this.setState({
      currentLink: this.renderContent(this.props.title)[this.currentImg],
      currentWidth: screen.width
    });

    window.addEventListener("resize", () =>
      this.setState({ currentWidth: screen.width })
    );

    window.onorientationchange = (()=> this.setState({ currentWidth: screen.width }));
  }

  renderContent = title => {
    if (title === "baywood") {
      return this.renderBaywood();
    } else if (title === "royalfoodmarket") {
      return this.renderRoyal();
    } else if (title === "recipes2fork") {
      return this.renderRecipe();
    } else if (title === "portfolio") {
      return this.renderPortfolio();
    }
  };

  renderBaywood = () => {
    if (this.state.currentWidth < 1000) {
      return [
        "../static/baywood-medium.jpg",
        "../static/baywood-2-medium.jpg",
        "../static/baywood-3-medium.jpg",
        "../static/baywood-4-medium.jpg",
        "../static/baywood-5-medium.jpg"
      ];
    } else {
      return [
        "../static/baywood.jpg",
        "../static/baywood-2.jpg",
        "../static/baywood-3.jpg",
        "../static/baywood-4.jpg",
        "../static/baywood-5.jpg"
      ];
    }
  };

  renderRoyal = () => {
    if (this.state.currentWidth < 1000) {
      return [
        "../static/royalfoodmarket-medium.jpg",
        "../static/royalfoodmarket-2-medium.jpg",
        "../static/royalfoodmarket-3-medium.jpg",
        "../static/royalfoodmarket-4-medium.jpg",
        "../static/royalfoodmarket-5-medium.jpg"
      ];
    } else {
      return [
        "../static/royalfoodmarket.jpg",
        "../static/royalfoodmarket-2.jpg",
        "../static/royalfoodmarket-3.jpg",
        "../static/royalfoodmarket-4.jpg",
        "../static/royalfoodmarket-5.jpg"
      ];
    }
  };

  renderRecipe = () => {
    if (this.state.currentWidth < 1000) {
      return ["../static/recipes-medium.jpg"];
    } else {
      return ["../static/recipes.jpg"];
    }
  };

  renderPortfolio = () => {
    if (this.state.currentWidth < 1000) {
      return ["../static/vadim-medium.jpg"];
    } else {
      return ["../static/vadim.jpg"];
    }
  };

  linkRendering = link => {
    if (link === "baywood") {
      return ["https://baywood.herokuapp.com/", "https://github.com/vadimsaroka/baywood"];
    } else if (link === "royalfoodmarket") {
      return ["https://royalfoodmarket.herokuapp.com/", "https://github.com/vadimsaroka/royalfoodmarket"];
    } else if (link === "recipes2fork") {
      return ["https://recipes2fork.herokuapp.com/", "https://github.com/vadimsaroka/recipes2fork"];
    } else if (link === "portfolio") {
      return ["/", "https://github.com/vadimsaroka/baywood"];
    }
  };

  currentImg = 0;
  onButtonClick = (title, btn) => {
    let length = this.renderContent(title).length;
    const currentImg = document.getElementsByClassName(
      "portfolioDetail__img"
    )[0];

    if (btn === "left" && length > 0) {
      this.currentImg--;
      if (this.currentImg < 0) this.currentImg = length - 1;
    } else if (btn === "right" && length > 0) {
      this.currentImg++;
      if (this.currentImg > length - 1) this.currentImg = 0;
    }

    this.setState({ currentLink: this.renderContent(title)[this.currentImg] });

    if (length > 1) {
      currentImg.classList.add("animate");
      setTimeout(() => {
        currentImg.classList.remove("animate");
      }, 800);
    }
  };

  render() {
    return (
      <section className="portfolioDetail">
        <div className="portfolioDetail__border">
          <div className="portfolioDetail__wrapper">
            <div className="portfolioDetail__top">
              <div className="portfolioDetail__info">
                {this.currentImg + 1} /{" "}
                {this.renderContent(this.props.title).length}
              </div>
              <Link href="/projects">
                <a className="portfolioDetail__back">⊗</a>
              </Link>
            </div>
            <figure className="portfolioDetail__item">
              <div
                onClick={() => this.onButtonClick(this.props.title, "left")}
                className="portfolioDetail__left portfolioDetail__arrow"
              >
                ❮
              </div>

              <img
                className="portfolioDetail__img"
                src={this.state.currentLink}
                alt={this.props.title}
              />

              <div
                onClick={() => this.onButtonClick(this.props.title, "right")}
                className="portfolioDetail__right portfolioDetail__arrow"
              >
                ❯
              </div>
            </figure>
            <a
              className="portfolioDetail__link"
              target="_blank"
              rel="noopener"
              aria-label="Learn more about this project"
              href={this.linkRendering(this.props.title)[0]}
            >
              {this.linkRendering(this.props.title)[0]}
            </a>
            <a
              className="portfolioDetail__link"
              target="_blank"
              rel="noopener"
              aria-label="Learn more about this project"
              href={this.linkRendering(this.props.title)[1]}
            >
              {this.linkRendering(this.props.title)[1]}
            </a>
          </div>
        </div>
        <Link href="/projects">
          <a aria-label="background" className="portfolioDetail__background" />
        </Link>
        <div id="rotate" />
        <style jsx>{`
          .portfolioDetail__background {
            background-image: url(../static/overlay.png);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3;
            opacity: 0.3;
            cursor: default;
          }

          @media (max-width: 700px) and (orientation: portrait) {
            #rotate {
              position: fixed;
              background: #212121 url(../static/rotate.jpg) no-repeat center;
              background-size: 100% auto;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 10;
              display: block;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default PortfolioDetails;
