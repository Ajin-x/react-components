import Calendar from "./Calendar";
import dayjs from "dayjs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Calendar
        value={dayjs("2024-07-13")}
        locale="en-US"
        onChange={(date) => {}}
      ></Calendar>
    </div>
  );
}

export default App;
