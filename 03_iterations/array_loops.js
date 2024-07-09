const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello world";
// for (const char of greeting) {
//     console.log(`Character is ${char}`);
// }

const map = new Map();

const myObject = {
    'js': 'JavaScript',
    'cpp': 'C++',
    'swift': 'Swift by apple'
}

for(const key in myObject) {
    console.log(`${key}:- ${myObject[key]}`);
}

const coding = ['js', 'ruby', 'java', 'cpp', 'python']
coding.forEach( (element) => {
    console.log(element);
} );


const languages = [
    {
        language: 'JavaScript',
        fileExtension: '.js'
    },
    {
        language: 'Java',
        fileExtension: '.java'
    },
    {
        language: 'C++',
        fileExtension: '.cpp'
    }
];

languages.forEach( (object) => {
    console.log(`${object['language']} :- ${object['fileExtension']}`);
} );
