interface ErrorDisplayProps {
    errors?: string[] | string;
    className?: string;
  }
  
  const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 
    errors, 
    className = "" 
  }) => {
    if (!errors) return null;
  
    const errorMessages = Array.isArray(errors) ? errors : [errors];
  
    return (
      <div className={`p-3 text-md text-center text-red-600 bg-red-50 rounded-md dark:bg-red-900/20 dark:text-red-400 ${className}`}>
        {errorMessages.map((error, index) => (
          <div key={index}>{error}</div>
        ))}
      </div>
    );
  };
  
  export default ErrorDisplay;