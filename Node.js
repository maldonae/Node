import "dotenv/config"; // this line is mandatory when you want to read variables from the '.env' file 
const MY_NAME = process.env.MY_NAME;
const MY_CITY = process.env.MY_CITY;
const MY_LANGUAGE = process.env.MY_LANGUAGE;
console.log("I am " + MY_NAME + ", wilder in " + MY_CITY + ", and I love " + MY_LANGUAGE);