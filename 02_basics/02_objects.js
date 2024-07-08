const JS_user = {
    name: "Prem",
    age: 22,
    location: "New Delhi",
    email: "prem@google.com",
}

JS_user.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// JS_user.greeting();
// JS_user['greeting']();

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'a', 4: 'b'};

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const course = {
    courseName: 'js in hindi',
    price: '999',
    instructor: 'hitesh'
}

const {instructor: faculty} = course;
console.log(faculty);

