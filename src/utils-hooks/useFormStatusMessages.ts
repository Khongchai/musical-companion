import { useState } from "react";

/**
 * Calling either setFinishedMessage or setErrorMessage will remove the message of the other.
 */
export default function useFormStatusMessages() {
  const [error, setError] = useState("");
  const [finished, setFinished] = useState("");
  const setErrorMessage = (message: string) => {
    setFinished("");
    setError(message);
  };
  const setFinishedMessage = (message: string) => {
    setError("");
    setFinished(message);
  };

  return {
    errorMessage: error,
    setErrorMessage,
    finishedMessage: finished,
    setFinishedMessage,
  };
}
