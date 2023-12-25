import "./App.css";
import { lazy, Suspense } from "react";
import MainPageSkeleton from "./MainPage/index.skeleton";
const MainPage = lazy(() => import("./MainPage"));

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { MainPageErrorFallback } from "./MainPage/index.error";

function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} fallbackRender={MainPageErrorFallback}>
      <Suspense fallback={<MainPageSkeleton />}>
        <MainPage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
