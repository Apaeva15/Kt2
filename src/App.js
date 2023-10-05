import "./styles.css";

import React, { useState } from "react";
import RandomNameComponent from "./RandomNameComponent";

const App = () => {
  const [state, setState] = useState(5);

  const addSevenToState = (getter) => {
    for (let i = 0; i < 100; i += 7) {
      console.log(getter);
      if (getter > 100) {
        break;
      } else {
        setState(getter + i);
      }
    }
  };

  return (
    <div>
      <RandomNameComponent />
      <p>State: {state}</p>
      <button onClick={() => addSevenToState(state)}>Add Seven</button>
    </div>
  );
};

export default App;
