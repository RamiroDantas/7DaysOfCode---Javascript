let result = prompt("Qual área você deseja seguir? Digite 1 para Front-End ou 2 para Back-end");
while(result != 1 && result != 2) {
  alert('Digite um número válido');
  result = prompt("Qual área você deseja seguir? Digite 1 para Front-End ou 2 para Back-end");
}

if(result == 1){
  let techs = prompt("Qual tecnologia você quer aprender? Digite 1 para Vue.js ou 2 para React.js");
  while(techs != 1 && techs != 2) {
    alert('Digite um número válido');
    techs = prompt("Qual tecnologia você quer aprender? Digite 1 para Vue.js ou 2 para React.js");
  }
} else if(result == 2) {
  let techs = prompt("Qual tecnologia você quer aprender? Digite 1 para C# ou 2 para Java");
  while(techs != 1 && techs != 2) {
    alert('Digite um número válido');
    techs = prompt("Qual tecnologia você quer aprender? Digite 1 para C# ou 2 para Java");
  }
}


let continueCareer = prompt("O que você deseja? Digite 1 para 'Seguir se especializando na área escolhida' ou Digite 2 para 'Seguir se desenvolvendo para se tornar Fullstack'");

while(continueCareer != 1 && continueCareer != 2) {
  alert('Digite um número válido');
  continueCareer = prompt("O que você deseja? Digite 1 para 'Seguir se especializando na área escolhida' ou Digite 2 para 'Seguir se desenvolvendo para se tornar Fullstack'");
}

if(continueCareer == 1){
  alert(`Continue se especializando em ${techs} para dominar a área de ${result}!`);
} else if(continueCareer == 2) {
  alert(`Chegou a hora de começar a aprender outras linguagens além de ${techs} se você quer se tornar Fullstack!`);
}


let mais_techs = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite 'ok'");

while(mais_techs == 'ok') {
  let tech = prompt("Digite a tecnologia que deseja estudar:");
  alert(`Que legal! ${tech} é uma linguagem muito interessante de se estudar`);
   mais_techs = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite 'ok'");
}