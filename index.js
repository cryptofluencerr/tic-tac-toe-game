const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");
const resetEl = document.querySelector("#reset-el");
const printEl = document.querySelector("#print");

function myFuncReset() {
  // It is used to refresh the page
  location.reload();
  b1.value = "";
  b2.value = "";
  b3.value = "";
  b4.value = "";
  b5.value = "";
  b6.value = "";
  b7.value = "";
  b8.value = "";
  b9.value = "";
}

let flag = Math.floor(Math.random() * 2);
console.log(flag);
function myFunc1() {
  if (flag == 1) {
    b1.value = "X";
    b1.disabled = true;
    flag = 0;
  } else {
    b1.value = "0";
    b1.disabled = true;
    flag = 1;
  }
}

function myFunc2() {
  if (flag == 1) {
    b2.value = "X";
    b2.disabled = true;
    flag = 0;
  } else {
    b2.value = "0";
    b2.disabled = true;
    flag = 1;
  }
}

function myFunc3() {
  if (flag == 1) {
    b3.value = "X";
    b3.disabled = true;
    flag = 0;
  } else {
    b3.value = "0";
    b3.disabled = true;
    flag = 1;
  }
}

function myFunc4() {
  if (flag == 1) {
    b4.value = "X";
    b4.disabled = true;
    flag = 0;
  } else {
    b4.value = "0";
    b4.disabled = true;
    flag = 1;
  }
}

function myFunc5() {
  if (flag == 1) {
    b5.value = "X";
    b5.disabled = true;
    flag = 0;
  } else {
    b5.value = "0";
    b5.disabled = true;
    flag = 1;
  }
}

function myFunc6() {
  if (flag == 1) {
    b6.value = "X";
    b6.disabled = true;
    flag = 0;
  } else {
    b6.value = "0";
    b6.disabled = true;
    flag = 1;
  }
}

function myFunc7() {
  if (flag == 1) {
    b7.value = "X";
    b7.disabled = true;
    flag = 0;
  } else {
    b7.value = "0";
    b7.disabled = true;
    flag = 1;
  }
}

function myFunc8() {
  if (flag == 1) {
    b8.value = "X";
    b8.disabled = true;
    flag = 0;
  } else {
    b8.value = "0";
    b8.disabled = true;
    flag = 1;
  }
}

function myFunc9() {
  if (flag == 1) {
    b9.value = "X";
    b9.disabled = true;
    flag = 0;
  } else {
    b9.value = "0";
    b9.disabled = true;
    flag = 1;
  }
}

function checkWin() {
  console.log("Invoked");

  // Conditions to check Player X's win
  if (
    (b1.value == "X" || b1.value == "x") &&
    (b2.value == "X" || b2.value == "x") &&
    (b3.value == "X" || b3.value == "x")
  ) {
    b4.disabled = "true";
    b5.disabled = "true";
    b6.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  } else if (
    (b4.value == "X" || b4.value == "x") &&
    (b5.value == "X" || b5.value == "x") &&
    (b6.value == "X" || b6.value == "x")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b3.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  } else if (
    (b7.value == "X" || b7.value == "x") &&
    (b8.value == "X" || b8.value == "x") &&
    (b9.value == "X" || b9.value == "x")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b3.disabled = "true";
    b4.disabled = "true";
    b5.disabled = "true";
    b6.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  } else if (
    (b1.value == "X" || b1.value == "x") &&
    (b4.value == "X" || b4.value == "x") &&
    (b7.value == "X" || b7.value == "x")
  ) {
    b2.disabled = "true";
    b3.disabled = "true";
    b5.disabled = "true";
    b6.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  } else if (
    (b2.value == "X" || b2.value == "x") &&
    (b5.value == "X" || b5.value == "x") &&
    (b8.value == "X" || b8.value == "x")
  ) {
    b1.disabled = "true";
    b3.disabled = "true";
    b4.disabled = "true";
    b6.disabled = "true";
    b7.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  } else if (
    (b3.value == "X" || b3.value == "x") &&
    (b6.value == "X" || b6.value == "x") &&
    (b9.value == "X" || b9.value == "x")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b4.disabled = "true";
    b5.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  } else if (
    (b1.value == "X" || b1.value == "x") &&
    (b5.value == "X" || b5.value == "x") &&
    (b9.value == "X" || b9.value == "x")
  ) {
    b2.disabled = "true";
    b3.disabled = "true";
    b4.disabled = "true";
    b6.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  } else if (
    (b3.value == "X" || b3.value == "x") &&
    (b5.value == "X" || b5.value == "x") &&
    (b7.value == "X" || b7.value == "x")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b4.disabled = "true";
    b6.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 1 won");
    myFuncReset();
  }

  // Check 0's win
  else if (
    (b1.value == "0" || b1.value == "0") &&
    (b2.value == "0" || b2.value == "0") &&
    (b3.value == "0" || b3.value == "0")
  ) {
    b4.disabled = "true";
    b5.disabled = "true";
    b6.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b4.value == "0" || b4.value == "0") &&
    (b5.value == "0" || b5.value == "0") &&
    (b6.value == "0" || b6.value == "0")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b3.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b7.value == "0" || b7.value == "0") &&
    (b8.value == "0" || b8.value == "0") &&
    (b9.value == "0" || b9.value == "0")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b3.disabled = "true";
    b4.disabled = "true";
    b5.disabled = "true";
    b6.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b1.value == "0" || b1.value == "0") &&
    (b4.value == "0" || b4.value == "0") &&
    (b7.value == "0" || b7.value == "0")
  ) {
    b2.disabled = "true";
    b3.disabled = "true";
    b5.disabled = "true";
    b6.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b2.value == "0" || b2.value == "0") &&
    (b5.value == "0" || b5.value == "0") &&
    (b8.value == "0" || b8.value == "0")
  ) {
    b1.disabled = "true";
    b3.disabled = "true";
    b4.disabled = "true";
    b6.disabled = "true";
    b7.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b3.value == "0" || b3.value == "0") &&
    (b6.value == "0" || b6.value == "0") &&
    (b9.value == "0" || b9.value == "0")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b4.disabled = "true";
    b5.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b1.value == "0" || b1.value == "0") &&
    (b5.value == "0" || b5.value == "0") &&
    (b9.value == "0" || b9.value == "0")
  ) {
    b2.disabled = "true";
    b3.disabled = "true";
    b4.disabled = "true";
    b6.disabled = "true";
    b7.disabled = "true";
    b8.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b3.value == "0" || b3.value == "0") &&
    (b5.value == "0" || b5.value == "0") &&
    (b7.value == "0" || b7.value == "0")
  ) {
    b1.disabled = "true";
    b2.disabled = "true";
    b4.disabled = "true";
    b6.disabled = "true";
    b8.disabled = "true";
    b9.disabled = "true";
    window.alert("Player 2 won");
    myFuncReset();
  } else if (
    (b1.value == "X" || b1.value == "0") &&
    (b2.value == "X" || b2.value == "0") &&
    (b3.value == "X" || b3.value == "0") &&
    (b4.value == "X" || b4.value == "0") &&
    (b5.value == "X" || b5.value == "0") &&
    (b6.value == "X" || b6.value == "0") &&
    (b7.value == "X" || b7.value == "0") &&
    (b8.value == "X" || b8.value == "0") &&
    (b9.value == "X" || b9.value == "0")
  ) {
    printEl.innerHTML = "It's a tie";
  } else {
    if (flag == 1) {
      printEl.innerHTML = "Player X's turn";
    } else {
      printEl.innerHTML = "Player 0's turn";
    }
  }
}
