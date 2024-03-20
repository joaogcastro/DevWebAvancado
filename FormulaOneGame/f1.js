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

function myTimer() {
  posX1 += Math.ceil(Math.random() * 50);
  posX2 += Math.ceil(Math.random() * 50);
  posX3 += Math.ceil(Math.random() * 50);
  posX4 += Math.ceil(Math.random() * 50);
  posX5 += Math.ceil(Math.random() * 50);


  const car1 = document.getElementById("car1");

  if (posX1 > 1788) {
    car1.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    alert('Mercedes ganhou')
  } else {
    car1.style.transform = "translatex(" + posX1 + "px)";
  }

  if (posX2 > 1788) {
    car2.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    alert('Redbull ganhou')
  } else {
    car2.style.transform = "translatex(" + posX2 + "px)";
  }

  if (posX3 > 1788) {
    car3.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    alert('Ferrari Ganhou')
  } else {
    car3.style.transform = "translatex(" + posX3 + "px)";
  }

  if (posX4 > 1788) {
    car4.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    alert('Aston Martin Ganhou')
  } else {
    car4.style.transform = "translatex(" + posX4 + "px)";
  }

  if (posX5 > 1788) {
    car5.style.transform = "translatex(" + 1788 + "px)";
    myStop();
    alert('Alpine Ganhou')
  } else {
    car5.style.transform = "translatex(" + posX5 + "px)";
  }

}

function myStop() {
  clearInterval(myInterval);
}

function startRace() {
  myStop();
  posX1=0;
  posX2=0;
  posX3=0;
  posX4=0;
  posX5=0;
  myInterval = setInterval(myTimer, 50);
}

function init(){
  balance = 200;
  const htmlBalance = document.getElementById("htmlBalance");
  htmlBalance.innerHTML = 'Balance: '+ balance;
  activeBet = false;
}

function setBetC1 (){
  betC = 'C1';
  let inputBetV = document.getElementById("betValue").value;
  if(inputBetV <= balance && inputBetV > 0 && activeBet === false){
    betV = inputBetV;
    activeBet = true;
    alert("Your bet is $"+ betV + " in Hamilton!")
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
    alert("Your bet is $"+ betV + " in Verstappen!")
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
    alert("Your bet is $"+ betV + " in Leclerc!")
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
    alert("Your bet is $"+ betV + " in Alonso!")
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
    alert("Your bet is $"+ betV + " in Norris!")
    updateActualBet(betC, betV);
  }
  else{
    alert("Your bet is higher than your balance.")
  }
  
}

function updateActualBet(betC, betV){
  htmlActiveBet = document.getElementById("htmlActiveBet");
  switch (betC) {
    case 'C1':
      htmlActiveBet.innerHTML = "Car: Hamilton   Value betted:" + betV;
      break;

    case 'C2':
      htmlActiveBet.innerHTML = "Car: Verstappen   Value betted:" + betV;
      break;

    case 'C3':
      htmlActiveBet.innerHTML = "Car: Leclerc   Value betted:" + betV;
      break;

    case 'C4':
      htmlActiveBet.innerHTML = "Car: Alonso   Value betted:" + betV;
      break;

    case 'C5':
      htmlActiveBet.innerHTML = "Car: Norris   Value betted:" + betV;
      break;

    default:
      console.error("There is an issue with updateActualBet function")
      break;
  }
}