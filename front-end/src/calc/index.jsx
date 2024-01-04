const formatPrice = (num) => {
  let numberString = num.toString();
  let decimalIndex = numberString.indexOf(".");
  if (decimalIndex === -1) {
    decimalIndex = numberString.length;
  }
  for (let i = decimalIndex - 3; i > 0; i -= 3) {
    numberString = numberString.slice(0, i) + "," + numberString.slice(i);
  }
  return numberString;
};

export default formatPrice;
