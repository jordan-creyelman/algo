//import

const sujetOne =require("./sujetone.js")
const sujetTwo=require("./sujettwo.js")


const fileName = process.argv[2];
const sujetone= new sujetOne();
const sujettwo =new sujetTwo();
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split(' ')
  
;
const swap = (arr, leftIndex, rightIndex) => {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
};
const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
     while (arr[i] < pivot) {
        i++;
     };
     while (arr[j] > pivot) {
        j--;
     };
     if (i <= j) {
        swap(arr, i, j); //sawpping two elements
        i++;
        j--;
     };
  };
  return i;
}
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let index;
  if (arr.length > 1) {
     index = partition(arr, left, right);
     if (left < index - 1) {
        quickSort(arr, left, index - 1);
     };
     if (index < right) {
        quickSort(arr, index, right);
     };
  }
  return arr;
}


const mergeSort = (array) => {
  let count = 0;
  let numbers = [...array];
  let middle;

  const merge = (left, right) => {
    let array = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        array.push(left.shift()); 
      } else {
        array.push(right.shift()); 
      }
    }
    return [...array, ...left, ...right];
  };

  const sortSplit = (numbers, middle = numbers.length / 2) => {
    count++;
    if (numbers.length < 2) return numbers;
    let left = numbers.splice(0, middle);
    return merge(sortSplit(left), sortSplit(numbers));
  };
  numbers = sortSplit(array, middle);
  console.log(` Tri fusion : ${count} comparaisons - [${numbers}]`);
}
const bubbleSort=(array)=>{
     
  var comparraison=0
  for(let i=0;i<array.length;i++){
    comparraison++;
    for(let j = 0; j < array.length-i; j++) { 
      if(array[j]>array[j+1]){
        comparraison++
        [array[j],array[j+1]] = [array[j+1],array[j]]
      }
    }
  }
  console.log(array)
}

 const insertionSort=(array)=> {
  var j;
  for(let i=0;i<array.length;i++) {
    j=i
    while (j>0 &&array[j-1]>array[j]){
      [array[j],array[j-1]] = [array[j-1],array[j]];
      j-=1;
    } 
  }
  console.log(array);
}

const selectionSort=(array)=> {
  for (var i=0; i<array.length;i++) {
    let min=i;
    for (var j=i+1; j<array.length;j++){
      if(array[j]<array[min]){
        min=j;
      }
    }
    [array[i],array[min]=array[min],array[i]]
  }
  console.log(array)
}
const trie =(array)=>{
  bubbleSort(array)
  selectionSort(array)
  insertionSort(array)
  console.log(quickSort(array))
  console.log(mergeSort(array))
}

let array = readFileLines(fileName)
var arr= array.map(Number)
trie(arr)

// console.log(sujettwo.nThree([3, 7, 8, 3, 6, 1]))

