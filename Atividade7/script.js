function jogar(usuarioescolhe){

  var op = ["pedra","papel","tesoura"]
  var pc = op[Math.floor(Math.random()*3)]
  var r = ""

  // mil ifs porque pq não né kkkkk
  if(usuarioescolhe=="pedra" && pc=="pedra"){
    r = "Empate!"
  }
  else if(usuarioescolhe=="papel" && pc=="papel"){
    r = "Empate!"
  }
  else if(usuarioescolhe=="tesoura" && pc=="tesoura"){
    r = "Empate!"
  }
  else if(usuarioescolhe=="pedra" && pc=="tesoura"){
    r = "Você ganhou!"
  }
  else if(usuarioescolhe=="pedra" && pc=="papel"){
    r = "Computador ganhou!"
  }
  else if(usuarioescolhe=="papel" && pc=="pedra"){
    r = "Você ganhou!"
  }
  else if(usuarioescolhe=="papel" && pc=="tesoura"){
    r = "Computador ganhou!"
  }
  else if(usuarioescolhe=="tesoura" && pc=="papel"){
    r = "Você ganhou!"
  }
  else if(usuarioescolhe=="tesoura" && pc=="pedra"){
    r = "Computador ganhou!"
  }
  else {
    r = "sei lá bugou kkk"
  }

  document.getElementById("escolhaUsuario").innerHTML = "Você escolheu: " + usuarioescolhe
  document.getElementById("pcescolhe").innerHTML = "Computador escolheu: " + pc
  document.getElementById("resultado").innerHTML = r
}