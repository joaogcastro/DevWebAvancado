console.log("bolinho");


let posX1 = 0;
let posX2 = 0;
let posX3 = 0;
let posX4 = 0;
let posX5 = 0;
let myInterval;
let balance;
let betV;
let betC;
let activeBet;
let turbo;
let raceActive;
let slow;

function myTimer() {
  posX1 += Math.ceil(Math.random() * 30);
  posX2 += Math.ceil(Math.random() * 30);
  posX3 += Math.ceil(Math.random() * 30);
  posX4 += Math.ceil(Math.random() * 30);
  posX5 += Math.ceil(Math.random() * 30);

  if (turbo === true){
    switch (betC){
      case 'C1':
        posX1 += Math.ceil(Math.random() * 35);
        break;
      case 'C2':
        posX2 += Math.ceil(Math.random() * 35);
        break;
      case 'C3':
        posX3 += Math.ceil(Math.random() * 35);
        break;
      case 'C4':
        posX4 += Math.ceil(Math.random() * 35);
        break;
      case 'C5':
        posX5 += Math.ceil(Math.random() * 35);
        break;
      default:
        break;
    }
  }

  /*if(slow === true){
    console.log("slow triggered")
    const carToBeSlowed = slowSomeone();
    switch(carToBeSlowed){
      case 'C1':
        posX1 += Math.ceil(Math.random() * 25);
        console.log('c1')
        break;
      case 'C2':
        posX2 += Math.ceil(Math.random() * 25);
        console.log('c2')
        break;
      case 'C3':
        posX3 += Math.ceil(Math.random() * 25);
        console.log('c3')
        break;
      case 'C4':
        posX4 += Math.ceil(Math.random() * 25);
        console.log('c4')
        break;
      case 'C5':
        posX5 += Math.ceil(Math.random() * 25);
        console.log('c5')
        break;
      default:
        break;
    }
  }*/


  const car1 = document.getElementById("car1");

  if (posX1 > 1788) {
    car1.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    if(betC === 'C1'){
      balance += (2*betV);
      updateBalance(balance);
      alert('Mercedes wins !\nGained $' + 2*betV + ' for your bet!');
      raceActive = false;
    }else{
      alert("You loose, more luck on next time !\nLost $"+betV);
    }
    activeBet = false;
  } else {
    car1.style.transform = "translatex(" + posX1 + "px)";
  }

  if (posX2 > 1788) {
    car2.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    if(betC === 'C2'){
      balance += (2*betV);
      updateBalance(balance);
      alert('RedBull wins !\nGained $' + 2*betV + ' for your bet!');
      raceActive = false;
    }else{
      alert("You loose, more luck on next time !\nLost $"+betV);
    }
    activeBet = false;
  } else {
    car2.style.transform = "translatex(" + posX2 + "px)";
  }

  if (posX3 > 1788) {
    car3.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    if(betC === 'C3'){
      balance += (2*betV);
      updateBalance(balance);
      alert('Ferrari wins !\nGained $' + 2*betV + ' for your bet!');
      raceActive = false;
    }else{
      alert("You loose, more luck on next time !\nLost $"+betV);
    }
    activeBet = false;
  } else {
    car3.style.transform = "translatex(" + posX3 + "px)";
  }

  if (posX4 > 1788) {
    car4.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    if(betC === 'C4'){
      balance += (2*betV);
      updateBalance(balance);
      alert('Aston Martin wins !\nGained $' + 2*betV + ' for your bet!');
      raceActive = false;
    }else{
      alert('You loose, more luck on next time !\nLost $'+betV);
    }
    activeBet = false;
  } else {
    car4.style.transform = "translatex(" + posX4 + "px)";
  }

  if (posX5 > 1788) {
    car5.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    if(betC === 'C5'){
      balance += (2*betV);
      updateBalance(balance);
      alert('McLaren wins !\nGained $' + 2*betV + ' for your bet!');
      raceActive = false;
    }else{
      alert('You loose, more luck on next time !\nLost $'+betV);
    }
    activeBet = false;
  } else {
    car5.style.transform = "translatex(" + posX5 + "px)";
  }

}

