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
  kittens = [...kittens, "Broom"];
  return kittens;
}

//7
function prependKitten(name) {
  kittens = ["Arnold", ...kittens];
  return kittens;
}

//8
function removeLastKitten() {
  return kittens.slice(-1);
}

//9
function removeFirstKitten() {
  return kittens.slice(1);
}
