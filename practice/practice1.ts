// 1. 사람 객체를 생성한다.
// 2. 사람 객체에는 name, age, gender, job 속성이 있으며, job 속성은 선택적인 요소이다.
// 3. 인터페이스를 생성하여 사람 객체가 가지고 있는 속성들의 타입을 지정한다.  
// name과 job은 문자 타입, age는 숫자, gender는 반드시 'F'와 'M'만 들어가야 한다.
// 4. 사람 객체를 구조 분해 할당을 사용해 파라미터로 넘겨받아, 사람의 속성을 console로 출력하는 화살표 함수를 작성한다.
// 5. 함수에 사람 객체를 넣고 실행시킨다.

interface PersonType {
    name : string
    age : number
    gender : string
    job? : string //?를 붙이면 선택적인 요소
}


//arrow function : 화살표 함수
//형식) const 변수명 = (매개변수명 : 자료형) =>{
//     처리구문
// }
const person =(name:number, age:string, gender:string, job:string) => {
    console.log(name)
    console.log(age)
    console.log(gender)
    console.log(job)
}