// let firstname="Ajit";
// let age = 44;
// let isMarried = true;
// console.log("Name is " + firstname + " at age " + age);

// if (isMarried) {
//     console.log(firstname + " is married");
// } else {
//     console.log(firstname + " is unmarried");
// };

// //let counter = 0;

// for ( let counter = 0; counter <= 100; counter++) {
//     console.log(counter);
// };

// const personArray = ["Ajit","Manisha","Ashmee","Pappa", "Mom"];
// const gender = ["Male", "Female", "Female", "Male", "Female"];
// const ages = [10, 12, 13, 14, 15];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     };
// };

// //for (let i = 0; )

// function findSum(a, b) {
//     return a + b;
// }

// const val = findSum(1, 2);
// console.log(val);

// let sum = 0;
// for(let i =0; i < 100000000000000; i++) {
//     sum = sum + 1;
// };
// console.log(sum);


// function sum(num1, num2, fn2Call) {
//     let result = num1 + num2;
//     fn2Call(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum
// const ans = sum(1, 2, displayResultPassive);

function checkAnagram(input1, input2) {
    
    const arrayInput = Array.from(input1);

    if (input1.length != input2.length) {
        return 0;
    } else {
        
        let unmatchCount = 0;
        for (let i=0; i <= input1.length; i++ ) {
            if (input1.substr(i,1) != input2.substr(input2.length - (i+1), 1)) {
                console.log(input1.substr(i, 1) || ' ');
                console.log(input2.substr(input2.length - (i+1), 1));
                return 0;
                break;
            }

        }    
        return 1;
    }
}

let answer = checkAnagram('nisin', 'nitin');
console.log(answer);