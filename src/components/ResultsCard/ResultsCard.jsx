import "./ResultsCard.css";
import { Link } from "react-router-dom";

const ResultsCard = ({
  cardTitle,
  cardSubTitle,
  image,
  redirectType,
  redirectId,
}) => {
  return (
    <Link to={`/${redirectType}/${cardTitle}`}>
      <div className="results-card">
        <img className="results-card__avatar" src={image} />
        <h2>{cardTitle}</h2>
        <h3>{cardSubTitle}</h3>
      </div>
    </Link>
  );
};

export default ResultsCard;
