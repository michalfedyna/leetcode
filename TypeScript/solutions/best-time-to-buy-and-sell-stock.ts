function maxProfit(prices: number[]): number {
  let profit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      continue;
    }

    if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }

  return profit;
}
