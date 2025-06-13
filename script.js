const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        // string method to replace operators with JavaScript equivalents
        expression = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/\^/g, "**")
        .replace(/%/g, "/100");

        // Evaluate the expression safely and catch errors
        const result = eval(expression);
        display.textContent = parseFloat(result.toFixed(10));
        expression = display.textContent;
      } catch (e) {
        display.textContent = "Error";
        expression = "";
      }
    } else if (value === "C") {
      // Reset the expression and clear display 
      expression = "";
      display.textContent = expression;
    } else if (value === "⌫") {
      // Remove the last character from the expression
      expression = expression.slice(0, -1);
      display.textContent = expression;
    } else {
      // Append the clicked button value to the expression
      expression += value;
      display.textContent = expression;
    }
  });
});