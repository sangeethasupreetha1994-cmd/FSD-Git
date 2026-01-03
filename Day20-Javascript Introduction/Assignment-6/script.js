// functions

function calculategrade(){

let Tamil = 89; 
let English = 90;
let Maths = 96;
let Science = 72;
let Social = 65;

let Total = Tamil + English + Maths + Science + Social;

let average = Total / 5;

let askgrade;


if (average >= 90) {
    console.log(grade = "A+");
} else if (average >=80) {
    console.log(grade = "A");
} else if (average >=70) {
    console.log(grade = "B");
} else if (average >=60) {
    console.log(grade = "C");
} else if (average >=50) {
    console.log(grade = "D");
} else if ( average <=50) {
    console.log(grade = "F");
}else{
    console.log("invalid average")
}

alert(
    "Total marks: " + Total +
    "\naverage marks: " + average.toFixed(2) +
    "\ngrade: " + grade
);
}
