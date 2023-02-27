const arr = ["sample 1","sample 2","sample 3"]
console.log(arr[3])
if (3 in arr) {
  console.log(arr[3])
} else {
  console.log('index 3 is not found');
}