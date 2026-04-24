// console.log("hello array");

// let names = ["diw" , "dwi" , 1921059 , "diwaker@gmail.com" , "001" , {} , "sarthak" , "chug" , "aaliya" , "saifi"]
// console.log('names: ', names[names.length-2]);
// console.log('names.length: ', names.length);

// for(let i = 0 ; i<=names.length-1;i++){
//     console.log(names[i]);

// }

// let arr = new Array("diw" , "dwi" , 1921059)
// let arr3 = new Array("10")
// console.log('arr3: ', arr3);
// let arr2=[10,20]
// console.log('arr2: ', arr2);
// console.log('arr: ', arr);

// let arr = [];
// arr[0] = "diw";
// arr[1] = "diw";
// arr[2] = "diw";
// arr[3] = "diw";
// arr[4] = "diw";
// arr[5] = "diw";
// arr[6] = "diw";
// console.log('arr.length: ', arr.length);

// arr[arr.length] = "sarthak"
// arr.length
// console.log('arr.length: ', arr.length);
// arr.push("sarthak")
// let remove_val = arr.pop()
// console.log('remove_val: ', remove_val);
// console.log("arr: ", arr);
// arr[7] = "sarthak"

// const names = ["diwaker"]
// names=["dwivedi" , "001"]
// names[0]="dwivedi dwivedi"
// names[1]="diwaker"

// console.log('names: ', names);

//sorting

// let chararr = ["C", "A", "E", "F", "B"];
// let numarr = [ 5,4,3,2,1] //5,4,3,2,1
// let numarr2 = [5, 4, 3, 20, 10]; //20,10,5,4,3
// console.log('numarr: ', numarr2.sort((a,b)=> a-b));
// console.log('numarr: ', numarr.sort((a,b)=> a-b));
// let result = [...numarr ,  ...numarr2]
// let result = numarr.concat(numarr2)
// console.log('result: ', result);
// console.log('result: ', result);
// console.log('result: ', result.sort((a,b)=>a-b));
// let newarr3= {...numarr}
// let newarr = [numarr]
// let newarr2 = [...numarr]

// console.log('newarr: ', newarr);
// console.log('newarr2: ', newarr2);
// console.log('newarr2: ', newarr3);

// let numarr = [5, 4, 3, 2, 1]; //5,4,3,2,1

// let newval = [[numarr]];
// console.log("newval: ", newval.flat(10).toString());
// console.log('newval: ', newval.toString());

// console.log('numarr: ', numarr2.sort());

// console.log('chararr: ', chararr.sort());

//arrayfrom method

// let text = "diwaker";
// let arr = text.split("")
// let arr = Array.from(text)

// console.log('arr: ', arr);
// arr[0] = 'a'
// console.log('arr: ', arr.toString());

// text[0] = 'a'
// console.log('text[0]: ', text);
// let arr =Array.from(text)
// arr.pop()
// console.log('arr: ', arr.toString());
// console.log(Array.from(text).pop());
// console.log(text.split(""));

//continue from here -> 24/4/26
// let sum = 0;
// const number = [2, 4, 6, 1, 10, 30];
// for(let i =0 ; i<number.length;i++){
//     console.log(number[i]);
// }

// const arr = number.map((res) => {
//     return console.log("res: ", res);
// });

// console.log('arr: ', arr);

// const arr = number.map((val)=>{
//     return sum+=val // sum = sum + val;
// })

// const arr = number.map((val)=> sum+=val)
// console.log('arr: ', arr);

// const cartSectionPrice = [299, 1299, 399, 999, 1200]
// const cartSectionPrice = [
//   {
//     name: "phonecase",
//     prize: "299",
//   },
//   {
//     name: "shirt",
//     prize: "1299",
//   },
//   {
//     name: "charger",
//     prize: "399",
//   },
//   {
//     name: "headphones",
//     prize: "1200",
//   },
// ];

// const filterarr = cartSectionPrice.filter((res) => {
//   if (res > 600) {
//     return res;
//   }
// });
// console.log("cartSectionPrice: ", cartSectionPrice);
// const finalCart = cartSectionPrice.filter((res)=>{
//     if(res.prize>600){
//         return res
//     }
//     // console.log(res.prize);

// })
// console.log('finalCart: ', finalCart);

// console.log("filterarr: ", filterarr);

// let sum = 0;
const number = [2, 4, 6, 1, 10, 30];
// console.log(number.includes(60));
console.log(number.some((val)=>{
    // console.log('val: ', val);
    return val%2==0; // ||

}))

console.log(number.every((val)=>{
    // console.log('val: ', val);
    return val%2==0; // &&

}))

// console.log(number.findIndex((val)=>{
//     return val==6
// }));





// const arr = number.reduce((sum, val) => {
//     return (sum += val); // acc = acc + curval
// }, 0);
// console.log('arr: ', arr);
// rest , join , shift , unshift , map , filter , reduce , forEach , find , findindex, inludes , at , with , slice , splice , tospliced , reverse , toreverse , toSorted , some , every
// console.log('at: ', number.at(2));
// console.log('with: ', number.with(1,99));
// console.log('reverse: ', number.reverse());
// console.log('reverse: ', number.toReversed());
// console.log('reverse: ', number.toSorted());

// console.log('join: ', );

// console.log(number.shift())
// console.log('number: ', number);

// console.log(number.toSpliced(0,2,"item1" , "item2" , "item3"))
// console.log('number: ', number);

// console.log(number.shift())
// console.log('number: ', number);

// console.log(number.unshift(1))
// console.log('number: ', number);

// console.log(number.slice())
// const arr = number
// const arr = number.slice()

// console.log('arr: ', arr);
// console.log('number: ', number);

// function show(a,b , ...rest){
//     console.log('a: ', a);
//     console.log('b: ', b);
//     console.log(rest);
// }

// show(1,2,3,4,5,6,7,8)
