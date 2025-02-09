import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook to handle form submission and simulate or perform an API call.
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    setResponse(null); // Clear the previous response

    try {
      await wait(2000); // Simulated delay

      // Simulated random success/failure
      const random = Math.random();
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }

      // Success case
      setResponse({
        type: "success",
        message: `Thanks for your submission, ${data.firstName}! We will get back to you shortly.`,
      });
    } catch (error) {
      // Error case
      setResponse({
        type: "error",
        message:
          error.message || "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
