import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { Footer } from "./template/Footer";
import { Refresh } from "./template/Refresh";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <nav className="page-width">
        <div className="gradient-box">
          <a>RESUME</a>
        </div>
      </nav>
      <App key={count} className="page-width" />
      <Footer
        title="Enter animation"
        url="https://framer.com/docs/animation/"
      />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);



/*import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { Footer } from "./template/Footer";
import { Refresh } from "./template/Refresh";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <App key={count} />
      <Footer
        title="Enter animation"
        url="https://framer.com/docs/animation/"
      />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);*/
