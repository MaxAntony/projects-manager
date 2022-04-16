export function calcIvgAndEarning(cost: any, price: any) {
  let priceWithoutIgv = price / (1 + 18 / 100);
  let igv = priceWithoutIgv * (18 / 100);

  let earning = priceWithoutIgv - cost;
  // if (earning < 0) throw new Error(`Earning is negative: cost -> ${cost}, price -> ${price}`);
  let earningPercentage = (earning * 100) / cost;

  return {
    earning,
    igv,
    earningPercentage: +earningPercentage.toFixed(2),
  };
}
