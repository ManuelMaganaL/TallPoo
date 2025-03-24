// script.js
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}
  
function calcular(operacion) {
    const num1 = parseFloat(document.getElementById(`num1-${operacion}`).value);
    const num2 = parseFloat(document.getElementById(`num2-${operacion}`).value);
    let resultado;
  
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        resultado = num1 / num2;
        break;
      default:
        resultado = "Operación no válida";
    }
  
    document.getElementById(`resultado-${operacion}`).textContent = `Resultado: ${resultado}`;
}