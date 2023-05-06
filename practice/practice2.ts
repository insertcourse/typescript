// 미션 2는 다음과 같습니다!  
// JS의 배열 관련 순수 함수인 map, forEach, filter에 대해  
// 공부해보고, 이를 한 파일에 한 번씩 사용해봅시다!  
// 조건은, 이 함수들을 사용할 때 타입스크립트 문법을 이용해야 합니다.


// filter : 배열을 특정 조건으로 걸러주는 메소드
//홀수만 골라주는 코드
let num : number[]=[2,3,4,5,6,7,8,9,]
let sum : number[]=num.filter((value:number) => value % 2 !== 0)
console.log(sum)


//map : 배열을 가공해서 다른 배열을 만들어내는 메소드
//문자를 분해하는 코드
let sy : string = "siyeon"
let result : string[] = sy.split("").map((value : string) => value)
console.log(result)
//split : 분해하다


//forEach : 배열의 각 요소에 대한 함수를 호출
//생성된 배열을 출력하는 코드
let num1 = [1,2,3]
num.forEach(function (value){
    console.log(value)
})
