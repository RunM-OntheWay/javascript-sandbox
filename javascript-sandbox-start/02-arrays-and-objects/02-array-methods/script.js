const arr = [34, 123, 15, 13, 454, 12];

arr.push(100);
arr.pop()
arr.unshift(99)
arr.shift()

console.log(arr);

//arr.reverse();
//console.log(arr);

x= arr.includes(15);

x = arr.indexOf(15);

x=arr.slice(1,4);
// x= arr.splice(1,4);

x= arr.splice(2,2).reverse().toString().charAt(2);

console.log(x);

