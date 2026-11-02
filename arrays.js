//THIS IS MY DEMONSTRATION FOR TASK 8

//ARRAY TYPE 1:
//LIST

const names = new Array;
const names2 = [];

//inserting data into a list:
names.push("njau","kiarie","cashy");
names2.push("john");

//removing data from a list
names.pop() //this will remove the last item in the list

//iterating through a list
names.forEach((name, index) =>{
    names[index] = name.toUpperCase(); //this will convert every item in the list to uppercase
});


names[0] //returns the first item in the list

console.log("upper: ", names);
//ARRAY TYPE 2:
//OBJECT

const student = new Object;
const  student2 = {};

//inserting a record into an object
student["name"] = "john njau";
student["age"] = 21;
student2["name"] = "salvin ojiambo";

//removing an object property
delete student.name;

//iterating an object's properties
for(const [key, value] of Object.entries(student)){
    console.log(`key : ${key}, value : ${value}`);
};

console.log(student["age"]); //this is going to log the value of the "age" property as in the object

//ARRAY TYPE 3:
//SET

const admissions = new Set();

//adding data to a Set

admissions.add(19348);
admissions.add(22400);

//removing data from a set

admissions.delete("22400"); //this will remove the specified item if it exists

//checking if an item exists

console.log(admissions.has(19348)); //this is going to log a boolean- true if 19348 exists and false if it doesnt