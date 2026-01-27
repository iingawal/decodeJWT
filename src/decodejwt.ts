import { jwtDecode } from "jwt-decode"; // Install with `npm install jwt-decode`

//import express = require('express');
import * as express from "express";

const app = express();

const prompt = require('prompt-sync')();


const PORT = process.env.PORT || 3000; // Use environment variable or default to port 3000

//const prompt = require('prompt-sync')(); // Import and initialize
//const token = prompt('Please enter your token: ');
//console.log(token);


const token = prompt("Please enter your token:")


app.get('/', (req, res) => {
  res.send('Hello RedHat!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Define the user's name with a type annotation
//const token: string = prompt("enter token")


//const token: string = textInput.value







function getToken(): string | null {
    // The prompt method returns the input as a string or null if canceled
    const token = prompt("Please enter your token:");
    return token;
}

// Example usage triggered by a button click
document.getElementById("submitButton")?.addEventListener("click", () => {
    const token1 = getToken();
    if (token1 !== null && token1 !== "") {
    const decoded = jwtDecode(token);

        alert(`Decoded token : , ${decoded}!`);
    } else {
        alert("No token entered or prompt canceled.");
    }
});
