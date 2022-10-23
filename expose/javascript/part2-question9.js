
function discountPrinces(prices, discount){
  const discounted = [];
  const length = prices.length;

  for(let i = 0; i < length; i++){
    const discounterPrice = prices[i] * (1 - discount);
    discounted.push(discounterPrice);
  }

  console.log(i);
  // console.log(length);

  return discounted;
}
discountPrinces([100, 200, 300], 0.5);