import { Providers } from "./providers";
import { Home } from "../pages";
import "./index.module.scss";
import "./reset.css";

export function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
