import "./App.css";
import { lazy, Suspense } from "react";
import MainPageSkeleton from "./MainPage/index.skeleton";
const MainPage = lazy(() => import("./MainPage"));

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} fallbackRender={ErrorFallback}>
      <Suspense fallback={<MainPageSkeleton />}>
        <MainPage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
