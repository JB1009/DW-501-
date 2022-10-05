//array.js

// window.onload : html문서의 모든내용이 브라우저에 표시된 이후에 동작
// window 객체 : 브라우저실행시키기 위한 프로그램 틀
// window 에만 onload 있는거 아님, 모든 객체 (html태그포함)에 존재
// load -> 불러오기 즉 onload는 불러오는 작입이 끝났을 때 동작 


var item_list = ["핸드폰거치대", "급속충전기", "C타입케이블", "강화유리", "스마트폰 링", "스마트폰 커버"];


window.onload = function () {
  var li = document.getElementsByClassName("item");
  // var li = document.querySelectorAll(".item");

  for (var i in li) {
    li[i].innerHTML = item_list[i];
  }
}
var item = new Array();

function enroll() {
  var name = document.getElementById("item_name");
  var price = document.getElementById("item_price");
  var prop = name.value;
  var pric = price.value+"원";
  item.push(prop + pric);
  // item.push(prop)

  var ul = document.getElementById("item_list");
  var li = document.createElement("li");
  li.innerHTML = item[item.length - 1];
  // li.innerHTML = item[item.length - 1] + " " + price.value+"원";

  // var b = document.createElement("b");
  // b.innerHTML = price.value + "원";
  // li.appendChild(b);
  var bt = document.createElement("button");
  bt.setAttribute("class", "del_bt");
  bt.setAttribute("onclick", "del(this)");
  bt.innerHTML = "삭제";
  li.appendChild(bt);

  ul.appendChild(li);

}

function del(obj) {
  var parent_li = obj.parentNode;
  var parent_ul = parent_li.parentNode;
  parent_ul.removeChild(parent_li);
}
/*
  document.createElement : 새태그 생성
  예시)document.createElement("div") :div 생성

  appendChild = 자식태그로추가
  예시)p = document.createElement("p"); 
  body.appendChild(p) : body에 p태그 추가

  setAttribute = 태그에 새속성 추가
  예시)setAttribute("id","ppp")= 해당 태그에 id="ppp" 삽입

  removeChild = 자식태그 삭제
  예시)body.removerChild(p) = body태그엣 ㅓ해당 태그 삭제
*/

