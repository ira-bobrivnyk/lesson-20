//Завдання 1//


let number = parseInt(prompt("Введіть число"));


let sum = 0;


for (let i = number; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10;
    sum += digit;
}



console.log(sum) 







//Завдання 2//

let cascade = parseInt(prompt("Введіть число"));

    for (let i = cascade; i >= 1; i--) {
        let line = "";  
        for (let j = 1; j <= i; j++) {
            line += j + " "; 
        } 
        
        console.log(line); 
    }

    





   //Завдання 3// 


   let userInputNum = parseInt(prompt("Введіть число"));

let message;

let numStr = String(userInputNum);

let isPalindrome = true;

for (let i = 0; i < numStr.length / 2; i++) {
   if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      isPalindrome = false;
      break;
   }
}

if (isPalindrome) {
    message = `Введене Вами число ${userInputNum} є паліндромом`;
} else {
    message = `Введене Вами число ${userInputNum} не є паліндромом`;
}

console.log(message);



 //Завдання 4// 


 let number = prompt("Введіть число");
 let reversedNumber = "";
 
 
 for (let i = number.length -1; i >= 0; i--) {
    reversedNumber += number[i];
 }


 console.log(reversedNumber)