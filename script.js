const calculator = document.getElementById("calculator");
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const historyList = document.getElementById("history-list");
const buttonsContainer = document.getElementById("buttons-container");
const historyView = document.getElementById("history-view");
const toggleHistoryBtn = document.getElementById("toggle-history");
const backToCalcBtn = document.getElementById("back-to-calc");

buttons.forEach((button) => {
  const value = button.textContent;

  if (button.id !== "toggle-history" && button.id !== "back-to-calc") {
    button.addEventListener("click", () => {
      if (value === "=") {
        try {
          const expression = display.textContent;
          const result = eval(
            expression
              .replace(/×/g, "*")
              .replace(/÷/g, "/")
              .replace(/\^/g, "**")
              .replace(/%/g, "/100")
          );
          display.textContent = parseFloat(result.toFixed(10));
          addToHistory(expression, parseFloat(result.toFixed(10)));
        } catch {
          display.textContent = "Error";
        }
      } else if (value === "C") {
        display.textContent = "";
      } else if (value === "⌫") {
        display.textContent = display.textContent.slice(0, -1);
      } else {
        display.textContent += value;
      }
    });
  }
});

// Toggle to history
toggleHistoryBtn.addEventListener("click", () => {
  buttonsContainer.style.display = "none";
  calculator.style.borderBottomLeftRadius = "0px";
  calculator.style.borderBottomRightRadius = "0px";
  historyView.style.display = "flex";
});

// Back to calculator
backToCalcBtn.addEventListener("click", () => {
  historyView.style.display = "none";
  buttonsContainer.style.display = "grid";
});

function addToHistory(expression, result) {
  const li = document.createElement("li");
  li.textContent = `${expression} = ${result}`;
  li.addEventListener("click", () => {
    display.textContent = expression;
    historyView.style.display = "none";
    buttonsContainer.style.display = "grid";
  });

//   prepend is used so latest operation is first
  historyList.prepend(li);
}
