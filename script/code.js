


// I created and added a promise

let queAsk = new Promise(askForNumbers);

// I created a function and gave it two arguement

function askForNumbers(resolve, reject) {
    let numb1 = +parseFloat(prompt("Enter your first number:"));
    let numb2 = +parseFloat(prompt("Enter your second number:"));

// I used if and else satements to see if they 

    if (!isNaN(numb1) && !isNaN(numb2)) {
        let sum = numb1 + numb2;
        resolve(`The entered numbers are ${numb1} and ${numb2}. Their sum is ${sum}.`);
    } else {
        let error = "Invalid input: ";

        if (isNaN(numb1)) {
            error += `${numb1} numb1 is a string. `;
        }

        if (isNaN(numb2)) {
            error += `${numb2} numb2 is a string. `;
        }

        reject(error);
    }
}

// Output---

queAsk
    .then(completed => alert(completed))
    .catch(reject => alert(reject));

