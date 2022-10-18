

function movie(title, dir, year, genre) {
  this.movie_title = title;
  this.movie_dir = dir;
  this.movie_year = year;
  this.movie_genre = genre;
}
movie.prototype.out = function () {
  return this.movie_title + " " + this.movie_dir + " " +
         this.movie_year + " " + this.movie_genre;
}

var movie_list = new Array(); // movie 객체 저장 배열
// movie_list.push(movie.title);
// console.log(movie_list[0])

window.onload = function () {
  var movie = document.querySelectorAll(".movie");
  for (var i = 0; i < movie.length; i++) {
    movie[i].addEventListener("focus", function () {
      this.setAttribute("class", "movie active");

    })
    movie[i].addEventListener("blur", function () {
      if (this.value == "") {
        this.setAttribute("class", "movie");
      }
      // this.value = "";
    })
  }
}

function enroll() {
  var val_temp = document.querySelectorAll(".movie");

  var data = new movie(
    val_temp[0].value,
    val_temp[1].value,
    val_temp[2].value,
    val_temp[3].value
  );
  movie_list.push(data);
  print();
  val_temp[0].value = "";
  val_temp[1].value = "";
  val_temp[2].value = "";
  val_temp[3].value = "";     
}

function print() {
  var li = document.createElement("li");
  li.innerHTML = movie_list[movie_list.length - 1].out();
  document.getElementById("movie_list").append(li);
  // console.log(movie_list[movie_list.length - 1].out())

}

//객체 : 사물,사람,동물등 대표성을 지닌 독립적인 존재
/*
  모든 객체는 자신만의 속성(특징)을 가지며,자신만의 행동을 갖는다.
  객체는 자신만의 속성을 가진다 -> 변수
  객체는 자신만의 행동을 갖는다 -> 함수

  객체정의 : 추상화 시켜 놓은 것
  추상화의 기본 : 속성과 행동을 나열하고 구성한다.
  멤버 변수 : 객체의 속성을 구성
  멤버 함수 : 객체의 속성을 기반으로 행동을 구현해놓은 코드

  객체생성: new 연산을 통해서 생성
  생셩된 객체는 변수에 저장하여 사용하는데 이때 변수를 참조변수라고한다.
  참조 변수는 ram의 주소를 저장하는 변수이다.



var obj = new Object();

도형 객체
도형.모양 = 사각형
도형.위치x축 = 120
도형.위치y축 = 50
도형.그리기(함수)
도형.지우기(함수)

도형.모양 = 삼각형
도형.위치x축 = 200
도형.위치y축 = 120
도형.그리기
도형.지우기

객체의 멤버로 접근하기 위 한 연산자 (.) - access연산자 접근연산자
접근연산자는 +,-,++,&&,|| 등 보다 우선순위가 높음
도형.위치X축 + 10;

객체 생성 방법
*/

// var shape = {
//   모양: "사각형",
//   x축: 120,
//   y축: 23,
//   draw: function () {
//     return "x축 : " + this.x축 + " y축 : " +
//       this.y축 + " 위치에 " + this.모양 + "그리기";

//   }
// }

// document.write("모양 : " + shape.draw());

// 객체 생성 방법 1.객체 리터럴 방식 : 변수처럼 객체를 생성하는 방식

// 학생 객체 생성(학년, 반, 번호, 이름)
// var student_name = "김춘추";
// var student = {
//   학년: 1,
//   반: 3,
//   번호: 2022010327,
//   이름: student_name
// };

// document.write("<br>" + student.이름);

// 객체 생성 방법 2.생성자 방식 -> new 연산자로 생성하는 방식
// 생성자 방식 1) Object객체로 생성
// 생성자 방식 2) 함수를 통한 생성

// var music = new Object();
// music.title = "라이언";
// music["가수"] = '여자아이들';
// music.link ='iframe width = "639 heigth = '

// console.log(music.가수);
// document.write("<br><a href='javascirpt:open();'>" +music["title"]+ " " + music.가수+ "</a>");

// function open(link) {
//   document.getElementById("play").innerHTML = music.link;
// }
// var 제목 = "안녕";
// var 가수 = "폴킴";
// music.title = 제목;
// music.가수 = 가수;

// document.write("<br>" + music["title"] + " " + music.가수)

// function movie(제목, 감독, 년도, 장르) {
//   this.영화제목 = 제목;
//   this.감독 = 감독;
//   this.개봉년도 = 년도;
//   this.장르 = 장르;
//   // this.view = function(){
//   //   return this.영화제목 + " " +this.감독;
//   // }
// }

// var m1 = new movie("한산","김**",2022,"전쟁");
// document.write(m1.영화제목);


// movie.prototype.view = function(){
//   return this.영화제목 + " " +this.감독;
// }

// var m2 = new movie("공조2","이석훈",2022,"액션");
// document.write("<br>"+m2.view());