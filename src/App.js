import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  console.log(cards);
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card--container">{cards}</section>
    </div>
  );
}

export default App;
