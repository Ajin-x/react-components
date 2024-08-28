import React from "react";
import Calendar from "./Calendar";
import dayjs from "dayjs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Calendar
        value={dayjs("2024-07-13")}
        style={{ background: "yellow" }}
        className={"aaa"}
      ></Calendar>
    </div>
  );
}

export default App;
