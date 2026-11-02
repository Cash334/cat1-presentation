//TASK 8 QUESTION II

const array = []; //or const array = new Array;

//inserting 5 integers into the array

array.push(1,2,3,4,5);

//displaying the integers

console.log(array);

//2x2 array QUESTION III OF TASK 8

const matrix = [];

const inserter = (people) =>{ // people will be a list of objects like [{name:"john","age":21},{"name":"salvin", "age":22}]

    if(!people || people.length === 0){
        return console.log("invalid data!")
    };

    for(const person of people){
        const {name, age} = person;

        if(!name || name.length === 0 || !age || isNaN(age)){
            console.log("invalid data detected: ",`${JSON.stringify(person)} was skipped`);
            continue
        };

        console.log(`${name} was added to tha array!`);

        matrix.push([name, age]);
    };

    console.log(matrix);

};

const students = [
    {"name" : "njau"},
    {"name" : "salvin", "age" : 22},
    {"name" : "janet", "age" : 23}
];

inserter(students);