let response = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let responseUser = prompt("Tente acertar um número de 0 a 10");

let cnt = 2;

while(responseUser != response && cnt > 0) {
  alert(`Ops, parece que você errou! Você tem mais ${cnt} tentiva(s)!`);
  cnt--;
  responseUser = prompt("Tente acertar um número de 0 a 10");
}

if(responseUser == response){
  alert(`Parabéns, você acertou o número ${response}!`);
} else {
  alert(`É uma pena que não tenha certado! A resposta certa o número ${response}`);
}