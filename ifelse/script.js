let temp = prompt("What's The Temperature: ");

if (temp <= 10){
    console.log("Wear a coat");
}else if(temp >= 11 && temp <= 20){
    console.log("Wear a Jacket");
}else if(temp >= 21 && temp <= 30){
    console.log("Wear a Tshirt");
}else if(temp >= 31){
    console.log("Wear light clothes");
}else{
    console.log("Raining Bring Umbrella");
}