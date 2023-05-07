"use strict";
const person = ({ name, age, gender, job }) => {
    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);
    console.log(`성별: ${gender}`);
    if (job) {
        console.log(`직업: ${job}`);
    }
};
