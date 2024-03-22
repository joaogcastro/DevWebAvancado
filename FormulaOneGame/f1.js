let posX1;
let posX2;
let posX3;
let posX4;
let posX5;
let myInterval;
let balance;
let betV;
let betC;
let activeBet;
let raceActive;
let turbo;
let slow;

function init() {
  posX1 = 0;
  posX2 = 0;
  posX3 = 0;
  posX4 = 0;
  posX5 = 0;
  balance = 100;
  updateBalance(balance);
  activeBet = false;
  raceActive = false;
  turbo = false;
  slow = false;
}

function initRace() {
  if (activeBet === false) {
    alert('You must bet before start the race')
  } else {
    raceActive = true;
    posX1 = 0;
    posX2 = 0;
    posX3 = 0;
    posX4 = 0;
    posX5 = 0;
    myInterval = setInterval(myTimer, 50);
  }
}

function deinitRace() {
  activeBet = false;
  raceActive = false;
  turbo = false;
  slow = false;
  updateActualBet();
}

function myTimer() {
  posX1 += Math.ceil(Math.random() * 30);
  posX2 += Math.ceil(Math.random() * 30);
  posX3 += Math.ceil(Math.random() * 30);
  posX4 += Math.ceil(Math.random() * 30);
  posX5 += Math.ceil(Math.random() * 30);

  if (turbo === true) {
    switch (betC) {
      case 'C1':
        posX1 += Math.ceil(Math.random() * 30.1);
        break;
      case 'C2':
        posX2 += Math.ceil(Math.random() * 30.1);
        break;
      case 'C3':
        posX3 += Math.ceil(Math.random() * 30.1);
        break;
      case 'C4':
        posX4 += Math.ceil(Math.random() * 30.1);
        break;
      case 'C5':
        posX5 += Math.ceil(Math.random() * 30.1);
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

  if (posX1 > 1775) {
    car1.style.transform = "translatex(" + 1775 + "px)";
    myStop();
    if (betC === 'C1') {
      balance += (2 * betV);
      updateBalance(balance);
      alert('Mercedes wins !\nGained $' + 2 * betV + ' for your bet!');
    } else {
      alert("You loose, more luck on next time !\nLost $" + betV);
    }
    deinitRace();
  } else {
    car1.style.transform = "translatex(" + posX1 + "px)";
  }

  if (posX2 > 1775) {
    car2.style.transform = "translatex(" + 1775 + "px)";
    myStop();
    if (betC === 'C2') {
      balance += (2 * betV);
      updateBalance(balance);
      alert('RedBull wins !\nGained $' + 2 * betV + ' for your bet!');
    } else {
      alert("You loose, more luck on next time !\nLost $" + betV);
    }
    deinitRace();
  } else {
    car2.style.transform = "translatex(" + posX2 + "px)";
  }

  if (posX3 > 1775) {
    car3.style.transform = "translatex(" + 1775 + "px)";
    myStop();
    if (betC === 'C3') {
      balance += (2 * betV);
      updateBalance(balance);
      alert('Ferrari wins !\nGained $' + 2 * betV + ' for your bet!');
    } else {
      alert("You loose, more luck on next time !\nLost $" + betV);
    }
    deinitRace();
  } else {
    car3.style.transform = "translatex(" + posX3 + "px)";
  }

  if (posX4 > 1775) {
    car4.style.transform = "translatex(" + 1775 + "px)";
    myStop();
    if (betC === 'C4') {
      balance += (2 * betV);
      updateBalance(balance);
      alert('Aston Martin wins !\nGained $' + 2 * betV + ' for your bet!');
    } else {
      alert('You loose, more luck on next time !\nLost $' + betV);
    }
    deinitRace();
  } else {
    car4.style.transform = "translatex(" + posX4 + "px)";
  }

  if (posX5 > 1775) {
    car5.style.transform = "translatex(" + 1775 + "px)";
    myStop();
    if (betC === 'C5') {
      balance += (2 * betV);
      updateBalance(balance);
      alert('McLaren wins !\nGained $' + 2 * betV + ' for your bet!');
    } else {
      alert('You loose, more luck on next time !\nLost $' + betV);
    }
    deinitRace();
  } else {
    car5.style.transform = "translatex(" + posX5 + "px)";
  }
}

function myStop() {
  clearInterval(myInterval);
}

function setBetC1() {
  betC = 'C1';
  let inputBetV = document.getElementById("betValue").value;
  if (inputBetV >= 5) {
    if (inputBetV <= balance) {
      if (activeBet === false) {
        betV = inputBetV;
        activeBet = true;
        alert("Your bet is $" + betV + " in Mercedes!");
        updateActualBet(betC, betV);
      } else {
        alert("You can only place one bet per race");
      }
    } else {
      alert("Your bet is higher than your balance");
    }
  } else {
    alert("Your bet must be higher than $5");
  }
}

function setBetC2() {
  betC = 'C2';
  let inputBetV = document.getElementById("betValue").value;
  if (inputBetV >= 5) {
    if (inputBetV <= balance) {
      if (activeBet === false) {
        betV = inputBetV;
        activeBet = true;
        alert("Your bet is $" + betV + " in RebBull!");
        updateActualBet(betC, betV);
      } else {
        alert("You can only place one bet per race");
      }
    } else {
      alert("Your bet is higher than your balance");
    }
  } else {
    alert("Your bet must be higher than $5");
  }
}

function setBetC3() {
  betC = 'C3';
  let inputBetV = document.getElementById("betValue").value;
  if (inputBetV >= 5) {
    if (inputBetV <= balance) {
      if (activeBet === false) {
        betV = inputBetV;
        activeBet = true;
        alert("Your bet is $" + betV + " in Ferrari!");
        updateActualBet(betC, betV);
      } else {
        alert("You can only place one bet per race");
      }
    } else {
      alert("Your bet is higher than your balance");
    }
  } else {
    alert("Your bet must be higher than $5");
  }
}

function setBetC4() {
  betC = 'C4';
  let inputBetV = document.getElementById("betValue").value;
  if (inputBetV >= 5) {
    if (inputBetV <= balance) {
      if (activeBet === false) {
        betV = inputBetV;
        activeBet = true;
        alert("Your bet is $" + betV + " in Aston Martin!");
        updateActualBet(betC, betV);
      } else {
        alert("You can only place one bet per race");
      }
    } else {
      alert("Your bet is higher than your balance");
    }
  } else {
    alert("Your bet must be higher than $5");
  }
}

function setBetC5() {
  betC = 'C5';
  let inputBetV = document.getElementById("betValue").value;
  if (inputBetV >= 5) {
    if (inputBetV <= balance) {
      if (activeBet === false) {
        betV = inputBetV;
        activeBet = true;
        alert("Your bet is $" + betV + " in McLaren!");
        updateActualBet(betC, betV);
      } else {
        alert("You can only place one bet per race");
      }
    } else {
      alert("Your bet is higher than your balance");
    }
  } else {
    alert("Your bet must be higher than $5");
  }
}

function updateActualBet(betC, betV) {
  if (betC && betV) {
    balance -= betV;
    updateBalance(balance);
  }
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
      htmlActiveBet.innerHTML = "Car: Aston Martin   Value betted:" + betV;
      break;

    case 'C5':
      htmlActiveBet.innerHTML = "Car: McLaren   Value betted:" + betV;
      break;

    default:
      htmlActiveBet.innerHTML = "Car:    Value betted:";
      break;
  }
}

function updateBalance(balance) {
  const htmlBalance = document.getElementById("htmlBalance");
  htmlBalance.innerHTML = 'Balance: $' + balance;
}

function turboUpgrade() {
  if (raceActive === true) {
    if (turbo === false) {
      turbo = true;
      balance -= 7;
      updateBalance(balance);
    } else {
      console.log('turbo true');
    }
  } else {
    console.log('race not active');
  }
}

/*function slowSomeone() {
  slow = true;
  const valores = ['C1', 'C2', 'C3', 'C4', 'C5'];
  const indiceAleatorio = Math.floor(Math.random() * valores.length);
  console.log(valores[indiceAleatorio]);
  return valores[indiceAleatorio];
}*/