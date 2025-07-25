import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import MainCard from "../card/MainCard";

const MainContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
      <MainCard/>
    </div>
  );
};

export default MainContent;
