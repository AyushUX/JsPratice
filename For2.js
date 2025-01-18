// let data =[[21,43,12,76,34,78],[44,76,24],[90,55]]

// addition of all the loops
// let sno=[]

// for(let i=0;i<data.length;i++){
//   let sum =0
//   for(let j=0;j<data[i].length;j++){
//       sum+=data[i][j]
//   }
//   sno.push(sum)
// }
// console.log(sno);




//Ek sath Poora add
// let data = [[21,12,34,56,1],[32,16,9],[21,45,60]]
// let sum =0

// for(let i=0;i<data.length;i++){
//   for(let j=0;j<data[i].length;j++){
//     sum = sum+data[i][j]
//   }
// }
// console.log(sum);



//Flat
// const arrData = [[21,12,34,56,1],[32,16,9],[21,45,60]]
// const arr =[]

// for(let i=0;i<arrData.length;i++){
//   for(let j=0;j<arrData[i].length;j++){
//     arr.push(arrData[i][j])
//   }
// }
// console.log(arr)




//Largest no 
// let data = [[21,12,34,56,1],[32,16,9],[21,45,60]]
// let lnoArr=[]

// for(let i=0;i<data.length;i++){
//   let ln=0
//   for(let j=0;j<data[i].length;j++){
//     if(data[i][j]>ln){
//       ln= data[i][j]
//     }
//   }
//   lnoArr.push(ln)
// }
// console.log(lnoArr);




//Divide by 2
// let data = [[21,12,34,56,1],[32,16,9],[21,45,60]]
// let evenArr=[]

// for(let i=0;i<data.length;i++){
//   let esubArr=[]
//   for(let j=0;j<data[i].length;j++){
//       if(data[i][j]%2==0){
//         esubArr.push(data[i][j])
//       }
//   }
//   evenArr.push(esubArr)
// }

// console.log(evenArr);




//Avg
let data = [[21,12,34,56,1],[32,16,9],[21,45,60]]
let avgData =[]

for(let i=0;i<data.length;i++){
  let sum =0
  for(let j=0;j<data[i].length;j++){
    sum+= data[i][j]
  }
  avgData.push(sum/data[i].length)
}
console.log(avgData);