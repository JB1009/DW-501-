// function move() {
//   location.href = "http://www.google.com"
// }

// function location_object(){
//   // window.open("http://www.naver.com","","width=500 heigth=500")
//   // alert(window.outerWidth);
//   window.moveBy(300,200);
// }

function new_window() {
  // alert(screen.height)
  var Mwidth = screen.width;
  var Mheight = screen.height;

  var width = 500;
  var height = 700;
  var left = Mwidth / 2 - width / 2;
  var top = Mheight / 2 - height / 2;
  var url = "101801.html";
  var win_name = " ";
  var option = "width="+width+",height="+height+",left="+left+",top="+top;
  // window.open("101801.html"," ","width=700,height=500");
  var child = window.open(url, win_name, option);
  // child 변수에 새윈도우의 핸들값 저장
  var name = document.getElementById("name").value;
  child.document.getElementById("name_view").innerHTML = name; 
}