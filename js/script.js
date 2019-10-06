
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
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName (randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber==2){
  computerMove='nożyce';
}
else if (randomNumber==3) {
  computerMove='papier';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName (playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput=='2') {
  playerMove='nożyce';
}
else if (playerInput=='3') {
  playerMove='papier';
}*/

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
}
if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}
if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Wygrywa komputer!');
}
if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Wygrywa komputer!');
}
if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Wygrywa komputer!');
}
if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('TVARDY weź się nie wygłupiaj. Wybierz swój ruch: kamień, papier lub nożyce. Tu się nie gra kaloryferem, krzesłem ...ani śrubokrętem');
}
if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('TVARDY weź się nie wygłupiaj. Wybierz swój ruch: kamień, papier lub nożyce. Tu się nie gra kaloryferem, krzesłem ...ani śrubokrętem');
}
if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('TVARDY weź się nie wygłupiaj. Wybierz swój ruch: kamień, papier lub nożyce. Tu się nie gra kaloryferem, krzesłem ...ani śrubokrętem');
}
