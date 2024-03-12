import { Providers } from "./providers";
import { Home } from "../pages/Home";
import "./index.module.css";

export function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
