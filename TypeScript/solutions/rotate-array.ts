/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (nums.length <= 1 || k === 0) return;

  const buffer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const length = nums.length;
    const index = stepsToIndex(k, i, length);

    buffer[index] = nums[i];
  }

  for (let i = 0; i < buffer.length; i++) {
    nums[i] = buffer[i];
  }
}

function stepsToIndex(steps: number, index: number, length: number): number {
  return index + steps - Math.floor((steps + index) / length) * length;
}
