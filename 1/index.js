//Завдання 1: Оголошення та маніпуляція змінними
let number = 78
let  str = "46"
let  bool = true
let nullVal = null
let symbol = Symbol("symbol")
let BigInt = 1n

console.log('number:', number, "type:", typeof number)
console.log('str:', str, "type:", typeof str)
console.log('bool:', bool, "type:", typeof bool)
console.log('undefined:', undefined, "type:", typeof undefined)
console.log('null:', nullVal, "type:", typeof nullVal)
console.log('symbol:', symbol, "type:", typeof symbol)
console.log('BigInt:', BigInt, "type:", typeof BigInt)



let  arr = [
    {
        name: "привіт ",
        age: "хто ти воїн !!!"
    }
]
console.log(arr)
//Завдання 2: Робота з арифметичними операціями та обчисленнями
let numbers = [1,52,45,65,41,5632]

let mean = (numbers / numbers.length) * numbers.length

console.log(Math.round(mean))
console.log(Math.floor(mean))
console.log(Math.ceil(mean))
console.log(Math.abs(mean))
console.log(Math.pow(mean))

let  roundMean = Math.round(mean)

console.log("Середнє арифметичне: " , mean)

if (roundMean % 5 === 0) {
    console.log("без залишку")
} else {
    console.log("Із залишком")
}
let side1 = 15
let side2 = 15
let side3 = 9

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("Трикутник має шанс на існування")
} 
else {
    console.log(" ПУПУПУПУПУ")
}
//Завдання 3: Логічні та порівняльні оператори в умовах

let  minMax = function (numbers){
    console.log("Min: ", Math.min(numbers))
    console.log("Max: ", Math.max(numbers))
}

if (numbers % 2 === 0) {
    console.log("Без залишку")
} else {
    console.log("Із залишком")
}

if (side1 > side2 && side2 < side3) {
    console.log(true)
} else {
    console.log(false)
}
let n = 10

function primality(n) {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    console.log(n > 1)
}

let userName = "надя "
let year = 2025
let city = "луцьк "

let  Years = 2025 - year

if(Years > 10) {
    console.log("Teenager")
} else if (Years > 18) {
    console.log("Veery old")
}

if(city === "Kyiv") {
    console.log("Київ це столиця України!")
} else {
    console.log("Ви не знаходитеся у столиці України")
}




// Завдання 4: Користувацьке введення та складні перевірки
let  currentYear = new Date().getFullYear();


let  name7 = prompt("яке ваше ім'я:");
let  yearOfBirth = prompt("сіко вам років?:");
let  city4 = prompt("місце проживання :");


if (isNaN(yearOfBirth) || yearOfBirth.trim() === "") {
    alert("має бути число !");
} else {
     let  age = currentYear - parseInt(yearOfBirth);

    
    let ageGroup;
    if (age < 12) {
        ageGroup = "дитина";
    } else if (age >= 12 && age < 18) {
        ageGroup = "підліток";
    } else if (age >= 18 && age < 60) {
        ageGroup = "дорослий";
    } else {
        ageGroup = "літня людина";
    }

    
    let  capitals = {
        "Україна": "Київ",
        "США": "Вашингтон",
        "Велика Британія": "Лондон",
        "Франція": "Париж",
        "Німеччина": "Берлін"
    };

    let isCapital = Object.values(capitals).some(capital => capital.toLowerCase() === city.toLowerCase());

    
    alert(`Привіт, ${name7}!
Вам ${age} років, ви належите до вікової групи: ${ageGroup}.
${isCapital ? `${city4} є столицею однієї з країн у нашій базі.` : `${city4} не є столицею в нашій базі.`}`);
}
