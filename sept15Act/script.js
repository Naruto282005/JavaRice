function startWorkout() {
    console.log("Workout Started!")
}
startWorkout();





function calculateSteps() {
    let morning = 2500;
    let evening = morning;

    console.log(morning);
    console.log(evening);
}
calculateSteps();






function logWorkout(activity = "Unknown Activity" , duration){
    console.log(`I did ${activity} for ${duration} minutes.`)
}
logWorkout("Basketball", 20);
logWorkout("Volleybal", 30);
logWorkout("Running", 50);





function caloriesBurned(minutes){
    return minutes * 5;
}

let calories = 30;
console.log(`calories burned in ${calories}`)

function isGoalMet(steps){
    return steps >= 10000;
}

let calor = 12000;
let calori = 8000;
console.log(`Total steps ${calor}`, isGoalMet(12000));
console.log(`Total steps ${calori}`, isGoalMet(8000));






function multiplyCalories(rate, minutes){
    return rate * minutes;
}

function dailyCalories(rate, minutes){
    let total = multiplyCalories(rate,minutes);
    total += 50;
    return total;
}
let result = dailyCalories(8, 30);
console.log(`My DailyCalories Burn ${result}`);






let glob = "Fitness Tracker";
function printProgram(){
    console.log(glob);

    let workoutType = "Cardio";
    console.log(workoutType);

}
printProgram();
//console.log(workoutType);








console.log("Before declaration:", steps); 
var steps = 5000;

console.log("After declaration:", steps); 


