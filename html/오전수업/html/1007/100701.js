/*


1.window.onload에서 전역으로 3개의 정수값 배열로 저장;

2. 3개의 정수값은 중복없음 (범위 1~9)
3. button 클릭하면 number_check함수 실행
4. number_input함수에서 세개의 input값 받아오기
5. number_input함수에서 number_check함수 실행
6. number_check함수에 input값 3개전달
7. number_check함수에서 input 값과 배열과 비교하기
8. print 함수에서 div#result에 일치하는 값이 몇개인지 출력


*/

var numbers = 0;
var play = [];

window.onload = function () {
  while (play.length != 3) {
    var tmp = Math.floor(Math.random() * 9) + 1;
    if (play.indexOf(tmp) == -1) {
      play.push(tmp);
    }
  }
  var send = document.getElementById("send");
  send.addEventListener("click", number_input);
}

function number_input() {

  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  var num3 = document.getElementById("num3");
  var arr2 = [];
  arr2.push(parseInt(num1.value));
  arr2.push(parseInt(num2.value));
  arr2.push(parseInt(num3.value));
  // alert(arr2)
  if (input_check(arr2)) {
    alert("잘못된 숫자 입력입니다. 중복없이 1~9까지 입력하세요")
    return;
  }
  for (var i in arr2) {
    num1.value = "";
    num2.value = "";
    num3.value = "";
  }
  num1.focus();


  number_check(arr2);
}
function input_check(arr2) {
  for (var i in arr2) {
    if (arr2[i] < 1 || arr2[i] > 9) {
      return true;
    }
  }
  if (arr2[0] == arr2[1] || arr2[0] == arr2[2] || arr2[[1] == arr2[2]]) {
    return true;
  }
  return false;
}

function number_check(a) {
  
  var strike = 0, ball = 0;
  if (a[0] == play[0]) strike++;
  if (a[1] == play[1]) strike++;
  if (a[2] == play[2]) strike++;
  if (a[0] == play[1] || a[0] == play[2]) ball++;
  if (a[1] == play[2] || a[1] == play[2]) ball++;
  if (a[2] == play[0] || a[2] == play[1]) ball++;

  print(strike, ball);

}
function print(strike,ball) {
  var res = document.getElementById("result");
  var div = document.createElement("div");
  var out=3-strike-ball;
  div.appendChild(document.createTextNode("스트라이크 : "+strike + "개" + " 볼 : " + ball + "개 " + out + "아웃"));
  res.prepend(div);
}
