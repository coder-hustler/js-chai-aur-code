const nums = [1,2,3,4,5];

const splicedArray = nums.splice(1,2);
console.log(nums);
console.log(splicedArray);

// slice returns subarray without deleting elements from the original array
// splice returns subarray and deletes elements from the original array

const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]
const real_array = another_array.flat(2);
console.log(real_array);