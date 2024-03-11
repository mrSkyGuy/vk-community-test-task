import { Providers } from "./providers";
import { Home } from "../pages/Home";
import "./index.module.scss";

export function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
