var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto)


function Chutar() {
  
    
  
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado"); 


  if (chute == numeroSecreto) {
    
    resultado.innerHTML = "Parabéns você acertou! ";
    
    
  }else if (chute > 10 || chute < 0 ) {
    resultado.innerHTML = "Digite um número entre 0 e 10";
  
  } else {
     
  resultado.innerHTML = "Errou! O número secreto era " + numeroSecreto;
  
  
 
  }
  setTimeout(function() {
    resultado.style.opacity = 0;
   
   }, 2000)
   numeroSecreto =parseInt(Math.random() * 11);
   console.log(numeroSecreto)
   resultado.style.opacity = 1;
  }
  

  


