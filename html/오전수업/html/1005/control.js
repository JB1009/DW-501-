// addEventListener : 태그에 이벤트 설정하는 함수
// addEventListener("이벤트","이벤트발생시 동작함수")



window.onload = function () {
  var add = document.getElementById("add");
  add.addEventListener("click", tag_add);
}

var add_check = false;

function tag_add() {
  if (add_check) {
    return;
  }
  add_check = true;
  var pdiv = document.getElementById("score_wrap");
  var div = document.createElement("div");

  var ipt = document.createElement('input');
  ipt.setAttribute("type", "text");
  ipt.setAttribute("id", "name");
  ipt.setAttribute("placeholder", "이름");
  div.appendChild(ipt);

  var course = [["국어", "kor"], ["수학", "mat"], ["영어", "eng"]];
  for (let i = 0; i < 3; i++) {
    ipt = document.createElement("input");
    ipt.setAttribute("type", "number");
    ipt.setAttribute("id", course[i][1]);
    ipt.setAttribute("placeholder", course[i][0]);
    div.appendChild(ipt);
  }
  var bt = document.createElement("button");
  bt.addEventListener("click", enroll);
  var text = document.createTextNode("등록");
  bt.appendChild(text);
  div.appendChild(bt);
  pdiv.appendChild(div);
}
function enroll() {
  add_check = false;
  var name = document.getElementById("name").value;
  var kor = document.getElementById("kor").value;
  var mat = document.getElementById("mat").value;
  var eng = document.getElementById("eng").value;

  var pdiv = document.getElementById("score_wrap");

  // score_wrap div 에 추가 하는 작업
  var div = document.createElement("div");
  var data = [name, kor, mat, eng];
  for (var i in data) {//input에 입력된 값을 h3태그에 삽입
    var h = document.createElement("h3");
    var text = document.createTextNode(data[i]);
    h.appendChild(text);
    div.appendChild(h);
  }
  var input = pdiv.lastChild;
  pdiv.removeChild(input);
  pdiv.appendChild(div); //input 태그값 div에 삽입
}