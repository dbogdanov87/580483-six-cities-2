import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";

const App = () => {
  const cardNames = [`Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
  ];
  return <MainScreen cardNames={cardNames}/>;
};

export default App;