function myStop() {
  clearInterval(myInterval);
}

function startRace() {
  raceActive = true;
  turbo = false;
  myStop();
  posX1=0;
  posX2=0;
  posX3=0;
  posX4=0;
  posX5=0;
  myInterval = setInterval(myTimer, 50);
}

function init(){
  balance = 100;
  updateBalance(balance);
  activeBet = false;
  turbo = false;
}

function setBetC1 (){
  betC = 'C1';
  let inputBetV = document.getElementById("betValue").value;
  if(inputBetV <= balance && inputBetV > 0 && activeBet === false){
    betV = inputBetV;
    activeBet = true;
    alert("Your bet is $"+ betV + " in Mercedes!")
    updateActualBet(betC, betV);
  }
  else{
    alert("Your bet is higher than your balance.")
  }
  
}

function setBetC2 (){
  betC = 'C2';
  let inputBetV = document.getElementById("betValue").value;
  if(inputBetV <= balance && inputBetV > 0 && activeBet === false){
    betV = inputBetV;
    activeBet = true;
    alert("Your bet is $"+ betV + " in RebBull!")
    updateActualBet(betC, betV);
  }
  else{
    alert("Your bet is higher than your balance.")
  }
  
}

function setBetC3 (){
  betC = 'C3';
  let inputBetV = document.getElementById("betValue").value;
  if(inputBetV <= balance && inputBetV > 0 && activeBet === false){
    betV = inputBetV;
    activeBet = true;
    alert("Your bet is $"+ betV + " in Ferrari!")
    updateActualBet(betC, betV);
  }
  else{
    alert("Your bet is higher than your balance.")
  }
  
}

function setBetC4 (){
  betC = 'C4';
  let inputBetV = document.getElementById("betValue").value;
  if(inputBetV <= balance && inputBetV > 0 && activeBet === false){
    betV = inputBetV;
    activeBet = true;
    alert("Your bet is $"+ betV + " in AstonMartin!")
    updateActualBet(betC, betV);
  }
  else{
    alert("Your bet is higher than your balance.")
  }
  
}

function setBetC5 (){
  betC = 'C5';
  let inputBetV = document.getElementById("betValue").value;
  if(inputBetV <= balance && inputBetV > 0 && activeBet === false){
    betV = inputBetV;
    activeBet = true;
    alert("Your bet is $"+ betV + " in McLaren!")
    updateActualBet(betC, betV);
  }
  else{
    alert("Your bet is higher than your balance.")
  }
  
}

function updateActualBet(betC, betV){
  balance -= betV;
  updateBalance(balance);
  htmlActiveBet = document.getElementById("htmlActiveBet");
  switch (betC) {
    case 'C1':
      htmlActiveBet.innerHTML = "Car: Mercedes   Value betted:" + betV;
      break;

    case 'C2':
      htmlActiveBet.innerHTML = "Car: RebBull   Value betted:" + betV;
      break;

    case 'C3':
      htmlActiveBet.innerHTML = "Car: Ferrari   Value betted:" + betV;
      break;

    case 'C4':
      htmlActiveBet.innerHTML = "Car: AstonMartin   Value betted:" + betV;
      break;

    case 'C5':
      htmlActiveBet.innerHTML = "Car: McLaren   Value betted:" + betV;
      break;

    default:
      console.error("There is an issue with updateActualBet function")
      break;
  }
}

function updateBalance(balance){
  const htmlBalance = document.getElementById("htmlBalance");
  htmlBalance.innerHTML = 'Balance: $'+ balance;
}

function turboUpgrade(){
  if(raceActive === true){
    if(turbo === false){
      turbo = true;
      balance -= 7;
      updateBalance(balance);
    }else{
      console.log('turbo true');
    }
  }else{
    console.log('race not active');
  }
}

function slowSomeone(){
    slow = true;
    const valores = ['C1', 'C2', 'C3', 'C4', 'C5'];
    const indiceAleatorio = Math.floor(Math.random() * valores.length);
    console.log(valores[indiceAleatorio]);
    return valores[indiceAleatorio];
}