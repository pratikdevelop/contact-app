import React, { useEffect, useState } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
 const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  useEffect(() => {
    const componentDidCatch = (error: any) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);

      // You can also log the error to an error tracking service
      console.error(error, errorInfo);  
    };

    window.addEventListener('error', componentDidCatch);

    return () => {
      window.removeEventListener('error', componentDidCatch);
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error ?  JSON.stringify(error) :""}</p>
        <p>{errorInfo && errorInfo.componentStack}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;