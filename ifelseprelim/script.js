let age = prompt("Age: ");
let mem = prompt("Do you have Membership: ");

if(age < 12){
    console.log("Ticket is $5");
}else if(age >= 12 && age <= 17){
    console.log("Ticket is $8");
}else if(age >= 18 && age <= 59){
    console.log("Ticket is $12");
}else{
    console.log("Ticket is $6 senior discount");
}

if(mem === yes){
    console.log("You have 20% discount");
}