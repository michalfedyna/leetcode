function majorityElement(nums: number[]): number {
  const elements = new Map<number, number>();

  nums.forEach((item) => {
    let element = elements.get(item);

    if (element) {
      elements.set(item, ++element);
    } else {
      elements.set(item, 1);
    }
  });

  let majority: { number: number; count: number } = { number: 0, count: 0 };

  elements.forEach((item, key) => {
    if (item > majority.count) majority = { number: key, count: item };
  });

  return majority.number;
}
