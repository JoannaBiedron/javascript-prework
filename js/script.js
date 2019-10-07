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
    /*printMessage('TVARDY weź się nie wygłupiaj. Wybierz swój ruch: kamień, papier lub nożyce. Tu się nie gra kaloryferem, krzesłem ...ani śrubokrętem');
    */
    }
  }

  /*Ruch komputera*/
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName (randomNumber);
  /*
  if(randomNumber == 1){
    computerMove = 'kamień';
  }
  else if(randomNumber==2){
    computerMove='nożyce';
  }
  else if (randomNumber==3) {
    computerMove='papier';
  }
  */

  printMessage('Ruch komputera to: ' + argComputerMove);

  /*Ruch gracza*/

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName (playerInput);
  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  }
  else if (playerInput=='2') {
    playerMove='nożyce';
  }
  else if (playerInput=='3') {
    playerMove='papier';
  }
  */

  printMessage('Twój ruch to: ' + argPlayerMove);

  /*funkcja displayResult - wynik */

  function displayResult(argComputerMove, argPlayerMove){

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return('Ty wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      return('Ty wygrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      return('Ty wygrywasz!');
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
      return('Wygrywa komputer!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      return('Wygrywa komputer!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      return('Wygrywa komputer!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
      return('TVARDY weź się nie wygłupiaj. Wybierz swój ruch: kamień, papier lub nożyce. Tu się nie gra kaloryferem, krzesłem ...ani śrubokrętem');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
      return('TVARDY weź się nie wygłupiaj. Wybierz swój ruch: kamień, papier lub nożyce. Tu się nie gra kaloryferem, krzesłem ...ani śrubokrętem');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
      return('TVARDY weź się nie wygłupiaj. Wybierz swój ruch: kamień, papier lub nożyce. Tu się nie gra kaloryferem, krzesłem ...ani śrubokrętem');
    }
  }
  /*printMessage('Komputer zagrał '+argComputerMove+', a Ty '+argPlayerMove);*/
  printMessage ('wynik: '+ displayResult(argComputerMove, argPlayerMove));
}
/*playGame(3);*/
/*
button-rock.addEventListener('click',);
button-paper.addEventListener('click');
button-scissors.addEventListener('click')*/

document.getElementById('button-rock').addEventListener('click', function(){
  /*printMessage('Wybrałeś kamień.')*/
  playGame(1);
});
document.getElementById('button-paper').addEventListener('click', function(){
    /*printMessage('Wybrałeś papier.')*/
  playGame(2);
});
document.getElementById('button-scissors').addEventListener('click', function(){
    /*printMessage('Wybrałeś nożyce.')*/
  playGame(3);
});
