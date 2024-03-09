import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, AdaptivityProvider } from "@vkontakte/vkui";

import { App } from "./app";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
