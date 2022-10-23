
function discountPrinces(prices, discount){
  var dicounted = [];
  var finalPrice = 0;

  for(var i = 0; i < prices.length; i++){
    var discountedPrice = prices[i] * (1 - discount);
    finalPrice = Math.round(discountedPrice * 100) / 100;
    dicounted.push(finalPrice);

  }
  // console.log(i);
  // console.log(discountedPrice);
  // console.log(finalPrice);

  return dicounted;
}
console.log(discountPrinces([100, 200, 300], 0.5));