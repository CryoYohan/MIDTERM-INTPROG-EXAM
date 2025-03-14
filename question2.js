const delayedGreeting = (name) => {
    setTimeout(() => {
        console.log(`Hello ${name}`);
    }, 2000);
};

// Call setTimeout correctly by passing a reference to the function
const timeout = setTimeout(delayedGreeting, 2000, 'Cyril');

console.log(timeout); // Logs the timeout ID
