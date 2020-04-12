/**
 * @param {number[]} deck
 * @return {boolean}
 */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function calculatePresentNums(e, deck) {
    let num = 0
    deck.forEach(d => {
        if (d == e) num++
    })
    return num
}

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function gcd_more_than_two_numbers(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    var len, a, b;
    len = input.length;
    if (!len) {
        return null;
    }
    a = input[0];
    for (var i = 1; i < len; i++) {
        b = input[i];
        a = gcd_two_numbers(a, b);
    }
    return a;
}

var hasGroupsSizeX = function (deck) {
    var unique = deck.filter(onlyUnique);
    let arrTelle = []
    unique.forEach(e => {
        arrTelle.push(calculatePresentNums(e, deck))
    })
    console.log(arrTelle)
    let minNum = (Math.min.apply(Math, arrTelle))
    minNum = gcd_more_than_two_numbers(arrTelle)
    let bool = true
    if (minNum < 2) return false
    arrTelle.forEach(e => {
        e % minNum !== 0 ? bool = false : null
    })
    return bool
};