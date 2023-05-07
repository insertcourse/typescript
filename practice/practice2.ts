// //map 배열의 각 요소에 어떤 행위를 한 결과를 새 배열로 반환.
// [2,4,6,8,10].map(
//     function(e){
//         return e*8;
//     }
// ) //배열에 8을 곱한 값인 16,32,48,64,80 이 반환됨.

// //forEach 한 개 씩 무언가 하는것..!!
// ['cute','pretty','youngeun'].forEach (
//     function(yeah) {
//         console.log(yeah);
//     }
// )
// //cute, pretty, youngeun이 차례대로 출력 ㅎㅎ

//filter 배열에서 조건에 맞는 것만 반환하기
[1,5,10,15,20].filter (
    function(division){
        return division % 4 === 0;
    }
)
//[20] 배열이 반환된다.