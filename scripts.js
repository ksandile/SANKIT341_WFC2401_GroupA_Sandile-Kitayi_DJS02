const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const body = document.querySelector("body"); // Select the body element

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Convert dividend and divider to numbers
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  // Validation when values are missing
  if (dividend.trim() === "" || divider.trim() === "") {
    // If either dividend or divider is empty dispaly an error message
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Check if either dividend or divider is not a number
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    // Replace the entire screen with an error message
    body.innerHTML =
      "<h1>Something critical went wrong. Please reload the page.</h1>";
    // Log an error in the browser console with call stack
    console.error(
      "Something critical went wrong. Please reload the page",
      new Error().stack
    );
  }

  // Check if divider is zero
  if (dividerNum === 0) {
    console.error("Division not performed. Invalid number provided. Try again");
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    return;
  }

  // Perfom division
  const divisionResult = dividend / divider;
  result.innerText = Math.trunc(divisionResult); // Use Math.trunc() to remove decimal part
});