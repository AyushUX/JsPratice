// even no
// let data  =[1,23,23,32,12,43,64,55,2,23,52,32]
// let eno=[]
// for(let i=0;i<data.length;i++){
//   if( data[i]%2==0){
//     eno.push(data[i])
//   }
// }
// console.log(eno)

//     // odd no
//      let data  =[1,23,23,32,12,43,64,55,2,23,52,32]
//     let ono=[]
//     for(let i=0;i<data.length;i++){
//       if( data[i]%2==1){
//         ono.push(data[i])
//       }
//     }
//     console.log(ono)

// // div by 5
// let data  =[1,23,23,32,12,43,64,55,2,23,52,32]
//     let fiveno=[]
//     for(let i=0;i<data.length;i++){
//       if( data[i]%5==0){
//         fiveno.push(data[i])
//       }
//     }
//     console.log(fiveno)

// sum of all the numbers
// let data  =[1,23,23,32,12,43,64,55,2,23,52,32]
// let sum=0
// for(let i=0;i<data.length;i++){
//   sum+=data[i]
// }
// console.log(sum)

// largest number
let data  =[1,23,23,32,12,43,64,55,2,23,52,32]
let ln=0

for(let i=0;i<data.length;i++){
      if(data[i]>ln){
        ln=data[i]
      }
    }
console.log(ln);

// OR
// let data = [1, 23, 23, 32, 12, 43, 64, 55, 2, 23, 52, 32];
// let ln = Math.max(...data);
// console.log(ln);

// // duplicate number
// let data  =[12,23,23,23,12,43,64,55,12,23,52,32]
// let n_arr=[]
// for(let i=0;i<data.length;i++){
//   if(!n_arr.includes(data[i])){
//     n_arr.push(data[i])
//   }
// }
// console.log(n_arr)

// missing no
// let arr =[43,52,54,66,62,61]
// console.log(Math.max(...arr))
// let missingno=[]
// for(let i=Math.min(...arr);i<Math.max(...arr);i++){
//     if(!arr.includes(i)){
//       missingno.push(i)
//     }
// }
// console.log(missingno)

// vowels
// let str ='i love my country india'
// let split = str.split('')
// let vow =['a','e','i','o','u']
// let vowCount=[]
// for(let i=0;i<split.length;i++){
//   if(vow.includes(split[i])){
//     vowCount.push(split[i])
//   }
// }
// console.log(vowCount.length);

// reverse
// let str ='javascript'
// let split = str.split('')
// let rev=''
// for(let i=0;i<split.length;i++){
//   rev = split[i]+rev
// console.log(rev);

// }
// console.log(rev);

// OR
// let str = 'Javascript';
// let rev = str.split('').reverse().join('');
// console.log(rev);

let str ='i love my country india'
let spit = str.split(' ')
let revstr=[]
for(let i=0;i<spit.length;i++){
    revstr.unshift(spit[i])
}
console.log(revstr.join(' '));

// OR
// let str = 'i love my country india';
// let revstr = str.split(' ').reverse().join(' ');
// console.log(revstr);

// longest word
// let str ='i love my country india'
// let split = str.split(' ')
// let lword=split[0]
// for(let i =1;i<split.length;i++){
//   if(split[i].length>lword.length){
//     lword=split[i]
//   }
// }
// console.log(lword)

//Common
// let arr1= [1,2,3,4,5,6]
// let arr2= [5,8,2,9,7]
// let newArr= [];
// for(let i=0; i<arr1.length; i++){
//   for(let j=0; j<arr2.length;j++){
//     if(arr1[i]==arr2[j]){
//       newArr.push(arr1[i]);
//     }
//   }
// }

// console.log(newArr, "Common");


// Common no
let arr1 = [1, 2, 3, 4, 5, 6, 21, 23, 24, 1, 5];
let com=[]
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            com.push(arr1[i])
        }
    }
}
console.log(com);
