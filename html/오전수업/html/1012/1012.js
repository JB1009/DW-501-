var names = new Array();
var job = new Array();

window.onload = function(){
  var bt = document.getElementById("bt");
  bt.addEventListener("click",input);
}

// function input(){
//   var ipt1 = document.getElementById("ipt1");
//   var ipt2 = document.getElementById("ipt2");

//   list_push(ipt1.value,ipt2.value);

// }

// function list_push(ipt1,ipt2){
//   names.push(ipt1);
//   job.push(ipt2);

//   output_list();
// }

// function output_list(){
  
//   var out = document.getElementById("output");
//   // var div1 = document.createElement("div");
//   // var div2 = document.createElement("div");

//   // div1.appendChild(div2);
//   // out.appendChild(div1);
//   // div1.innerHTML = names;
//   // div2.innerHTML = job;

//   out.innerHTML = names + " " +job; 
  
// }

function input(){
  var name = document.getElementById("ipt1");
  var job = document.getElementById("ipt2");
  if(name.value == "" || job.value == ""){
    return;
  }
  list_push(name.value,job.value);
  // input value 값 list_push에 넘기기
  name.value = "";
  job.value = "";
  name.focus();
}
var list = new Array();
function list_push(name,job){
  var out = "<span> 이름 : "+name+" </span><span> 직업 : "+job+"</span>";
  list.push(out);
  output_list();
}

function output_list(){
  var div = document.getElementById("output");
  var out = "";
  for(var i in list){
    out+= list[i]+"<br>";
  }
  div.innerHTML = out;

}