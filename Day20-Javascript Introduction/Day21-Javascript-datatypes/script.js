// primitive types

let userid = "Sangeetha123"; // string
console.log(typeof userid);

let username = "sangeetha";
console.log(typeof username); // string

// object

let user = {
    username: "sangeeths",
    role: "student",
    mobileNumber: "9361592859",
    address: "madhavaram",
    location: "chennai",
    state: "tamil nadu",
    district: "thiruvallur",
    country: "india"
}; // user _> 1 object _> 7 key

console.log(typeof user);

function Welcome(){
    console.log(Welcome);
    console.log("You're logged in");
}
Welcome();

let skills = ["drawing","tailoring","cooking"];
console.log(Array.isArray(skills));

let account = {
    username: "sangeetha",
    accountnumber: 2356789767,
    branch: "tamilnadu",
    country: "india",
    accountactive: true
};

let updateaccount = account;

updateaccount.husbandname = "anandhan";
updateaccount.accountnumber = "8807678515";
console.log(account);