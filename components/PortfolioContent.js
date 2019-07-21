import Link from "next/link";
import "./PortfolioContent.scss";

const PortfolioContent = ({ img, title, description, link }) => {
  return (
    <figure className="portfolio__item">
      <img className="portfolio__img" src={img.props.src} alt={title} />
      <div className="portfolio__mask">
        <h4>{title}</h4>
        <p className="portfolio__description">{description}</p>
        <Link as={`/details/${link}`} href={`/details?link=${link}`}>
          <a className="portfolio__info">View project</a>
        </Link>
      </div>
    </figure>
  );
};

export default PortfolioContent;
