let movieArray = ["DragonBall", "Naruto", "One Piece", "Yokai", "DemonSlayer", "Jujutso", "Saitama", "DrStone", "Bleach", "MyHeroAcademia"];

console.log(movieArray);
console.log(movieArray[0]);
console.log(movieArray[9]);

console.log(movieArray[4], ", ", movieArray[5], ", ", movieArray[6]);

for (let i = 0; i < movieArray.length; i++) {
    console.log(movieArray[i]);
}

let numbers = [11, 22, 33, 44, 55];

numbers[0] = 100;
numbers[4] = 500;

for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 10;
}

console.log(numbers);


numbers.splice(2, 0, "ruby");
numbers.splice(4, 1);
console.log(numbers);

numberslice = numbers.slice(0, 4);

console.log(numberslice);










