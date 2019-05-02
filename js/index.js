alert('Hello!');

let userName = 'John';

alert(userName);

let userAge = parseFloat(prompt('Enter your age'));

const message = 'Your age is ' + userAge;

alert(message);

const newAge = addOne(userAge);

const message2 = "Next year your age will be " + newAge;
alert(message2);

if (userAge < 18) {
    alert("You are not adult");
}
else if (userAge > 80 && userAge < 100) {
    alert("You are between 80 and 100");
}
    else if (userAge > 100) {
        alert("You have seen a lot in your life");
    }
    else alert("You are adult");

function addOne(num){
    const result = num + 1;
    return result;
}