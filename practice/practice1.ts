// 1. 사람 객체를 생성한다.
// 2. 사람 객체에는 name, age, gender, job 속성이 있으며, job 속성은 선택적인 요소이다.
// 3. 인터페이스를 생성하여 사람 객체가 가지고 있는 속성들의 타입을 지정한다.  
// name과 job은 문자 타입, age는 숫자, gender는 반드시 'F'와 'M'만 들어가야 한다.
// 4. 사람 객체를 구조 분해 할당을 사용해 파라미터로 넘겨받아, 사람의 속성을 console로 출력하는 화살표 함수를 작성한다.
// 5. 함수에 사람 객체를 넣고 실행시킨다.

interface PersonType {
    name : string
    age : number
    gender : "F" | "M"
    job? : string //?를 붙이면 선택적인 요소
}

//객체 구조 분해 할당
const PersonType ={
    name1: "siyeon",
    age: 17,
    gender: {
        female :"F",
        male : "M"
    },
    job:"student"
}
const {name1, age, gender:{female}, job} = PersonType
console.log(PersonType)

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





//밑에는 자주 보려고 써놨습니다...

// 구조 분해 할당을 사용하는 이유
// [객체와 배열은 js에서 가장 많이 쓰이는 자료형]
// - 객체사용 : key를 가진 데이터 여러개를 하나로 묶어서 저장할때
// - 배열사용 : 컬렉션에 테이터를 순서대로 저장할때
// + 함수에 객체나 배열에 저장된 데이터 전체가 아닌, 일부만 전달할때
// + 함수의 매개변수가 많을때
// + 매개변수의 기본값이 필요한 경우에도 사용할수있음