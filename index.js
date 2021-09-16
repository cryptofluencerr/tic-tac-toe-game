const b1 = document.querySelector("#b1").value;
const b2 = document.querySelector("#b2").value;
const b3 = document.querySelector("#b3").value;
const b4 = document.querySelector("#b4").value;
const b5 = document.querySelector("#b5").value;
const b6 = document.querySelector("#b6").value;
const b7 = document.querySelector("#b7").value;
const b8 = document.querySelector("#b8").value;
const b9 = document.querySelector("#b9").value;
const resetEl = document.querySelector("#reset-el")

resetEl.addEventListener("click", function myFuncReset() {
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
return console.log("hi");
}