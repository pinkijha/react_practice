import { Card } from "antd";
import React from "react";
import ChipsInput from "../../pages/ChipsInput";
import Sum from "../../pages/Sum";
import queryString from "query-string"; // to parse query params
import { useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../../pages/ContactForm";
import ColorChange from "../../pages/ColorChange";
import CommentWidget from "../../pages/CommentWidget";

const MainCard = ({ title, onclick, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = queryString.parse(location.search);
  const cardList = [
    { key: "card1", title: "Chips Input", component: ChipsInput },
    { key: "card2", title: "Sum", component: Sum },
    { key: "card3", title: "Conatct Form ", component: ContactForm },
    { key: "card4", title: "Color Changer ", component: ColorChange },
    { key: "card5", title: "Comment Widget ", component: CommentWidget },
  ];

  const handleClick = (componentKey) => {
    navigate(`?card=${componentKey}`);
  };

  const activeCard = cardList.find((c) => c.key === card);

  return (
    <div>
      {activeCard ? (
        <div className="m-4">
          <button onClick={() => navigate("?")} className="bg-blue-500 text-white px-2 py-1 rounded-xl">Back</button>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-xl mb-4">{activeCard.title}</h2>
            <activeCard.component />
          </div>
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
