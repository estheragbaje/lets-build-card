import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Card } from "./Card";

function App() {
  return <Card />;
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
