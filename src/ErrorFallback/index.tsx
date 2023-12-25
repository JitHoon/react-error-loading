import { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="error-fallback__container">
      <div className="error-fallback__modal">
        <span className="error-fallback__message">{error.message}</span>
        <button onClick={() => resetErrorBoundary()}>다시 시도</button>
      </div>
    </div>
  );
};

export default ErrorFallback;
