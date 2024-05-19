// mymath.js

// mymath.js

function max(...args) {
    if (args.length === 0) {
        throw new Error("At least one argument is required");
    }

    let maxValue = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] > maxValue) {
            maxValue = args[i];
        }
    }
    return maxValue;
}

function min(...args) {
    if (args.length === 0) {
        throw new Error("At least one argument is required");
    }

    let minValue = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < minValue) {
            minValue = args[i];
        }
    }
    return minValue;
}

// Export the functions
module.exports = { max, min };
