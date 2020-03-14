// console.log("button js");

var readInput = function (){
    var input = document.getElementById('input1');
    console.log(input.value);
};

var btn2 = document.createElement('button'); // HTML 객체에 버튼 element 객체 추가 생성 <button></button> html 속성 통으로 객체 할당
btn2.innerHTML = "버튼2"; // 버튼 박스 안 텍스트 입력
btn2.onclick = readInput; // 버튼 속성으로 onclick 추가 - 클릭 시 readInput 함수 참조

var test = document.getElementById('test'); // <div id='test'> ~ </div> 객체를 'test' 란 참조 변수 생성
test.appendChild(document.createElement('br'));
test.appendChild(btn2); // 'test' 객체에 'btn2' 객체 삽입
