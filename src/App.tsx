import "./App.css";
import { lazy, Suspense } from "react";
import MainPageSkeleton from "./MainPage/index.skeleton";
const MainPage = lazy(() => import("./MainPage"));

function App() {
  return (
    <Suspense fallback={<MainPageSkeleton />}>
      <MainPage />
    </Suspense>
  );
}

export default App;
