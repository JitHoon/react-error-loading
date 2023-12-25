import { FallbackProps } from "react-error-boundary";

export const MainPageErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div className="error-fallback__container">
      <div className="error-fallback__modal">
        <span>메인 페이지 에러</span>
        <span className="error-fallback__message">{error.message}</span>
        <button onClick={() => resetErrorBoundary()}>다시 시도</button>
      </div>
    </div>
  );
};

export const CustomMenuErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div className="error-fallback__container">
      <div className="error-fallback__modal">
        <span>메뉴 API 요청 에러</span>
        <span className="error-fallback__message">{error.message}</span>
        <button onClick={() => resetErrorBoundary()}>다시 시도</button>
      </div>
    </div>
  );
};
