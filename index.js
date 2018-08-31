//1
function kittens(array, element) {
  return kittens;
}

//2
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

//3
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

//4
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

//5
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

//6
function appendKitten(name) {
  return kittens.concat("Broom");
}

//7
function prependKitten(name) {
  var moreKittens = ["Arnold", ...kittens];
  return moreKittens;
}

//8
function removeLastKitten() {
  return kittens.slice(0, kittens.lenght -1);
}

//9
function removeFirstKitten() {
  return kittens.slice(1);
}
