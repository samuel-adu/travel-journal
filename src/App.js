import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  const travelCard = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <div className="container card-list">{travelCard}</div>
    </div>
  );
}

export default App;
