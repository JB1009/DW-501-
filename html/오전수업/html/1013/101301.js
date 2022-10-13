window.onload = function () {
  var movie = document.querySelectorAll(".movie");
  for (var i = 0; i < movie.length; i++) {
    movie[i].addEventListener("focus", function () {
      this.setAttribute("class", "movie active");
    })
    movie[i].addEventListener("blur", function () {
      this.setAttribute("class", "movie");
    })
  }
}

//객체 : 사물,사람,동물등 대표성을 지닌 독립적인 존재
/*
  모든 객체는 자신만의 속성(특징)을 가지며,자신만의 행동을 갖는다.
  객체는 자신만의 속성을 가진다 -> 변수
  객체는 자신만의 행동을 갖는다 -> 함수

  객체정의 : 추상화 시켜 놓은 것
  추상화의 기본 : 속성과 행동을 나열하고 구성한다.

*/