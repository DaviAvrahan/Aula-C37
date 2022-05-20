class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
    question.hide();
    // escreva o código aqui para mudar a cor de fundo
    background("yellow");
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    textSize(30);
    fill(0);
    text("resultado do questionario",340,50);
    // chame getContestantInfo () aqui
    contestant.getContestantInfo();

    // escreva a condição para verificar se contestantInfor não é indefinido
    if(allConstestants !== undefined){
      var position = 230;
      fill("blue");
      textSize(20);
      text("jogador que respondeu a resposta correta é destacado na cor verde",130,230);
      for(var plr in allConstants){
        var nota = 2;
        if(nota === allConstants[plr].answer){
          fill("green");
        }else{
          fill("red");
        }
        position +=30
        textSize(20);
        text(allConstants[plr].name+": "+allConstants[plr].answer,250,position);
      }
    }
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    
  }

}
