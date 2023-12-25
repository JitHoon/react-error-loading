import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/* 

v5 부터 suspense: boolean 옵션은 제거되고
useSuspenseQuery, useSuspenseInfiniteQuery와 useSuspenseQueries를 사용합니다.

*/

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
