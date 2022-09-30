var board = new Array(400);
board.fill(0);

for (var i = 0; i < 398;) {
  let pos = Math.floor(Math.random() * 400);
  if (board[pos] != 1) {
    board[pos] = 1;
    i++; // board[pos]의 값을 1로 대입 후에 i증강식
  }
}


window.onload = function () {
  var table = "<table>";
  for (var i = 0; i < 20; i++) {
    table += "<tr>";
    for (var j = 0; j < 20; j++) {
      table += "<td class='bm' data-idx=" + (i * 20 + j) + "></td>";
    }
    table += "</tr>";
  }
  table += "</table>"
  document.getElementById("wrap").innerHTML = table;

  // var bm = document.querySelectorAll(".bm");
  var bm = document.getElementsByClassName("bm");

  // alert(bm.length);
  // bm[0].style.background = "red";

  for (var i in bm) {
    bm[i].addEventListener("click", function () {
      let n = this.dataset.idx;
      if (board[n] == 1) {
        this.style.background = "url(../../image/boom.png) no-repeat center center";
        this.style.backgroundColor = "lightpink";
        this.style.backgroundSize = "cover"
        // this.innerHTML =" <img src = '../../image/boom.png'>"
      } else {
        this.style.background = "lightskyblue"//this 작업중인 메소드 호출
      }
    });//이벤트를 추가로생성
  };
};

// function check(n){
//   alert(n);
// }