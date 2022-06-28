console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Carlos";
let hacker2 = "Alberto";
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let spacedHacker1 = "";

for (i = 0; i < hacker1.length; i++) {
  spacedHacker1 = spacedHacker1 + " " + hacker1[i];
}
console.log(`${spacedHacker1.toUpperCase()}`);

//3.2
console.log(hacker1.split("").reverse().join(""));

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}
