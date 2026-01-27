"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_decode_1 = require("jwt-decode"); // Install with `npm install jwt-decode`
//import express = require('express');
var express = require("express");
var app = express();
var prompt = require('prompt-sync')();
var PORT = process.env.PORT || 3000; // Use environment variable or default to port 3000
//const prompt = require('prompt-sync')(); // Import and initialize
//const token = prompt('Please enter your token: ');
//console.log(token);
var token = prompt("Please enter your token:");
app.get('/', function (req, res) {
    res.send('Hello RedHat!');
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
// Define the user's name with a type annotation
//const token: string = prompt("enter token")
//const token: string = textInput.value
function getToken() {
    // The prompt method returns the input as a string or null if canceled
    var token = prompt("Please enter your token:");
    return token;
}
// Example usage triggered by a button click
(_a = document.getElementById("submitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var token1 = getToken();
    if (token1 !== null && token1 !== "") {
        var decoded = (0, jwt_decode_1.jwtDecode)(token);
        alert("Decoded token : , ".concat(decoded, "!"));
    }
    else {
        alert("No token entered or prompt canceled.");
    }
});
