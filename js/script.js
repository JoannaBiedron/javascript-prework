function playGame(playerInput){

  clearMessages();

  /*funkcja getMoveName */
  function getMoveName(argMoveId){

    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId==2){
      return 'papier';
    }
    else if (argMoveId==3) {
      return 'nożyce';
    }
    else {
      return 'nieznany ruch';

    }
  }
  /*Ruch gracza*/

  console.log('Gracz wybrał: ' + playerInput);

  let argPlayerMove = getMoveName (playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);

  /*Ruch komputera*/
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName (randomNumber);

  printMessage('Ruch komputera to: ' + argComputerMove);


  /*funkcja displayResult - wynik */

  function displayResult(argComputerMove, argPlayerMove){

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return('Twój papier zakrywa kamień. Wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      return('Twoje nożyce tną papier. Wygrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      return('Twój kamień tępi nożyce. Wygrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      return('Remis!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      return('Remis!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
      return('Remis!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      return('Kamień tępi Twoje nożyce. Wygrywa komputer!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      return('Nożyce tną Twój papier. Wygrywa komputer!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      return(' Papier zakrywa Twój kamień. Wygrywa komputer!');
    }
  }

  printMessage ('wynik: '+ displayResult(argComputerMove, argPlayerMove));
}
/*playGame(3);*/

document.getElementById('button-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('button-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('button-scissors').addEventListener('click', function(){
  playGame(3);
});
