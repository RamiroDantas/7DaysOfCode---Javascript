function handleSubmitData(){
  event.preventDefault();
  var nameUser = document.getElementById('name').value;
  var ageUser = document.getElementById('age').value;
  var languageUser = document.getElementById('language').value;


  if(!nameUser) {
    alert("Digite seu nome para continuar");
    return;
  }
  
  if(!ageUser) {
    alert("Digite sua idade para continuar");
    return;
  }

  if(!languageUser) {
    alert("Digite uma linguagem para continuar");
    return;
  }

  alert(`Olá ${nameUser}", você tem ${ageUser} anos e já está aprendendo ${languageUser}!`);


  var feedback = prompt("Você gosta de estudar " + languageUser + "?\nResponda com número 1 para SIM ou 2 para NÃO");

  if(feedback == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  } else if(feedback == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  }
}