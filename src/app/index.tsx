import { QueryClientProvider } from "react-query";

import { queryClient } from "../shared/lib/react-query";
import { Home } from "../pages";
import "./index.module.scss";
import "./reset.css";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
