var hours = Number(process.argv[2]);
var minutes = Number(process.argv[3]);
var time="";

var higherNumbers = {
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L'
};
var belowNumbers = {
    0: '-',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
};

if (!isInteger(hours) || !isInteger(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log("Incorrect data: time isn't valid")
    process.exit(1);
} 
function isInteger(n) {
    return (Number(n) == n && n % 1 === 0)
}
function returnRomanTime(data) {
    if (data === 0){
        return "-"
    }
    return higherNumbers[Math.floor(data / 10)]+belowNumbers[Math.floor(data % 10)];
}
time = returnRomanTime(hours)+":"+returnRomanTime(minutes);
console.log(time)

