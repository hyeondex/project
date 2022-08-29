import React from "react";
import ExpenseBoard from "./components/ExpenseBoard";
import Common from "./components/Common";

// app
function App() {
  const data = [
    {
      id: 0,
      title: "title1",
      amount: 9800,
      date: new Date(2022, 2, 17),
    },
    {
      id: 1,
      title: "title2",
      amount: 10000,
      date: new Date(2022, 0, 17),
    },
    {
      id: 2,
      title: "title3",
      amount: 900,
      date: new Date(2022, 8, 17),
    },
    {
      id: 3,
      title: "title4",
      amount: 5000000,
      date: new Date(2022, 8, 17),
    },
  ];
  return (
    <div>
      <ExpenseBoard data={data} />
      <common />
    </div>
  );
}

export default App;
