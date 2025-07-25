import { Card } from "antd";
import React from "react";
import ChipsInput from "../../pages/ChipsInput";
import Sum from "../../pages/Sum";
import queryString from "query-string"; // to parse query params
import { useLocation, useNavigate } from "react-router-dom";

const MainCard = ({ title, onclick, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = queryString.parse(location.search);
  const cardList = [
    { key: "card1", title: "Chips Input", component: ChipsInput },
    { key: "card2", title: "Sum", component: Sum },
  ];

  const handleClick = (componentKey) => {
    navigate(`?card=${componentKey}`);
  };

  const activeCard = cardList.find((c) => c.key === card);

  return (
    <div>
      {activeCard ? (
        <div>
          <button onClick={() => navigate("?")}>Back</button>
          <h2>{activeCard.title}</h2>
          <activeCard.component />
        </div>
      ) : (
        cardList.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            onClick={() => handleClick(card.key)}
            style={{ width: 300, margin: "10px" }}
          >
            <p>Click to open {card.title}</p>
          </Card>
        ))
      )}
    </div>
  );
};

export default MainCard;
