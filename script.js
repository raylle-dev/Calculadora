const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function appendPercentage() {
  display.value += "%";
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expr = display.value;

    // Substitui TODOS os números seguidos de % por (n*0.01)
    // Funciona para números com ou sem decimal
    expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1*0.01)");

    // Avalia a expressão
    display.value = eval(expr);
  } catch {
    display.value = "Erro";
  }
}