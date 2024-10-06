import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import Header from "./template/Header";
import Sidebar from "./template/Sidebar";
import { Footer } from "./template/Footer";
import { Refresh } from "./template/Refresh";
//import "@fontsource/poppins" // Defaults to weight 400 with all styles included.
import "@fontsource-variable/raleway";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Header></Header>
      <div className="page">
        <Sidebar></Sidebar>
        <App key={count} className="" />
      </div>
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
