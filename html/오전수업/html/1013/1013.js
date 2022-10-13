// window.onload = function (){
//   var bt = document.getElementById("bt").addEventListener("click",user_input)
// }

// var user_res = document.getElementById("user_res");
// var user_ipt = document.getElementById("user");
// function user_input(user_ipt){
//   if(user_ipt.value == 1){
//     user_res.innerHTML = "유저 : 가위"
//   }
//   if(user_ipt.value == 2){
//     user_res.innerHTML = "유저 : 바위"
//   }
//   if(user_ipt.value == 2){
//     user_res.innerHTML = "유저 : 보"
//   }
  
// }

// function com_input(com){
//   var com_ran = Math.floor(Math.random()*3)+1;
//   var com_res = document.getElementById("com_res");
//   if(com_ran = 1)
//   com_res.innerHTML = "컴퓨터 : 가위";
//   if(com_ran = 2)
//   com_res.innerHTML  = "컴퓨터 : 바위"
//   if(com_ran = 3)
//   com_res.innerHTML  = "컴퓨터 : 보";

//   return com_ran;
// }

// var result = document.getElementById("result");
// function res(){
//   if(user_ipt.value == com_input(com)){
//     result.innerHTML ="무승부"
//   }
//   if(user_ipt.value > com_input(com)){
//     result.innerHTML ="유저 승리"
//   }
//   if(user_ipt.value < com_input(com)){
//     result.innerHTML = "유저 패배"
//   }
// }
user();

function user() {
  var u = parseInt(prompt("1.가위 2.바위 3.보"));
  var c = com();
  result(u, c);
}

function com() {
  var c = Math.floor(Math.random() * 3) + 1;
  return c;
}

function result(u, c) {
  if (u == c) {
    alert("비김");
  } else if ((u == 1 && c == 3) || (u == 2 && c == 1) || (u == 3 && c == 2)) {
    alert("승리");
  } else {
    alert("패배");
  }
}

