var boolResponse = null;

var categoryFood = [
  [],
  [],
  [],
  []
];
while(1){
 
  if(categoryFood[0].length != 0 || categoryFood[1].length != 0 || categoryFood[2].length != 0 || categoryFood[3].length != 0) {
    boolResponse = prompt("Digite 1 se você deseja adicionar uma comida na sua lista de compras, digite 2 se deseja remover algum item da lista ou digite 3 caso queira encerrar o programa");
  } else {
    boolResponse = prompt("Digite 1 se você deseja adicionar uma comida na sua lista de compras ou digite 3 caso queira encerrar o programa");
  }

  if(boolResponse === '1'){

  var food = prompt("Qual comida você deseja inserir?");

  var categoryResponse = prompt("Qual categoria essa comida se encaixa? Digite o número que define a categoria: \n\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces");
  
  if(categoryResponse != '1' && categoryResponse != '2' && categoryResponse != '3' && categoryResponse != '4'){
    while(1){
      alert('Essa categoria não foi pré-definida.');
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

  } else if ( boolResponse === '2' ) {
    var itemRemove = prompt(`Qual item da lista deseja remover?\n\nLista Atual:\n      Frutas: ${categoryFood[0]}\n      Laticínios: ${categoryFood[1]}\n      Congelados: ${categoryFood[2]}\n      Doces: ${categoryFood[3]}`);

    if(categoryFood[0].includes(itemRemove)) {
      categoryFood[0].splice(categoryFood[0].indexOf(itemRemove), 1);
      alert(`Item removido com sucesso!\n\nLista:\n      Frutas: ${categoryFood[0]}\n      Laticínios: ${categoryFood[1]}\n      Congelados: ${categoryFood[2]}\n      Doces: ${categoryFood[3]} `);
    } else if(categoryFood[1].includes(itemRemove)) {
      categoryFood[1].splice(categoryFood[1].indexOf(itemRemove), 1);
      alert(`Item removido com sucesso!\n\nLista:\n      Frutas: ${categoryFood[0]}\n      Laticínios: ${categoryFood[1]}\n      Congelados: ${categoryFood[2]}\n      Doces: ${categoryFood[3]} `);
    } else if(categoryFood[2].includes(itemRemove)) {
      categoryFood[2].splice(categoryFood[2].indexOf(itemRemove), 1);
      alert(`Item removido com sucesso!\n\nLista:\n      Frutas: ${categoryFood[0]}\n      Laticínios: ${categoryFood[1]}\n      Congelados: ${categoryFood[2]}\n      Doces: ${categoryFood[3]} `);
    } else if(categoryFood[3].includes(itemRemove)) {
      categoryFood[3].splice(categoryFood[3].indexOf(itemRemove), 1);
      alert(`Item removido com sucesso!\n\nLista:\n      Frutas: ${categoryFood[0]}\n      Laticínios: ${categoryFood[1]}\n      Congelados: ${categoryFood[2]}\n      Doces: ${categoryFood[3]} `);
    } else {
      alert("Não foi possível encontrar o item dentro da lista!");
    }


  } else if( boolResponse === '3') {
    break;
  } else {
    alert('Digite uma resposta válida');
  }
}

alert(`Lista de compras:\n     Frutas: ${categoryFood[0]}\n     Laticínios: ${categoryFood[1]}\n     Congelados: ${categoryFood[2]}\n     Doces: ${categoryFood[3]}`)