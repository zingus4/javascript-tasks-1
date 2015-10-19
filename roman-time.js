var hours = process.argv[2];
var minutes = process.argv[3];
var time="";

if (!(isInteger(hours)) || !(isInteger(minutes)) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log("Incorrect data: time isn't valid")
    process.exit(1);
} 
function isInteger(n) {
    if (Number(n) == n && n % 1 === 0){
        return true
    }
    return false
}
hours = Number(hours);
minutes = Number(minutes);

function returnRomanTime(mt) {
    var t = ''
    if (mt === 0){
        return "-"
    }
    switch(Math.floor(mt / 10)) {
        case 1:
            t += "X"
            break;
        case 2:
            t += "XX"
            break;
        case 3:
            t += "XXX"
            break;
        case 4:
            t += "XL"
            break;
        case 5:
            t += "L"
            break;
    }
    switch(mt % 10) {
        case 1:
            t += "I"
            break;
        case 2:
            t += "II"
            break;
        case 3:
            t += "III"
            break;
        case 4:
            t += "IV"
            break;
        case 5:
            t += "V"
            break;
        case 6:
            t += "VI"
            break;
        case 7:
            t += "VII"
            break;
        case 8:
            t += "VIII"
            break;
        case 9:
            t += "IX"
            break;
    }
    return t;
}
time = returnRomanTime(hours)+":"+returnRomanTime(minutes);
console.log(time)

