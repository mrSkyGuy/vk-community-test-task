import { Providers } from "./providers";
import { Home } from "../pages";
import "./index.module.scss";

export function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
