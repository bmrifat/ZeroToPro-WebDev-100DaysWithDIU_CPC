/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// var bmi = 22;
const bmi = 22;

if (bmi < 18.5) {
    console.log = ('Underweight');
}
else if (bmi <= 24.9) {
    console.log = ('Normal');
}
else if (bmi <= 29.9) {
    console.log = ('Overweight');
}
else {
    console.log = ('Obese');
}
