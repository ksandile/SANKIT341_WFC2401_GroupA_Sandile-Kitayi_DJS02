document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-form]");
  const result = document.querySelector("[data-result]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the input values
    const dividend = parseFloat(form.elements["dividend"].value);
    const divider = parseFloat(form.elements["divider"].value);

    // Check if inputs are valid numbers
    if (isNaN(dividend) || isNaN(divider)) {
      result.innerText = "Invalid input. Please enter valid numbers.";
      return;
    }

    // Check if any input value is empty
    if (dividend === "" || divider === "") {
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      return;
    }

    // Check if divider is zero
    if (divider === 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("Error: Division by zero");
      return;
    }

    // Perform division
    const divisionResult = dividend / divider;

    // Check if result is a whole number
    if (Number.isInteger(divisionResult)) {
      result.innerText = divisionResult;
    } else {
      result.innerText = "Division result is not a whole number.";
    }
  });
});