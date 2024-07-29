var boolResponse = null;

var categoryFood = [
  [],
  [],
  [],
  []
];
while(1){
  boolResponse = prompt("Se você deseja adicionar uma comida na sua lista de compras, responda 1 para sim ou 2 para não");
  if(boolResponse === '1'){

  var food = prompt("Qual comida você deseja inserir?");

  var categoryResponse = prompt("Qual categoria essa comida se encaixa? Digite o número que define a categoria: \n\n1 - 'Frutas'\n2 - Laticínios\n3 - Congelados\n4 - Doces");
  
  if(categoryResponse != '1' && categoryResponse != '2' && categoryResponse != '3' && categoryResponse != '4'){
    while(1){
      alert('Digite um número válido');
      categoryResponse = prompt("Qual categoria essa comida se encaixa? Digite o número que define a categoria: \n\n1 - 'Frutas'\n2 - laticínios\n3 - congelados\n4 - Doces");
      if(categoryResponse == '1' && categoryResponse == '2' && categoryResponse == '3' && categoryResponse == '4'){
        break;
      }
    }
  }

  if(categoryResponse == '1') {
    categoryFood[0].push(food);
  } else if(categoryResponse == '2'){
    categoryFood[1].push(food);
  } else if(categoryResponse == '3'){
    categoryFood[2].push(food);
  } else if(categoryResponse == '4'){
    categoryFood[3].push(food);
  }
  } else if( boolResponse === '2') {
    break;
  } else {
    alert('Digite uma resposta válida');
  }
}

alert(`Lista de compras:\n     Frutas: ${categoryFood[0]}\n     Laticínios: ${categoryFood[1]}\n     Congelados: ${categoryFood[2]}\n     Doces: ${categoryFood[3]}`)