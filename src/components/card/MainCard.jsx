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
        <div className="flex gap-4 ">
          {cardList.map((card) => (
            <div key={card.key} className="min-w-[250px] max-w-[250px]">
              <Card
                title={card.title}
                onClick={() => handleClick(card.key)}
                hoverable
              >
                <p>Click to open {card.title}</p>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainCard;
