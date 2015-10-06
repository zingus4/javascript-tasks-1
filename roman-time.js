var hours = process.argv[2];
var minutes = process.argv[3];
var time="";

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log("Incorrect data: time is not true")
    process.exit(1);
} 

switch(Math.floor(hours / 10)) {
	case 1:
        time += "X";
        break;
	case 2:
        time += "XX"
}
switch(hours % 10) {
	case 1:
        time += "I"
        break;
	case 2:
        time += "II"
        break;
	case 3:
        time += "III"
        break;
    case 4:
        time += "IV"
        break;
	case 5:
        time += "V"
        break;
	case 6:
        time += "VI"
        break;
	case 7:
        time += "VII"
        break;
	case 8:
        time += "VIII"
        break;
    case 9:
        time += "IX"
        break;
}
if (hours == "0"){
    time ="-"
}

time += ":"
if (minutes == "0")
{
    time += "--"
}
else 
{
switch(Math.floor(minutes / 10)) {
    case 1:
        time += "X"
        break;
    case 2:
        time += "XX"
        break;
    case 3:
        time += "XXX"
        break;
    case 4:
        time += "XL"
        break;
	case 5:
        time += "L"
        break;
}
switch(minutes % 10) {
	case 1:
        time += "I"
        break;
	case 2:
        time += "II"
        break;
	case 3:
        time += "III"
        break;
    case 4:
        time += "IV"
        break;
	case 5:
        time += "V"
        break;
	case 6:
        time += "VI"
        break;
	case 7:
        time += "VII"
        break;
	case 8:
        time += "VIII"
        break;
    case 9:
        time += "IX"
        break;
}
}
console.log(time)

