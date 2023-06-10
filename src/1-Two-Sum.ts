/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

The main idea here is, if the sum of 2 digits is equal to the target, then the difference between the target and one of the digits will be the other digit and saving it in a map with index as the value will help us to find the other digit in O(1) time.
*/
export function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      res.push(map.get(diff) as number);
      res.push(i);
      break;
    }
    map.set(num, i);
  }

  return res;
}
