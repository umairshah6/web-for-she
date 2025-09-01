#!/usr/bin/env node

// Simple and elegant console display of "I love you Aliza"
function clearScreen() {
    process.stdout.write('\x1b[2J\x1b[0f');
}

function main() {
    clearScreen();
    
    const message = "I love you Aliza";
    const borderLength = message.length + 6;
    
    // Create clean border design
    const topBorder = "┌" + "─".repeat(borderLength) + "┐";
    const middleLine = "│  " + message + "  │";
    const bottomBorder = "└" + "─".repeat(borderLength) + "┘";
    
    console.log(topBorder);
    console.log(middleLine);
    console.log(bottomBorder);
    
    console.log("\n💕 Forever and always 💕");
}

main();
