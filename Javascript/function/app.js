// topics to be covered
// what is function
// what is function invocation

// what is the diff. between show and show( )
//role of return keyword in function
//what happen when you dont write return keyword

// what are parameters and arguments
// how arrow function is different from the normal funtion
//how to assign default value in parameters

//what is argument
//the argument object
// function show() {
//   console.log(arguments);
// }

// show(10, 20, 30);

//arrow function have argument object ?
// let show = ()=>{
//     console.log(arguments);
// }

// show(10,20,30)





//what is pass by value and pass by ref .





//pass be value example

// function change(x) {
//   x = 50;
//   console.log("Inside:", x);
// }

// let a = 10;

// change(a);

// console.log("Outside:", a);


// pass be reference example 

// function change(user) {
//   user.name = "Rahul";
// }

// let person = { name: "Diwaker" };

// change(person);

// console.log(person); 

//another example

// function add(arr) {
//   arr.push(4);
// //   arr.push("kanak")
//   arr.pop()
// }

// let nums = [1,2,3];

// add(nums);

// console.log(nums);

//what do you mean by function expression

// const greet = function () {
//   console.log("Hello");
// };
    // is function expression allows hoisting 
    //what is Anonymous function
//     let sayHi = function() {
//      console.log("Hi");
//        };

//      sayHi();
    // is arrow function are function expression 


    // function show(){
    //     console.log("hello");
        
    // }
    
    // function sum (a, b,...rest){
    //     console.log('rest: ', rest);
    //     console.log('a, b: ', a, b);
    //     if(b==0){
    //         console.log("please enter the second argument");
            
    //     }
    //     return a +b
    // }

    // function sum (a,b,...rest){
    //     console.log('rest: ', rest);
    //     console.log(arguments);
        
    // }

    // sum()
    // console.log('sum: ', sum(20,30,40,50,60));
    // sum(30,20,40,50,60)

    //function expression
//     sum()
//     function sum (){
// console.log("sum is called");

//     }
// sum()
// let sum  = function(){
//     console.log("sum is called");
// }

    // let a = function  (a,b){
    //     console.log("result is ",  a +b);
        // return a +b;

    // };
    // sum(10,20)
    // console.log('    sum(10,20): ', a(10,20));

    // let addition = ()=>{
    //     console.log("arrow function");
        
    // }
    // console.log('addition: ',);
    //  addition()
    // sum(10,30);