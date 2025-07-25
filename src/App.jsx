import { useState } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto  flex flex-col gap-6">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
