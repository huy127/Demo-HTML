// var array=[1,2,3,4,5,6];

// sum=0;

// for (let i = 0; i < array.length; i++) {
//     sum+=array[i];
    
//     if(i===array.length-6){
//         console.log(sum);

//     }
    
// }


function upperCase(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
  
  function changesrt(str){
    let newArr = str.split("_");
    let newStr = "";
    for(let i of newArr){
      newStr += upperCase(i);
    }
    return newStr;
  }
  
  console.log(changesrt("i_am_huy_pro"));

  const swap= swap1(3,4);

  function swap1(a,b){
    let temp=0;
     
     temp=a;
     a=b;
     b=temp;

    console.log("a="+a);
    console.log("b="+b);
    return {
        a,b
    };
    
  }

function countItem(arr){
  const obj={};
  for(const i of arr){
    obj[i]=0;
  } 

  for(const i of arr){
    if(Object.keys(obj).includes(i+'')){
      obj[i]+=1;
    }

  }
  return obj;
}
console.log(countItem([2,3,5,6,2,3,2,3]));


const arr1=[{
  name:'huy',
  age:10

},
{
  name:'bao',
  age:12
}]

const newArr1=arr1.map((value,index,array) => {
  console.log("value",value);
  console.log("index",index);
  console.log("array",array);
  return {
    name:value.name,
    age:value.age,
    id:index
  }
  
})
console.log("new arr.map",newArr1);

const newArr2=arr1.filter((value,index) =>value.age>10)
console.log("arrfilter",newArr2);


// const newArr3=[2,4,7,9];
// const newarrReduce=newArr3.reduce((previousValue,currentValue,currentIndex,array) => {
//   console.log("pre",previousValue,"currenvalue",currentValue,"curentindex",currentIndex,"array",array);
//   return previousValue+=currentValue;
// },3);
// console.log(newarrReduce);
const newArr3=[2,4,7,9];
const newarrReduce=newArr3.reduce((a,b) => {
  a[0]+=b;
  console.log('pre',a[0]);
  a[1]-=b;
  a[2]*=b;
  return a;
},[0,0,1]);

console.log(newarrReduce);

function foo(a){
var b=a*2;
function bar(c){
  console.log(a,b,c);
  const d=9;
  return function sum(){
    console.log(d*c);
  }
}

const res=bar(b*3);
console.log(typeof res);
console.log(res);

res();
}

foo(2)


/*
=== Bt 1 ========
input: 
- [2, 3, 6, 8, 9, 23, 16]
output: 
- in ra tổng của input


====== bt 2 ===========
input: 
- [2, 3, 6, 8, 9, 23, 16]
- n = 6
output:
- kiểm tra n nó có thuộc vào arrInput??? => in ra có dạng là: {n} có thuộc và vị trí của n là {giá trị của index_n}


=== bt 3 =======
input: 
- arrInput = [2, 3, 6, 8, 9, 23, 16]
- startPoint = 3
- endPoint = 5
output: 
- Nếu endPoint = undefined => lấy mảng mới chứa các phần từ từ startPoint => hết mảng
- Lấy ra mảng chứa phần tử từ startPoint cho đến endPoin

======= bt 4 ======
input: 
- [2, 3, 6, 8, 9, 23, 16]
- n = 6

output:
- Remove n khỏi mảng

*/

const arrsum = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < arrsum.length; i++) {
  sum += arrsum[i];
 
}

console.log(sum);


let n=3;
if(arrsum.includes(n)){
  console.log('n thuoc input '+`va vi tri cua n la: ${arrsum.indexOf(n)}`)

      arrsum.splice(arrsum.indexOf(n),1);

      if(!arrsum.includes(n)){
        console.log(`n=${n} is removed`)


      }
}


let startPoint = 3
let endPoint = 5
var newArrslice = 0
if(startPoint===undefined){
  newArrslice = arrsum.slice(startPoint)

}
newArrslice =  arrsum.slice(startPoint,endPoint+1);

console.log('mang slice: ',newArrslice.toString());



var a=1;
function b(){
  a=10;
  return;
  function a(){

  }
}
b()
console.log(b)
