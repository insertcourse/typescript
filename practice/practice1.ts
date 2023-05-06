interface PersonType {
    name: string;
    age:number;
    gender: 'F' | 'M';
    job?: string; //선택적인 요소!!!
}


const person = ({ name, age, gender, job }: PersonType) => {
    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);
    console.log(`성별: ${gender}`);
    if (job) {
    console.log(`직업: ${job}`);
    }
};