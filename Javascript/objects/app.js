//how to make objects

const humanbody = {
  name: "diwaker",
  age: "18",
  full_name:"diwaker dwivedi",
  bodyParts: {
    upperpart: "head",
    lowerpart: "foot",
  },
  see: function () {
    console.log("your eyes sees everything");
  },
  arr: [1, 2, 3, 4],
};
// console.log(humanbody.map((res) => console.log(res)));
// const arr = [
//   {
//     name: "diwaker",
//     age: "18",
//     bodyParts: {
//       upperpart: "head",
//       lowerpart: "foot",
//     },
//     see: function () {
//       console.log("your eyes sees everything");
//     },
//     arr: [1, 2, 3, 4],
//   },
//   {
//     name: "diwaker",
//     age: "20",
//     bodyParts: {
//       upperpart: "head",
//       lowerpart: "foot",
//     },
//     see: function () {
//       console.log("your eyes sees everything");
//     },
//     arr: [1, 2, 3, 4],
//   },
//   {
//     name: "diwaker",
//     age: "22",
//     bodyParts: {
//       upperpart: "head",
//       lowerpart: "foot",
//     },
//     see: function () {
//       console.log("your eyes sees everything");
//     },
//     arr: [1, 2, 3, 4],
//   },
//   {
//     name: "diwaker",
//     age: "24",
//     bodyParts: {
//       upperpart: "head",
//       lowerpart: "foot",
//     },
//     see: function () {
//       console.log("your eyes sees everything");
//     },
//     arr: [1, 2, 3, 4],
//   },
// ];

// console.log(arr.filter((res)=>res.age>23));


// how to access the object using dot and ["bracket notaion"]
// console.log(humanbody["name"]);
// console.log(humanbody.full_name);



//how to change the value
// console.log('humanbody: ', humanbody);
// humanbody.full_name="sarthak chug"
// console.log('humanbody: ', humanbody);

//how to add new property in object

// humanbody.dob = "me nhi btaunga"
// console.log('humanbody: ', humanbody);
// how to delete any property using delete
// delete humanbody.dob
// console.log('humanbody: ', humanbody.dob);

//can objects have function stored inside it

//how to make nested object
//role of this keyword in side object

    let person = {
    name: "diwaker",
    age: 18,

    greet: function() {
        console.log(this.age);
    }
    
};

person.saygoodmorning = function(){
   console.log(this.name + " " + "good morning");
   
}
// console.log();
person.greet()
person.saygoodmorning()







// person.evegreet = function(){
//    console.log(this.name)
// }
//  person.evegreet();

// person.greet();

//tell some methods like Object.keys , .value ,Object.entries, in , hasOwnProperty etc

// let student = {
//    name: "Rahul",
//    age: 20
// };
// console.log(Object.values(student));
// console.log(student.hasOwnProperty("name"));

// let nums = [1,2,3,4]
// console.log('nums: ', Array.isArray(student));
// console.log(typeof student);
