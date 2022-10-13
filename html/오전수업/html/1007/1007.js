//진행순서
//total 함수 실행 > score_inpit 함수의 kor,mat,eng변수값 total에전달
// > total 함수에서 kor,mat,eng 의 합을 tot변수에 저장
// > tot 변수의 값 total함수 실행 위치로 변환 (return)
// > score_input함수에서 total함수로부터 반환된 값 tot변수에 저장
// > score_inpit 함수에서 avg함수 실행
// > score_input함수의 tot변수를 avg에 전달
// > avg함수에서 전달받은 데이터를 tot변수에 저장

// return > 반환값은 1개 만 가능

function score_input(){
  var kor = 99;
  var mat = 89;
  var eng = 79;

  total(kor,mat,eng);

}

function total(kor,mat,eng){
  var tot = kor+mat+eng;
  avg(tot);
}

function avg(tot){
  var res = tot/3;
  result_print(res);
}
function result_print(res){
  document.write("평균 : "+ res);
}


// function score_input(){
//   var kor = 99;
//   var mat = 89;
//   var eng = 79;

//   var tot = total(kor,mat,eng);
//   avg(tot);
//   result_print(res);
// }

// function total(kor,mat,eng){
//   var tot = kor+mat+eng;
//   return tot;
// }

// function avg(tot){
//   var res = tot/3;
//   return res;
// }
// function result_print(res){
//   document.write(res);
// }