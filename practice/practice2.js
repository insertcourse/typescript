"use strict";
// //map 배열의 각 요소에 어떤 행위를 한 결과를 새 배열로 반환.
// [2,4,6,8,10].map(
//     function(e){
//         return e*8;
//     }
// ) //배열에 8을 곱한 값인 16,32,48,64,80 이 반환됨.
const persons = [
    { name: 'youngeun', age: 17, gender: 'F', job: 'student' },
    { name: 'siyeon', age: 17, gender: 'F', job: 'student' },
    { name: 'jungkook', age: 26, gender: 'M', job: 'idol' },
    { name: 'whowho', age: 31, gender: 'M', job: 'doctor' },
];
const filteredPersons = persons.filter(persons => persons.job === 'student');
console.log(filteredPersons);
//job이 student인 사람만 출력 즉, youngeun 과 siyeon이 출력됨...
