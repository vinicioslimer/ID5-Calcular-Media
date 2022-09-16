// essa função checa se os inputs das notas estão preenchidos
function checkInputs(inputs) {
    var filled = true;
   inputs.forEach(function(input) {
     if(input.value === "") {
        filled = false;
    }
    });
  
  return filled;
  
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");

// essa função ativa o botão de resultado se todos os inputs forem preenchidos
inputs.forEach(function(input) {
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      document.getElementById("button").disabled = false;
      document.getElementById("button").style.backgroundColor='#4CAF50';
    } else {
      document.getElementById("button").disabled = true;
    }

  });

});
// essa função calcula a média das notas e retorna o resultado final
function resultado() {
  let res = document.getElementById("res");
  let nota = [];
  let n1 = document.getElementById("n1");
      n1 = Number(n1.value);
  nota.push(n1);
   let n2 = document.getElementById("n2");
      n2 = Number(n2.value);
  nota.push(n2);
   let n3 = document.getElementById("n3");
      n3 = Number(n3.value);
  nota.push(n3);
  let n4 = document.getElementById("n4");
      n4 = Number(n4.value);
  nota.push(n4);
  let media = 0;
  // os valores de cada input foram armazenados no array nota
  for (let i = 0; i < nota.length; i++) {
    media += nota[i];
  }
  media = media/nota.length;
  // todos os elementos do array nota foram somados, a média é a soma desse valor divivida pelo comprimento do array
  
  if(media >= 6) {
    // se a média for maior que 6, o resultado é aprovado
    res.innerHTML = `Sua média é ${media} <br> Você foi <span style="color: #4CAF50">aprovado!</span>`
} else { 
  // senão, é reprovado
  res.innerHTML = `Sua média é ${media} <br> Você foi <span style="color: red">reprovado!</span>`
}
}