import Link from "next/link";
import "./Header.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { isClicked: "home" };
  }

  componentDidMount() {
    let activeURL = document.location.pathname.replace("/", "");
    if (activeURL === "") {
      activeURL = "home";
    }
    this.setState({ isClicked: activeURL });
  }

  link = () => {
    const newLink = this.props.links.map((link, index) => {
      return (
        <Link href={link.link} key={index}>
          <a
            className={
              this.state.isClicked === link.label
                ? "header__item from-left header__item--active"
                : "header__item from-left"
            }
          >
            {link.label}
          </a>
        </Link>
      );
    });

    return newLink;
  };

  closeBtn = () => {
    document.querySelector(".header__checkbox").checked = false;
  }

  render() {
    return (
      <div className="header">
        <input
          type="checkbox"
          className="header__checkbox"
          id="header__toggle"
        />
        <label htmlFor="header__toggle" className="header__button">
          <span className="header__icon" />
        </label>
        <nav className="header__nav">
          <h1 className="header__logo animated">=VS=</h1>
          {this.link()}
        </nav>
        <div className="header__background" onClick={()=> this.closeBtn()}></div>
        <style jsx>{`
          .header__checkbox:checked ~ .header__nav {
            background-image: url(../static/overlay.png);
          }
          .header__background {
            background-image: url(../static/overlay.png);
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
