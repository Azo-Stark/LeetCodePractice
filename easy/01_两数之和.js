/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let numb = target - nums[i];
    let index = nums.indexOf(numb);
    if (index !== -1 && index !== i) {
      res = [index, i];
    }
  }
  return res;
};
