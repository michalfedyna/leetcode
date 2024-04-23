/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const result: number[] = [];

  for (let i = 0, k = 0, j = 0; i < m + n; i++) {
    if (k < m && (typeof nums2[j] === "undefined" || nums1[k] <= nums2[j])) {
      result.push(nums1[k]);
      k++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = result[i];
  }
}
