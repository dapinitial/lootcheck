import React from "react";
import Wallet from "./Wallet";
import Loot from "./Loot";

const App = () => {
  return (
    <div>
      <h2>Loot Check App!</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
      <div>
        <p>
          Powered by{" "}
          <a href="https://www.coindesk.com/price" target="_blank">
            Coindesk
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
