function Sum(num1, num2){
  return (num1 + num2);
}

function Sub(num1, num2){
  return (num1 - num2);
}

function Mul(num1, num2){
  return (num1 * num2);
}

function Div(num1, num2) {
  return (num1 / num2);
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}


while(1) {
  var operation = prompt("Bem vindo a sua calculadora pessoal! Escolha uma operação para prosseguir:\n\nDigite:\n     1 para Soma\n     2 para Subtração\n     3 para Multiplicação\n     4 para Divisão\n     5 para Sair\n");

  switch(operation) {
    case '1':
      while(1){
        var number1 = parseInt(prompt("Digite o primeiro número para sua operação:"));
        var number2 = parseInt(prompt("Digite o segundo número para sua operação:"));

        if(isNumber(number1) === true && isNumber(number2) === true){
          var result = Sum(number1, number2);
          alert(`O Resultado da sua soma foi: ${result}`);
          break;
        } else {
          alert("Digite números válidos!")
        }
      }
      break;
    case '2':
      while(1){
        var number1 = parseInt(prompt("Digite o primeiro número para sua operação:"));
        var number2 = parseInt(prompt("Digite o segundo número para sua operação:"));

        if(isNumber(number1) === true && isNumber(number2) === true){
          var result = Sub(number1, number2);
          alert(`O Resultado da sua subtração foi: ${result}`);
          break;
        } else {
          alert("Digite números válidos!")
        }
      }
      break;
    case '3':
       while(1){
        var number1 = parseInt(prompt("Digite o primeiro número para sua operação:"));
        var number2 = parseInt(prompt("Digite o segundo número para sua operação:"));

        if(isNumber(number1) === true && isNumber(number2) === true){
          var result = Mul(number1, number2);
          alert(`O Resultado da sua multiplicação foi: ${result}`);
          break;
        } else {
          alert("Digite números válidos!")
        }
      }
      break;
    case '4':
       while(1){
        var number1 = parseInt(prompt("Digite o primeiro número para sua operação:"));
        var number2 = parseInt(prompt("Digite o segundo número para sua operação:"));

        if(isNumber(number1) === true && isNumber(number2) === true){
          var result = Div(number1, number2);
          alert(`O Resultado da sua divisão foi: ${result}`);
          break;
        } else {
          alert("Digite números válidos!")
        }
      }
      break;
    case '5':
      break;
    default:
      alert('Comando inválido');
  }
  if(operation == '5') break;
}

alert("Até a próxima!");