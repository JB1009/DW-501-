
window.onload = function () {
  var bt = document.getElementById("bt").addEventListener("click", input)
}

function input() {
  var births = document.getElementById("birth");
  var year = document.getElementById("year");
  var month = document.getElementById("month");
  var age = document.getElementById("age");
  if (births.value == "") {
    alert("생년월일을 입력해주세요.");
    year.innerHTML = "";
    month.innerHTML = "";
    age.innerHTML = "";
    return;
  }
  else {
    year.innerHTML = getYear(births.value) + "년";
    month.innerHTML = getMonth(births.value) + "월";
    age.innerHTML = getAge(births.value) + "세";
    births.value = "";
    births.focus();
  }
}

function getYear(births) {
  var years = births.split(".");
  return years[0];
}

function getMonth(births) {
  var months = births.split(".");
  return months[1];
}

function getAge(births) {
  var years = births.split(".");
  return 2022 - (years[0] - 1);
}