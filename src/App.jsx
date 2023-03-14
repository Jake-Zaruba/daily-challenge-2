import { useState } from "react";
import "./App.css";
import Tip from "./assets/components/Tip";

function App() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("");
  function getTip(bill, percent) {
    let total = bill * (percent / 100);
    return total.toFixed(2);
  }

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => {
          setBill(e.target.value);
        }}
        value={bill}
      />
      <input
        type="number"
        onChange={(e) => {
          setPercent(e.target.value);
        }}
        value={percent}
      />
      <button
        onClick={() => {
          getTip();
        }}
      >
        Tip
      </button>
      <span>{<Tip bill={bill} percent={percent} getTip={getTip} />}</span>
    </div>
  );
}

export default App;
