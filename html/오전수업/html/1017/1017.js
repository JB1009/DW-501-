// window.onload = function () {
//   var bt_add = document.getElementById("bt_add");
//   bt_add.addEventListener("click", input);
// }
// var num = 0;
// var col = document.getElementsByClassName("col");
// var row = document.getElementsByClassName("row");
// var width = document.getElementsByClassName("width");
// var height = document.getElementsByClassName("height");

// function input() {
//   if (col.value != "" || row.value != "" || width.value != "" || height.value != "") {
//   var ipt = document.getElementById("ipt");
//   var ipts = document.createElement("input");
//   var add = document.getElementById("add");

//   var bt_push = document.createElement("button");
//   bt_push.addEventListener("click", enroll);

//   var bt_text = document.createTextNode("셋팅" + ++num);
//   bt_push.appendChild(bt_text);
//   add.appendChild(bt_push);
//   }
//   if (col.value != "" || row.value != "" || width.value != "" || height.value != "") {
//     // alert("행,열,너비,높이를 입력해주세요.");
//     return;
//   }

// }

// function enroll() {

// }

function tb(col, row, width, hegiht) {
  this.tb_col = col;
  this.tb_row = row;
  this.tb_width = width;
  this.tb_height = hegiht;
}
var tb_list = new Array();
// tb.prototype.out = function () {
//   return this.tb_col + " " + this.tb_row + " " +
//     this.tb_width + " " + this.tb_height
// }
var bt_cnt = 0;
var bt_check = false;
window.onload = function () {
  var add_bt = document.querySelector("#bt_add");
  add_bt.addEventListener("click", add_button);

  var t_put = document.getElementsByClassName("t_put");
  for (var i in t_put) {
    t_put[i].addEventListener("keyup", function () {
      if (!bt_check) {
        alert("새로운 세팅버튼을 추가해주세요");
        this.value = "";
      }
    });
  }
  var buttons = document.getElementsByClassName("set");
  buttons.addEventListener("click", result)
}

function add_button() {
  var bt = document.createElement("button");
  bt.setAttribute("class", "set");
  bt.appendChild(document.createTextNode("셋팅" + (++bt_cnt)));
  bt.setAttribute("data-value", "0");

  bt.addEventListener("click", function () {
    if (this.dataset.value == 0) {
      value_save(this);
    }
    else {
      table_draw(this);
    }
  });
  document.getElementsByClassName("add")[0].appendChild(bt);
  bt_check = true;
}


function value_save(obj) {
  var input_label = ["행", "열", "너비", "높이"]
  var t_put = document.getElementsByClassName("t_put");
  for (var i in t_put) {
    if (t_put[i].value == "") {
      alert(input_label[i] + " 을 입력하세요.");
      t_put[i].focus();
      return;
    }
  }

  var data = new tb(
    t_put[0].value,
    t_put[1].value,
    t_put[2].value,
    t_put[3].value
  )

  tb_list.push(data);
    console.log(tb_list[0])
  obj.dataset.value = bt_cnt;

  bt_check = false;
  for (var i = 0; i < t_put.length; i++) {
    t_put[i].value = "";
  }
  // result();
}


function table_draw(obj) {
  var draw = document.getElementById("draw");
  var datas = tb_list[parseInt(obj.dataset.value)-1];
  draw.innerHTML = datas.col+" " + datas.row+ ' ' + datas.width + " " + datas.hegiht + " ";
}
// tb = {
//   col: t_put[0],
//   row: t_put[1],
//   width: t_put[2],
//   hegiht: t_put[3]
// }
// function result() {
//   var draw = document.getElementById("draw");
//   draw.innerHTML =
//     " 행 : " + tb_list[0].tb_col +
//     " 열 : " + tb_list[0].tb_row +
//     " 너비 : " + tb_list[0].tb_width +
//     " 높이 : " + tb_list[0].tb_height;
// }


