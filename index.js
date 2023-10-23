function reverseString() {
    const inputElement = document.getElementById("stringInput");
    const outputElement = document.getElementById("reverseOutput");
    const inputString = inputElement.value;
    const reversedString = inputString.split("").reverse().join("");
    outputElement.textContent = "Answer: " + reversedString;
}

function isPalindrome(input) {
    const reversedInput = input.split("").reverse().join("");
    return input === reversedInput;
}

function checkPalindrome() {
    const inputElement = document.getElementById("palindromeInput");
    const outputElement = document.getElementById("palindromeOutput");
    const input = inputElement.value;
    if (isPalindrome(input)) {
        outputElement.textContent = "Hurray! It is a Palindrome";
    } else {
        outputElement.textContent = "Oops! It is not a Palindrome";
    }
}

function calculateTotal() {
    const subtotalElement = document.getElementById("subtotalInput");
    const tipElement = document.getElementById("tipInput");
    const totalElement = document.getElementById("totalOutput");
    const subtotal = parseFloat(subtotalElement.value);
    const tipPercentage = parseFloat(tipElement.value);
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;
    totalElement.textContent = "Total amount including tip: $" + totalAmount.toFixed(2);
}    


