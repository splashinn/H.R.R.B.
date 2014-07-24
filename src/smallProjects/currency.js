// currency.js
// splashinn

function convert(amount) {
  var exchangeRate = .66;
  return amount * exchangeRate;
}
console.log(convert(5400));
// The above function converts U.S. currency to pounds

function convertMoney(amount, country) {
  var exchange = {
    "eu": .76;
    "uk": .66;
    "ca": 1.5;
  };
  var rate = exchange[country];
  var newMoney = amount * rate;
  return newMoney;
}
// The above function converts money to said country
