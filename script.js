const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        expression = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/\^/g, "**")
        .replace(/%/g, "/100");

        const result = eval(expression);
        display.textContent = parseFloat(result.toFixed(10));
        expression = display.textContent;
      } catch (e) {
        display.textContent = "Error";
        expression = "";
      }
    } else if (value === "C") {
      expression = "";
      display.textContent = expression;
    } else if (value === "⌫") {
      expression = expression.slice(0, -1);
      display.textContent = expression;
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});