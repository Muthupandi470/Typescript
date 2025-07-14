var evenNumber = function (num) {
    return (num % 2 == 0) ? "".concat(num, " even number") : "".concat(num, " odd number");
};
console.log(evenNumber(10));
console.log(evenNumber(7));
