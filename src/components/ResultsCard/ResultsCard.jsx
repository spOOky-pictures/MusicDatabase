import "./ResultsCard.css";

const ResultsCard = ({ cardTitle, cardSubTitle }) => {
  return (
    <div>
      <h2>{cardTitle}</h2>
      <h3>{cardSubTitle}</h3>
    </div>
  );
};

export default ResultsCard;
