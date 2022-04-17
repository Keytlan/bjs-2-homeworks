// Задание 1
function getArrayParams(arr) {
  
  let min = Infinity
  let max = -Infinity
  let sum = 0
  let avg = 0
  for (let i=0; i < arr.length; i++){
    if (arr[i]<min){
      min = arr[i]
    }else if(arr[i]> max){
      max = arr[i]
    }
    sum += arr[i]
    
    avg = sum/arr.length
  }

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  arr.forEach(item => sum += arr[i]);

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) max = sum;
  }

  return max;
}


// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return max - min;
}

