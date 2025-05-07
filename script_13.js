function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      let result = a / b;
      console.log("Result is:", result);
    } catch (error) {
      console.error("Error occurred:", error.message);
    } finally {
      console.log("Division operation completed.");
    }
  }
  
  divide(10, 2);
  divide(10, 0);